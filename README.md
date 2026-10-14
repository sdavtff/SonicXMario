# Dash Kingdom 3D

Jogo de plataforma 3D para Android que mistura **velocidade, loops, molas, trilhos e anéis** (estilo jogos de velocidade) com **blocos ?, moedas, canos, power-ups e pisões em inimigos** (estilo jogos de exploração). São 5 fases completas, 2 personagens jogáveis, 2 chefes, músicas e efeitos próprios, controles de toque e salvamento local.

> **Personagens originais.** Sonic e Mario são marcas registradas da SEGA e da Nintendo. Como não há licença para usá-los, o jogo traz **Zip** (velocista azul, inspirado no estilo Sonic) e **Rocco** (saltador de boné, inspirado no estilo Mario). Nenhum modelo, música ou arte de terceiros foi utilizado.

## Download

| Arquivo | Uso | Link |
|---|---|---|
| `DashKingdom3D-v1.0.0-release.apk` | **Instalar no celular** (assinado, v2+v3) | [baixar](https://github.com/sdavtff/SonicXMario/raw/ccr-20886c48-ihmmi5/dist/DashKingdom3D-v1.0.0-release.apk) |
| `DashKingdom3D-v1.0.0-debug.apk` | Depuração (WebView inspecionável via `chrome://inspect`) | [baixar](https://github.com/sdavtff/SonicXMario/raw/ccr-20886c48-ihmmi5/dist/DashKingdom3D-v1.0.0-debug.apk) |
| `DashKingdom3D-source-v1.0.0.zip` | Código-fonte completo | [baixar](https://github.com/sdavtff/SonicXMario/raw/ccr-20886c48-ihmmi5/dist/DashKingdom3D-source-v1.0.0.zip) |

- **Versão:** 1.0.0 (versionCode 1) · **Pacote:** `com.sdavtff.dashkingdom`
- **Android mínimo:** 7.0 (API 24) · **Alvo:** Android 14 (API 34)
- **Arquitetura:** independente de arquitetura (Java + WebGL, sem código nativo) — roda em **ARM64 (arm64-v8a)**, ARMv7 e x86_64
- **Tamanho:** ~0,7 MB · **Funciona offline** · **Permissões:** apenas vibração
- Requisitos: Android System WebView/Chrome atualizado com suporte a WebGL (padrão em praticamente todos os aparelhos desde 2017)

Instruções de instalação e solução de problemas: [docs/INSTALACAO.md](docs/INSTALACAO.md) · Relatório de testes: [docs/TESTES.md](docs/TESTES.md)

## O jogo

**Personagens** (escolha no menu *Selecionar Personagem*)

| | Zip — O Velocista Azul | Rocco — O Saltador Preciso |
|---|---|---|
| Velocidade | Altíssima (19 m/s, turbo 31 m/s) | Média (10,5 m/s) |
| Pulo | Pulo em bola (destrói inimigos) | Pulo alto e preciso + **pulo duplo** |
| ATAQUE | No chão: **Spin Dash** · no ar: **ataque teleguiado** | No chão: **soco** · no ar: **pisão** (quebra blocos) |
| ESPECIAL | **Turbo** (segurar; energia vem dos anéis) | **Bola de fogo** (com Flor de Fogo) ou **giro** |

**Fases**
1. **Green Hills** — colinas, rampas, 2 loops, painéis de impulso, molas, trilho e caminho alternativo.
2. **Mushroom Kingdom** — blocos ?, tijolos, bloco oculto, canos (um leva a uma sala secreta), plataformas móveis/que caem, mastro da bandeira.
3. **Lost Jungle** — troncos balançando, espinhos, dardos, cipó sobre o rio, muro secreto de tijolos, esmagadores e uma cachoeira escondendo segredo.
4. **Lava Castle** — lava, plataformas móveis/circulares, barras de fogo, bolhas de lava, esmagadores e o chefe **Rei Magmor** (barra de vida, 2 fases de ataque).
5. **Final Dimension** — plataformas que piscam, gravidade baixa, portais, loop + trilho no espaço e o chefe final **Imperador Vórtex** (3 fases de ataque).

Cada fase tem início, objetivo, obstáculos, inimigos, anéis/moedas, checkpoints, **3 Medalhas Estrela secretas** e tela de conclusão com pontuação (bônus de tempo, anéis e "sem morrer"). Sistema de vidas, corações (saúde), escudo, invencibilidade, super velocidade, 1UP, 100 anéis/moedas = vida extra.

**Controles de toque:** joystick virtual à esquerda (dinâmico ou fixo), botões **PULO / ATAQUE / ESPECIAL** à direita, arraste o lado direito da tela para girar a câmera, botão de pausa. Configurações: volume de música/efeitos, sensibilidade e inversão da câmera, câmera automática, tamanho dos botões, qualidade gráfica (auto/baixa/média/alta), limite de 30/60 FPS, mostrar FPS, vibração. Também funciona com teclado (WASD/setas, Espaço, J, L, Esc) e gamepad.

## Tecnologia (e por que não Unity)

O pedido sugeria Unity. Neste ambiente não é possível instalar o Unity Editor (exige licença/conta e downloads bloqueados pela política de rede), e o host oficial do Android SDK (`dl.google.com`) também está bloqueado. Para entregar um APK **realmente compilado e testado**, o jogo foi feito com:

- **Three.js (WebGL)** para o 3D — terreno, modelos, iluminação dinâmica, sombras, partículas, neblina;
- **WebAudio** para músicas e efeitos sintetizados em tempo real (todas as melodias são originais);
- um app **Android nativo em Java** que hospeda o jogo num WebView em tela cheia, paisagem e modo imersivo, servindo os arquivos do próprio APK (offline), com ponte para salvamento (SharedPreferences), vibração, botão Voltar e pausa ao ir para segundo plano.

Os modelos 3D (personagens, inimigos, chefes, itens) são construídos proceduralmente em código, com hierarquia de articulações ("rig") animada por código: corrida, aceleração, pulo, queda, ataque, dano, vitória e derrota.

## Estrutura

```
game/                código do jogo (JavaScript ES modules) + build (esbuild)
  src/main.js        app, loop principal, menus 3D
  src/game.js        sessão de fase: pontuação, vidas, checkpoints, vitória/derrota
  src/player.js      controle dos personagens        src/physics.js  colisão
  src/levels.js      as 5 fases                      src/builder.js  construtor de fases
  src/objects.js     anéis, blocos, molas, loops, trilhos, plataformas, armadilhas...
  src/enemies.js     inimigos (IA)                   src/bosses.js   chefes
  src/models.js      modelos 3D + animações          src/audio.js    música e efeitos
  src/ui.js          menus e HUD                     src/input.js    toque/teclado/gamepad
android/             projeto Android (Gradle/Android Studio); o bundle vai em app/src/main/assets/www
tools/               build_apk.py (pipeline sem Android Studio) e fetch_toolchain.sh
tests/               testes automáticos (autopiloto, fluxo de UI, desempenho, emulador)
dist/                APKs e ZIP do código-fonte
.github/workflows/   CI: build Gradle + teste de instalação em emulador Android
```

## Como compilar

**Opção A — script incluído (Linux/macOS, sem Android Studio):**
```bash
bash tools/fetch_toolchain.sh          # baixa aapt2, android.jar, dx e apksigner
cd game && npm ci && cd ..
python3 tools/build_apk.py             # gera dist/*-debug.apk e dist/*-release.apk
```
Para assinar o release com a sua chave: `DK_RELEASE_KEYSTORE=/caminho/chave.jks DK_RELEASE_STOREPASS=... DK_RELEASE_KEYALIAS=... python3 tools/build_apk.py` (sem isso, uma chave nova é criada em `keystore/`, que não é versionado).

**Opção B — Android Studio / Gradle:**
```bash
cd game && npm ci && npm run build     # gera android/app/src/main/assets/www
cd ../android && ./gradlew assembleDebug   # ou abra a pasta android/ no Android Studio
```
Para release assinado copie `android/keystore.properties.example` para `keystore.properties`.

**Rodar no navegador (desenvolvimento):** `cd game && npm run build` e sirva `android/app/src/main/assets/www` (ex.: `python3 -m http.server`).

## Testes

```bash
cd game && npm run build && (cd ../android/app/src/main/assets/www && python3 -m http.server 8123 &)
node tests/playthrough.mjs http://127.0.0.1:8123/index.html green,mushroom,jungle,lava,final zip,rocco
node tests/ui_flow.mjs http://127.0.0.1:8123/index.html /tmp
```
Detalhes e resultados: [docs/TESTES.md](docs/TESTES.md).

## Licença

Código e conteúdo do jogo: criados para este projeto. Three.js: licença MIT.
