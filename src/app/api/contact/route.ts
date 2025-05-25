import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formText = await request.text();
    const params = new URLSearchParams(formText);
    const name = params.get("entry.1473372340") || "";
    const email = params.get("entry.330209799") || "";
    const category = params.get("entry.1337542843") || "";
    const selectedWork = params.get("entry.695875724") || "";
    const subject = params.get("entry.643649289") || "";
    const message = params.get("entry.530101119") || "";

    // メール送信用のトランスポーターを作成
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'medister.qp@gmail.com',
        // 注意: ここにはGmailのアプリパスワードを設定する必要があります
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // メールの内容を設定
    const mailOptions = {
      from: 'medister.qp@gmail.com',
      to: 'medister.qp@gmail.com',
      subject: `[お問い合わせ] ${subject}`,
      text: `
名前: ${name}
メールアドレス: ${email}
種別: ${category}
${category === 'feedback' ? `対象作品: ${selectedWork}\n` : ''}
メッセージ:
${message}
      `,
    };

    // メールを送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'メールを送信しました' }, { status: 200 });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}