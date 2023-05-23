export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/profile",
    "/settings",
    "/ongs",
    "/campaigns",
    "/campaigns/:path*",
    "/ong-details",
    "/create-ong",
    "/create-campaign",
  ],
};
