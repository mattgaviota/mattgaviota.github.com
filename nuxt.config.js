module.exports = {
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 10KO
          name: 'img/[name].[hash].[ext]'
        }
      }
    ]
  },
  head: {
    title: 'Página Personal de Matias Novoa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
        integrity: 'sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/bootstrap.material-design/0.5.9/css/bootstrap-material-design.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.1.1.slim.min.js',
        integrity: 'sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js',
        integrity: 'sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js',
        integrity: 'sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://cdn.jsdelivr.net/bootstrap.material-design/0.5.9/js/material.min.js'
      },
      {
        src: 'https://use.fontawesome.com/9cd652b197.js'
      }
    ]
  },
  css: [
    '~assets/css/style.css'
  ]
};
