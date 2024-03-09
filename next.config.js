const nextConfig = {
    redirects: async () => {
      return [
        {
          source: "/",
          destination: "/newsfeed/style2",
          permanent: true,
        },
      ];
    },
    webpack: config => {
      config.resolve.fallback = {
        fs: false,
        tls: false,
      };
      return config;
    },
  };

  module.exports = nextConfig;
  