export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/profile",
    "/settings",
    "/ongs",
    "/ongs/:path*",
    "/campaigns",
    "/campaigns/:path*",
    "/create-ong",
    "/create-campaign",
    "/campaigns-by-ong",
  ],
};
