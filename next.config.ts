import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tr/buteo-petrochemicals",
        destination: "/tr",
        permanent: true,
      },
      {
        source: "/en/buteo-petrochemicals",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/buteo-petrochemicals",
        destination: "/tr",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
