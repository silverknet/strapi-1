module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET', '4yxyPjqTpeaYqgAfQ3lHNobWg0D6fn0QsATeImylL4E'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });


  /*4yxyPjqTpeaYqgAfQ3lHNobWg0D6fn0QsATeImylL4E*/
  /*asdsdgr34reg43 */