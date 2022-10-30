/*
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
*/

  /*4yxyPjqTpeaYqgAfQ3lHNobWg0D6fn0QsATeImylL4E*/
  /*asdsdgr34reg43 */

  module.exports = ({ env }) => ({
    'drag-drop-content-types': {
      enabled: true
    },
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET', '4yxyPjqTpeaYqgAfQ3lHNobWg0D6fn0QsATeImylL4E'),
      },
    },
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: 'aws-region',
        params: {
          Bucket: 'my-bucket',
        },
      },
    },
  });