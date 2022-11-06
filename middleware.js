import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req) {
	let verify = req.cookies.get("loggedIn");
	let url = req.url;

	if (!verify && url.includes("/peak")) {
		return NextResponse.redirect("http://localhost:3000");
	}

	if (verify && url === "/") {
		return NextResponse.redirect("http://localhost:3000/peak");
	}
}
