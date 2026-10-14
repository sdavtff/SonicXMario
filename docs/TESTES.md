# Relatório de testes — Dash Kingdom 3D v1.0.0

Este documento lista **somente testes que foram realmente executados**, com o resultado observado. O que não foi testado está na seção final.

## 1. Compilação do APK
| Teste | Como | Resultado |
|---|---|---|
| Build com ferramentas Android (aapt2 2.20, javac, dx, apksigner) | `python3 tools/build_apk.py` neste ambiente | ✅ APKs debug e release gerados (0,70 MB) |
| Assinatura | `apksigner verify --verbose` | ✅ válido (esquemas v2 + v3; v1 não é necessário para minSdk 24) |
| Manifesto | `aapt2 dump badging` | ✅ pacote `com.sdavtff.dashkingdom`, versão 1.0.0 (1), min 24, target 34, paisagem, permissão só VIBRATE; debug marcado `debuggable`, release não |
| Projeto Gradle/Android Studio | GitHub Actions (`ubuntu-latest`, Android SDK oficial, JDK 17, AGP 8.7.3) → `./gradlew assembleDebug` | ✅ compilou |
| APK conferido com SDK oficial | GitHub Actions: `aapt2 dump badging`, `apksigner verify`, `zipalign -c 4` (build-tools atuais) | ✅ etapa concluída com sucesso |

## 2. Instalação e execução em Android (emulador)
Workflow `.github/workflows/android.yml`, script `tests/android_smoke.sh`, emulador **Android 11 (API 30), x86_64, perfil Pixel 4, 2280×1080, WebView 83**, renderização por software (SwiftShader).

| Etapa | Resultado (execução 38569917592) |
|---|---|
| `adb install` do APK de **release** | ✅ `Success` |
| Abertura (cold start) | ✅ `Status: ok`, abriu em 1,8 s |
| Processo vivo após 35 s no menu | ✅ |
| Toque em JOGAR → fase 1, processo vivo após 40 s | ✅ |
| Toques no botão PULO + arraste no joystick | ✅ sem travamento |
| Botão Voltar (pausa) | ✅ processo vivo |
| Ir para segundo plano (Home) e voltar | ✅ processo vivo |
| Nenhum `FATAL EXCEPTION` no logcat | ✅ |

Na segunda execução (após este commit) o teste também **exige** no logcat as linhas do jogo `[DK] boot ok webgl=…`, `[DK] level loaded green` e `[DK] playing level=green fps=…` — ou seja, que o WebGL iniciou, a fase carregou e quadros de jogo foram processados. Resultado: ver seção "Resultado da execução com verificação de logcat" abaixo.

## 3. Jogabilidade — autopiloto (todas as fases, os dois personagens)
`tests/playthrough.mjs` + `tests/bot.js`: o jogo roda no Chromium (WebGL/SwiftShader) e um piloto automático joga usando o **mesmo joystick e botões virtuais** do jogador, com passo fixo de 1/60 s, seguindo pontos de rota (`tests/routes.mjs`), pulando buracos/degraus/inimigos, esperando plataformas móveis/que piscam/esmagadores e lutando contra os chefes (desviar de ondas de choque, lasers, projéteis e áreas de impacto; atacar quando o chefe fica vulnerável).

**Resultado: 4 rodadas completas consecutivas, 40/40 partidas concluídas, 0 erros de JavaScript.**

| Fase | Zip (tempo de jogo, mortes) | Rocco (tempo de jogo, mortes) |
|---|---|---|
| Green Hills | 28,7 s · 0 | 39,5 s · 0 |
| Mushroom Kingdom | 25,7 s · 0 | ~37 s · 0 |
| Lost Jungle | 29,8 s · 1 | 38,0 s · 0 |
| Lava Castle (chefe Rei Magmor) | 65–71 s · 0 | 111–165 s · 0–2 |
| Final Dimension (chefe Imperador Vórtex) | 100–111 s · 0–1 | 155–184 s · 1–2 |

