
function first_lang(request){
 return request.headers["accept-language"].split(',')[0];
}

function user_system(request){
  var userAgent = request.headers['user-agent']
  var rgx = /\(([^)]+)\)/;
  var match = userAgent.match(rgx);
  var systemMatch = match && match[1];
  var systemVal = systemMatch.replace(';','');
  return systemVal;
}

module.exports = {
  first_lang: first_lang,
  user_system: user_system
}
