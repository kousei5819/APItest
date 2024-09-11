import "https://deno.land/std/dotenv/load.ts";

/* サーバーにアクセス（fetch）があったら呼び出される関数 */
Deno.serve(async (req) => {
  //   const apiKey = Deno.env.get("API_KEY"); // 環境変数の読み込み
  //   console.log(apiKey); // ここはVSCodeのターミナル

  // メッセージボディを構成
  const body = JSON.stringify({ env: apiKey });

  // アクセスしてきたクライアントにJSONを返す
  return new Response(body, {
    headers: {
      "Access-Control-Allow-Origin": "https://kousei5819.github.io", // アクセス制限（全許可）
      "content-type": "application/json; charset=utf-8",
    },
  });
});

const { createClient } = microcms;

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "p5aur2gmg1", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: Deno.env.get("API_KEY"),
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
