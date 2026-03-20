export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const tgForm = new FormData();
  tgForm.append("chat_id", "YOUR_CHAT_ID"); // replace
  tgForm.append("document", file);

  const res = await fetch(
    "https://api.telegram.org/botYOUR_BOT_TOKEN/sendDocument",
    {
      method: "POST",
      body: tgForm,
    }
  );

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
