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
  };

  module.exports = {
    webpack5: true,
    webpack: config => {
      config.resolve.fallback = {
        fs: false,
      };
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  