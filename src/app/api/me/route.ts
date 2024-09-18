import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Phuwanat Taratipprai",
    studentId: "660610786",
  });
};