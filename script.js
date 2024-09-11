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
