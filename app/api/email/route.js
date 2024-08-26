import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/Email.Model";
import { NextResponse } from "next/server";
const LoadDB = async () => {
  await connectDB();
};
LoadDB();
export async function POST(req) {
  const formData = await req.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "email add to database" });
}
export async function GET(req) {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
}
export async function DELETE(req) {
  const emailId = await req.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(emailId);
  return NextResponse.json({ msg: "email deleted", success: true });
}
