async function upload() {
  const token = document.getElementById("token").value;
  const owner = document.getElementById("owner").value;
  const repo = document.getElementById("repo").value;
  const basePath = document.getElementById("path").value || "";

  const fileInput = document.getElementById("fileInput");
  const folderInput = document.getElementById("folderInput");
  const status = document.getElementById("status");

  let files = [];

  if (folderInput.files.length > 0) {
    files = [...folderInput.files];
  } else if (fileInput.files.length > 0) {
    files = [...fileInput.files];
  } else {
    status.innerText = "❌ Pilih file atau folder dulu";
    return;
  }

  status.innerText = "⏳ Uploading...";

  for (let file of files) {
    const content = await file.arrayBuffer();
    const encoded = btoa(
      new Uint8Array(content)
        .reduce((data, byte) => data + String.fromCharCode(byte), "")
    );

    const filePath = basePath
      ? `${basePath}/${file.webkitRelativePath || file.name}`
      : (file.webkitRelativePath || file.name);

    await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
      method: "PUT",
      headers: {
        "Authorization": `token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: `upload ${file.name}`,
        content: encoded
      })
    });
  }

  status.innerText = "✅ Upload selesai!";
}
