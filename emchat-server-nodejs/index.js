var request = require("request");
var util = require("util");

exports=module.exports = function(org_name,app_name,client_id,client_secret){
  this.org_name = org_name;
  this.app_name = app_name
  this.client_id = client_id;
  this.client_secret = client_secret;
 
  this.getURL = function(_url){
    return util.format('https://a1.easemob.com/%s/%s%s', this.org_name, this.app_name, _url);
  }
  
  this.getAuthToken = function(callback){
    var url = this.getURL("/token");
    var options = {
      method: 'POST',
      url: url,
      json:true,
      body:{   
            "grant_type" : "client_credentials",
            "client_id" : this.client_id,
            "client_secret" : this.client_secret
          }
      };
    request(options, function (error, response, body) {
      callback(response,body);
    });
  } 
}
