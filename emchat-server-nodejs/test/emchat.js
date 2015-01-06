var emchat = require("../index.js");
var expect = require("chai").expect;

describe('emchat', function(){
  var org_name = "easemob-playground";
  var app_name = "test1";
  var client_id = "YXA6wDs-MARqEeSO0VcBzaqg5A";
  var client_secret = "YXA6JOMWlLap_YbI_ucz77j-4-mI0JA";
  
  describe('#getURL()', function(){
    it("should get right url",function(){
      var client = new emchat(org_name,app_name,client_id,client_secret);
      var url = client.getURL("/token");
      expect(url).to.equal("https://a1.easemob.com/easemob-playground/test1/token");
    });
  })
  
  describe('#getAuthToken()', function(){
    var wrong_client_id = "wrong_client_id";

    it('should get valid token use right app info', function(done){
      var client = new emchat(org_name,app_name,client_id,client_secret);
      client.getAuthToken(function(response,result){
        expect(result.access_token).to.be.a('string')
        done();
      });
    })
    it('should get err use wrong app info', function(){
      var client = new emchat(org_name,app_name,wrong_client_id,client_secret);
      client.getAuthToken(function(result){
        expect(result.token).not_to.be.a('string')
      });
    })
  })
})