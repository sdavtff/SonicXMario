# Instalação e solução de problemas

## Instalar no celular

1. No celular Android, abra o link de download do **APK de lançamento** (`DashKingdom3D-v1.0.0-release.apk`) — veja a tabela no [README](../README.md).
2. Quando o navegador avisar que o arquivo pode ser perigoso, toque em **Baixar mesmo assim** (é o aviso padrão para qualquer APK fora da Play Store).
3. Abra o arquivo baixado (notificação de download ou app *Arquivos* → *Downloads*).
4. Se aparecer *"Por segurança, seu telefone não tem permissão para instalar apps desta fonte"*, toque em **Configurações** e ative **Permitir desta fonte** para o navegador/gerenciador de arquivos; volte e toque em **Instalar**.
5. Se o Play Protect perguntar, toque em **Instalar mesmo assim** (o app não está na Play Store, por isso não é reconhecido).
6. Abra **Dash Kingdom 3D**. O jogo roda deitado (paisagem) e não precisa de internet.

**Via computador (ADB):** `adb install DashKingdom3D-v1.0.0-release.apk`

## Primeiros passos
- Toque em **JOGAR** para começar a próxima fase ainda não concluída.
- Em **Selecionar Personagem** escolha Zip ou Rocco; em **Selecionar Fase** jogue fases já desbloqueadas.
- O progresso (fases, recordes, medalhas, configurações) é salvo automaticamente no aparelho.

## Solução de problemas

| Problema | Solução |
|---|---|
| "App não instalado" | Desinstale uma versão anterior assinada com outra chave (por exemplo, o APK de depuração) e instale de novo. Verifique se há espaço livre (~5 MB). |
| "Erro de análise / pacote inválido" | O download ficou incompleto — baixe novamente. Requer Android 7.0 ou superior. |
| Tela azul parada ou mensagem "WebGL indisponível" | Atualize **Android System WebView** e **Google Chrome** pela Play Store e reinicie o aparelho. |
| Jogo lento / aquecendo | Configurações → Qualidade **Baixa** e Limite de FPS **30**. Feche outros apps. A qualidade *Automática* já reduz a resolução sozinha se o FPS cair. |
| Sem som | Toque na tela uma vez (alguns aparelhos só liberam áudio após o primeiro toque); confira os volumes em Configurações e o volume de mídia do aparelho. |
| Botões grandes/pequenos demais | Configurações → *Tamanho dos botões*. Joystick *Fixo* ou *Dinâmico*. |
| Câmera girando sozinha | Configurações → desative *Câmera automática*. Arraste o lado direito da tela para girar. |
| Quero recomeçar do zero | Configurações → *Apagar progresso* (ou limpe os dados do app nas configurações do Android). |
| Botão Voltar do Android | Em jogo: pausa/continua. No menu principal: pergunta se deseja sair. |

## Depuração
O **APK de depuração** permite inspecionar o jogo: conecte o celular com depuração USB, abra `chrome://inspect` no Chrome do computador e selecione o WebView do Dash Kingdom 3D (console, desempenho, erros). Logs também aparecem em `adb logcat -s DashKingdom`.

## Assinatura / publicação
O APK de lançamento está assinado (esquemas v2 e v3) com uma chave gerada durante o desenvolvimento. Essa chave **não** foi publicada no repositório (que é público). Para publicar na Play Store ou distribuir atualizações, gere a sua própria chave:
```bash
keytool -genkeypair -v -keystore keystore/release.jks -alias dashkingdom -keyalg RSA -keysize 2048 -validity 10000
DK_RELEASE_KEYSTORE=keystore/release.jks DK_RELEASE_STOREPASS=<senha> DK_RELEASE_KEYALIAS=dashkingdom python3 tools/build_apk.py --only release
```
Um APK assinado com outra chave não atualiza uma instalação existente — desinstale antes.
