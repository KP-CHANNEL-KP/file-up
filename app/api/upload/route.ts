export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

    const tgForm = new FormData();
    tgForm.append("chat_id", CHAT_ID);
    tgForm.append("document", file);

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`,
      {
        method: "POST",
        body: tgForm,
      }
    );

    const data = await res.json();

    return Response.json({
      success: true,
      telegram: data,
    });
  } catch (err) {
    return Response.json({
      success: false,
      error: "Upload failed",
    });
  }
}
