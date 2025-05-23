import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, category, message, selectedWork } = body;

    // メール送信用のトランスポーターを作成
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
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    );
  }
} 