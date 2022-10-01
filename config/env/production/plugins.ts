const crypto = require('crypto');
export default ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
    "users-permissions":{
        config:{
            jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
        },
    },
  });