O autopiloto encontrou e permitiu corrigir problemas reais, entre eles:
- **travamento** dos dois chefes no primeiro ataque de salto/esmagamento (inicialização de estado que nunca rodava a 60 FPS);
- chefe atordoado ainda causava dano ao encostar; área de pisão no chefe alto quase impossível;
- plataformas que piscam na ordem errada (a próxima aparecia quando a atual sumia);
- plataformas móveis sem pausa nas pontas; plataformas que caem pequenas e em zigue-zague;
- inimigos voadores derrubando o jogador de plataformas sobre lava/abismo;
- perigos (meteoros/lasers) continuando ativos após a derrota do chefe;
- checkpoints/linha de chegada que exigiam tocar exatamente no poste.

Uma das rodadas anteriores a essas correções teve 9/10 (a escolha de ataques do chefe é aleatória); as 4 rodadas finais tiveram 10/10.

## 4. Interface e fluxo — `tests/ui_flow.mjs` (31/31 aprovados)
Executado no Chromium em modo celular (915×412, toque) com **cliques e toques reais**:
menu principal; seleção de personagem (salva); seleção de fase (bloqueios); configurações (música, mostrar FPS, limite 30 FPS) **persistem após recarregar**; créditos; JOGAR inicia a fase 1; **joystick por toque move o personagem**; **multitoque** (joystick + PULO) faz pular; botão de pausa; tempo congelado na pausa; continuar; **botão Voltar do Android** pausa/continua; ir para segundo plano pausa automaticamente; coleta de anel; checkpoint; queda → perde vida → renasce no checkpoint; linha de chegada → tela de resultados; **progresso salvo** (fase 2 desbloqueada); próxima fase carrega; última vida → tela de fim de jogo; tentar novamente reinicia com 5 vidas; sair para o menu; última fase → tela final (créditos); Voltar no menu principal; **nenhum erro de JavaScript**.

## 5. Desempenho (medido no Chromium/SwiftShader)
Chamadas de desenho por quadro na posição inicial de cada fase, depois da otimização (culling por distância + orçamento de sombras):

| Fase | Média: draw calls / triângulos | Baixa: draw calls / triângulos |
|---|---|---|
| Green Hills | 128 / 98 mil | 81 / 93 mil |
| Mushroom Kingdom | 162 / 59 mil | 110 / 54 mil |
| Lost Jungle | 152 / 119 mil | 101 / 113 mil |
| Lava Castle | 147 / 28 mil | 103 / 22 mil |
| Final Dimension | 115 / 29 mil | 68 / 23 mil |

Antes da otimização eram 237–336 chamadas. Memória JS ~25–29 MB. APK de 0,7 MB. O FPS medido no computador (10–26 FPS) usa **renderização por software** e não representa um celular.

## 6. O que NÃO foi testado
- **Celular físico real.** Não havia aparelho disponível. FPS, aquecimento e consumo de bateria em celulares reais não foram medidos. A qualidade "Automática" reduz a resolução sozinha se o FPS ficar abaixo de ~75% da meta.
- **Android 7–10 e 12–15** (só Android 11 no emulador). **ARM64 real** não foi testado (o emulador é x86_64); o APK não tem código nativo, então o mesmo arquivo serve para ARM64.
- Áudio audível no aparelho (o áudio é gerado por WebAudio; sem erros, mas ninguém ouviu no Android).
- Gamepad físico.
- Os segredos/medalhas opcionais foram projetados e posicionados com verificação de alcance por cálculo, mas o autopiloto segue apenas o caminho principal.

## Como reproduzir
```bash
cd game && npm ci && npm run build
cd ../android/app/src/main/assets/www && python3 -m http.server 8123 &
cd ../../../../../../tests
node playthrough.mjs http://127.0.0.1:8123/index.html green,mushroom,jungle,lava,final zip,rocco
node ui_flow.mjs http://127.0.0.1:8123/index.html /tmp
node perf_visual.mjs http://127.0.0.1:8123/index.html /tmp
```
(Os scripts usam o Playwright em `/opt/node-tools`; ajuste o import se o seu Playwright estiver em outro lugar.)
