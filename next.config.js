/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["github.com", "res.cloudinary.com"],
  },
  reactStrictMode: true,
};
