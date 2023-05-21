export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/campaigns",
    "/create-campaign",
    "/profile",
    "/settigns",
    "/create-ong",
    "/ong-details",
    "/ongs",
    "/campaigns/:path*",
  ],
};
