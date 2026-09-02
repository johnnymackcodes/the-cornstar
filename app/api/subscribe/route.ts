import { NextResponse } from "next/server";

/**
 * Newsletter subscribe endpoint — Kit-ready, but SAFE BY DEFAULT.
 *
 * It only sends a real subscription when KIT_FORM_UID is set to a *dedicated*
 * Kit form (e.g. an "Inner Cob" form), so joke-site signups never leak into a
 * real professional list. Until then it returns { ok, simulated: true } and the
 * site shows its normal success flow.
 *
 * To go live: create a dedicated form in Kit, then set the Render env var
 * KIT_FORM_UID to that form's uid. That's it.
 */
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  let email = "";
  try {
    const data = await req.json();
    email = typeof data?.email === "string" ? data.email.trim() : "";
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  if (!EMAIL.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const uid = process.env.KIT_FORM_UID;
  if (!uid) {
    // Not connected to a real list — succeed without touching Kit.
    return NextResponse.json({ ok: true, simulated: true });
  }

  try {
    const res = await fetch(`https://app.kit.com/forms/${uid}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email_address: email }),
    });
    return NextResponse.json({ ok: res.ok });
  } catch {
    // Never fail the visitor over an upstream hiccup.
    return NextResponse.json({ ok: true, simulated: true });
  }
}
