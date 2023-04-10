// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets",
            publicPath: "/_next/static/assets",
          },
        },
      ],
    });

    // Other webpack configuration options
    return config;
  },
};
