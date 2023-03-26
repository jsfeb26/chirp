import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// This should run on every request
// It allows us to use Server Side functionality by embedding the Auth state in request
export default withClerkMiddleware(() => {
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
