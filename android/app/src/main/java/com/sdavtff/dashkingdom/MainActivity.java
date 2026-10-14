package com.sdavtff.dashkingdom;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.os.Vibrator;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.util.Log;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Hosts the game (HTML5 + WebGL/Three.js, bundled in assets/www) in a fullscreen,
 * landscape, immersive WebView. All content is served from the APK assets through
 * a virtual HTTPS origin, so the game runs fully offline.
 */
public class MainActivity extends Activity {
    private static final String TAG = "DashKingdom";
    private static final String HOST = "appassets.androidplatform.net";
    private static final String ORIGIN = "https://" + HOST + "/";
    private static final String PREFS = "dash_kingdom_save";

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Window w = getWindow();
        w.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON | WindowManager.LayoutParams.FLAG_FULLSCREEN);
        if (Build.VERSION.SDK_INT >= 28) {
            WindowManager.LayoutParams lp = w.getAttributes();
            lp.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            w.setAttributes(lp);
        }

        if ((getApplicationInfo().flags & android.content.pm.ApplicationInfo.FLAG_DEBUGGABLE) != 0) {
            // debug builds: inspect the game with chrome://inspect on a desktop
            WebView.setWebContentsDebuggingEnabled(true);
        }
        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(27, 58, 140));
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        webView.setVerticalScrollBarEnabled(false);
        webView.setHorizontalScrollBarEnabled(false);
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);
        webView.setHapticFeedbackEnabled(false);

        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        s.setUseWideViewPort(true);
        s.setLoadWithOverviewMode(true);
        s.setCacheMode(WebSettings.LOAD_NO_CACHE);
        s.setTextZoom(100);

        webView.addJavascriptInterface(new Bridge(), "AndroidBridge");
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(ConsoleMessage m) {
                Log.d(TAG, m.message() + " (" + m.sourceId() + ":" + m.lineNumber() + ")");
                return true;
            }
        });
        webView.setWebViewClient(new AssetClient());

        setContentView(webView);
        hideSystemUi();
        // optional: "autostart" extra opens a stage directly (used by automated device tests)
        String auto = getIntent() != null ? getIntent().getStringExtra("autostart") : null;
        webView.loadUrl(ORIGIN + "index.html" + (auto != null && auto.matches("[0-4]") ? "?autostart=" + auto : ""));
    }

    @SuppressWarnings("deprecation")
    private void hideSystemUi() {
        View decor = getWindow().getDecorView();
        decor.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemUi();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (webView != null) {
            webView.evaluateJavascript("window.onAndroidPause&&window.onAndroidPause()", null);
            webView.onPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        hideSystemUi();
        if (webView != null) {
            webView.onResume();
            webView.evaluateJavascript("window.onAndroidResume&&window.onAndroidResume()", null);
        }
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.removeJavascriptInterface("AndroidBridge");
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }

    @Override
    @SuppressWarnings("deprecation")
    public void onBackPressed() {
        if (webView == null) { super.onBackPressed(); return; }
        // The game decides what "back" means (close menu, pause, ask to quit).
        webView.evaluateJavascript("window.onAndroidBack?window.onAndroidBack():false", null);
    }

    private void confirmExit() {
        new AlertDialog.Builder(this)
                .setTitle("Dash Kingdom 3D")
                .setMessage("Deseja sair do jogo?")
                .setPositiveButton("Sair", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int which) { finish(); }
                })
                .setNegativeButton("Cancelar", null)
                .show();
    }

    /** Serves files from assets/www for the virtual https origin. */
    private class AssetClient extends WebViewClient {
        private final Map<String, String> mime = new HashMap<String, String>();

        AssetClient() {
            mime.put("html", "text/html");
            mime.put("js", "text/javascript");
            mime.put("mjs", "text/javascript");
            mime.put("css", "text/css");
            mime.put("json", "application/json");
            mime.put("png", "image/png");
            mime.put("jpg", "image/jpeg");
            mime.put("svg", "image/svg+xml");
            mime.put("woff2", "font/woff2");
            mime.put("ogg", "audio/ogg");
            mime.put("mp3", "audio/mpeg");
            mime.put("wav", "audio/wav");
        }

        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest req) {
            android.net.Uri u = req.getUrl();
            if (!HOST.equals(u.getHost())) {
                // Fully offline: nothing outside the bundled assets is loaded.
                return new WebResourceResponse("text/plain", "utf-8", 404, "Offline", null, null);
            }
            String path = u.getPath();
            if (path == null || path.equals("/") || path.isEmpty()) path = "/index.html";
            String file = "www" + path;
            String ext = path.substring(path.lastIndexOf('.') + 1).toLowerCase();
            String type = mime.containsKey(ext) ? mime.get(ext) : "application/octet-stream";
            try {
                InputStream in = getAssets().open(file);
                Map<String, String> headers = new HashMap<String, String>();
                headers.put("Cache-Control", "no-cache");
                headers.put("Access-Control-Allow-Origin", "*");
                return new WebResourceResponse(type, "utf-8", 200, "OK", headers, in);
            } catch (Exception e) {
                Log.w(TAG, "Missing asset " + file);
                return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", null, null);
            }
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
            return !HOST.equals(req.getUrl().getHost());
        }

        @Override
        public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
            // The WebView renderer crashed or was killed (low memory): rebuild cleanly
            // instead of letting the whole app crash.
            Log.e(TAG, "Renderer gone, recreating");
            if (webView != null) {
                ((android.view.ViewGroup) webView.getParent()).removeView(webView);
                webView.destroy();
                webView = null;
            }
            recreate();
            return true;
        }
    }

    /** JavaScript bridge: persistent save data, haptics, app info, exit. */
    private class Bridge {
        @JavascriptInterface
        public void saveData(String json) {
            SharedPreferences p = getSharedPreferences(PREFS, Context.MODE_PRIVATE);
            p.edit().putString("save", json).apply();
        }

        @JavascriptInterface
        public String loadData() {
            SharedPreferences p = getSharedPreferences(PREFS, Context.MODE_PRIVATE);
            return p.getString("save", "");
        }

        @JavascriptInterface
        @SuppressWarnings("deprecation")
        public void vibrate(int ms) {
            try {
                Vibrator v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
                if (v != null && v.hasVibrator()) v.vibrate(Math.max(5, Math.min(ms, 400)));
            } catch (Exception ignored) { }
        }

        @JavascriptInterface
        public String getVersion() {
            try {
                PackageInfo pi = getPackageManager().getPackageInfo(getPackageName(), 0);
                return pi.versionName;
            } catch (Exception e) {
                return "1.0.0";
            }
        }

        @JavascriptInterface
        public void exitApp() {
            runOnUiThread(new Runnable() { public void run() { confirmExit(); } });
        }
    }
}
