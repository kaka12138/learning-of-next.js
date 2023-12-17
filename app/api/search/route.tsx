import { NextResponse, type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  return NextResponse.json({ data: { query } })
}
