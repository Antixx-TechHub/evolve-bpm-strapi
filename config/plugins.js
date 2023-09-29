module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  // ...
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    }
  },
  // ...
  upload: {
    // Update your cloudinary credentials here
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "evole-bpm",
        api_key: "178267419838156",
        api_secret: "ys5ssXsFcyhGxEQHU6FnDd-y0wY",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});