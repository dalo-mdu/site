import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const webhookURL = process.env.CONTACT_WEBHOOK_URL || '';
  
  const body = await request.json();
  console.log(body);
  const response = await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: body.name,
      content: `**${body.email}** \n${body.message}`})
  });

}