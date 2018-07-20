# ServiceTwitterBot

I made this bot to represent how many days, hours, minutes and seconds I have until I am free from the army.

### Watch the TwitterBot live:
### [TwitterBot](https://twitter.com/ArbatovB)

## How it works

I used the Twit library to generate new twits, the bot generates a new twit hour and calculates the time difference
I have between the time the tweet is published to the day I end my service

## How to create your own Service Counter bot

1. Create your own [Twitter App](https://apps.twitter.com/)

2. Clone this repository

3. Inside config.js, add your own credentials


```javascript
    module.exports = {
        consumer_key:         '...',
        consumer_secret:      '...',
        access_token:         '...',
        access_token_secret:  '...',
    }
```
4. run ```npm start```

