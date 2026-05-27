import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    if (!email || !password || !name) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const user = {
      id: `u-${Date.now()}`,
      name,
      email,
    };

    const token = `demo-token-${Date.now()}`;

    return NextResponse.json({ user, token });
  } catch (err) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
