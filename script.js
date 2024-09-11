/* サーバーに接続する非同期関数 */
async function getResource() {
  // クライアントサイドからサーバーサイドへはfetchで接続する
  // const res = await fetch("http://localhost:8000/");
  const res = await fetch("https://kousei5819-apitest-30.deno.dev/");
  const obj = await res.json();
  console.log(obj); // ここはブラウザーの開発者ツールのコンソール
  document.querySelector("h1").textContent = obj.env;
}

// button要素のclickイベントに登録
document.querySelector("button").addEventListener("click", getResource);

const { createClient } = microcms;

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "p5aur2gmg1", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: obj,
  // retry: true // Retry attempts up to a maximum of two times.
});

client
  .get({
    endpoint: "member",
  })
  .then((res) => {
    // console.log(res)
    const memberItem = document.querySelector("#memberItem");
    res.contents.forEach((content) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      div.innerHTML = content.body;
      const p = document.createElement("h3");
      p.textContent = content.title;
      li.appendChild(p);
      li.appendChild(div);
      memberItem.appendChild(li);
    });
  });
