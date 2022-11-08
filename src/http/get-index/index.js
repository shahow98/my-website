const arc = require('@architect/functions')


// Customize your site by changing the data below
exports.handler = async function Index () {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: arc.static('background.jpg')
  }
}
