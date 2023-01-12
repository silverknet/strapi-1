module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ["app_key_111", "app_key_222"]),
  },
});
