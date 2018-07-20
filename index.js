const twit = require('twit');
const config = require('./config');
var Twit = require('twit')

console.log('twitter bot starting...');

var T = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

//
//  tweet 'hello world!'
//

function getDiffHours(dt1, dt2) {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
  }




function calcDays() {
    const endDay = new Date(2019, 07, 13, 0, 0, 0, 0);
    const now = new Date();
    
    // get total seconds between the times
    var delta = Math.abs(endDay - now) / 1000;
    
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    
    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    
    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    
    // what's left is seconds
    var seconds = Math.floor(delta % 60);  // in theory the modulus is not required
    return (`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`)

}

function twitBody() {
    return `I have ${calcDays()} until I finish my service. \n This is a bot.`
}

function postTwit() {
    T.post('statuses/update', { status: twitBody() }, function(err, data, response) {
        console.log(data)
      })
}


postTwit();



//every 2 minutes
setInterval(postTwit, 981 * 60 * 60 * 2)
