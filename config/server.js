module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5432),
  app: {
    keys: env.array("APP_KEYS", ["app_key_111", "app_key_222"]),
  },
});
