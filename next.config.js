const withPlugins = require("next-compose-plugins");
const withLinaria = require('next-linaria');
const withTranspile = require('next-transpile-modules')(['ol', 'rlayers']);






module.exports = withPlugins(
    [[withLinaria,{}], [withTranspile,{experimental: { esmExternals: 'loose' }}],{
      images: {
        loader: 'akamai',
        path: '',
      },
    }]
  );
// module.exports = withLinaria({})