import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ message: "Missing credentials" }, { status: 400 });
    }

    // Simple demo validation: accept any email/password with length
    if (typeof password !== "string" || password.length < 4) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const user = {
      id: `u-${Date.now()}`,
      name: email.split("@")[0] || "Customer",
      email,
    };

    const token = `demo-token-${Date.now()}`;

    return NextResponse.json({ user, token });
  } catch (err) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
