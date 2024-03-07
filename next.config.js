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
  
  module.exports = nextConfig;
  