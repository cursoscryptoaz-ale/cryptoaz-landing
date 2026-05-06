import { NextRequest, NextResponse } from "next/server";

// TODO: conectar a proveedor de email (Resend, Mailchimp, etc.)
// Por ahora guarda en tabla newsletter_subscribers via fetch a API externa
// o simplemente loguea — pendiente definir destino final con chat central

export async function POST(req: NextRequest) {
  const body = await req.json() as { email?: string };
  const email = body.email?.trim().toLowerCase();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Email invalido" }, { status: 400 });
  }

  // TODO: persistir email
  console.log("[Newsletter] Nuevo suscriptor:", email);

  return NextResponse.json({ success: true });
}