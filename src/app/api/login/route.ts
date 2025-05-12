import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

import bcrypt from "bcryptjs";
import { serialize } from "cookie";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const cookie = serialize("token", user.id, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  const response = NextResponse.json({ success: true });
  response.headers.set("Set-Cookie", cookie);
  return response;
}
