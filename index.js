const app = require('express')();
app.get('/yahoo.json', (req, res) => {
  // res.set({   'Content-Type': 'application/json', })
  res.header('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(JSON.stringify({
    "query": {
      "count": 1,
      "created": "2016-12-07T12:00:16Z",
      "lang": "en-US",
      "results": {
        "channel": {
          "units": {
            "distance": "mi",
            "pressure": "in",
            "speed": "mph",
            "temperature": "F"
          },
          "title": "Yahoo! Weather - Chicago, IL, US",
          "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.y" +
              "ahoo.com/country/state/city-2379574/",
          "description": "Yahoo! Weather for Chicago, IL, US",
          "language": "en-us",
          "lastBuildDate": "Wed, 07 Dec 2016 06:00 AM CST",
          "ttl": "60",
          "location": {
            "city": "Chicago",
            "country": "United States",
            "region": " IL"
          },
          "wind": {
            "chill": "14",
            "direction": "260",
            "speed": "25"
          },
          "atmosphere": {
            "humidity": "78",
            "pressure": "996.0",
            "rising": "0",
            "visibility": "16.1"
          },
          "astronomy": {
            "sunrise": "7:5 am",
            "sunset": "4:19 pm"
          },
          "image": {
            "title": "Yahoo! Weather",
            "width": "142",
            "height": "18",
            "link": "http://weather.yahoo.com",
            "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
          },
          "item": {
            "title": "Conditions for Chicago, IL, US at 05:00 AM CST",
            "lat": "41.884151",
            "long": "-87.632408",
            "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.y" +
                "ahoo.com/country/state/city-2379574/",
            "pubDate": "Wed, 07 Dec 2016 05:00 AM CST",
            "condition": {
              "code": "23",
              "date": "Wed, 07 Dec 2016 05:00 AM CST",
              "temp": "26",
              "text": "Breezy"
            },
            "forecast": [
              {
                "code": "23",
                "date": "07 Dec 2016",
                "day": "Wed",
                "high": "30",
                "low": "25",
                "text": "Breezy"
              }, {
                "code": "23",
                "date": "08 Dec 2016",
                "day": "Thu",
                "high": "26",
                "low": "20",
                "text": "Breezy"
              }, {
                "code": "30",
                "date": "09 Dec 2016",
                "day": "Fri",
                "high": "26",
                "low": "20",
                "text": "Partly Cloudy"
              }, {
                "code": "28",
                "date": "10 Dec 2016",
                "day": "Sat",
                "high": "30",
                "low": "17",
                "text": "Mostly Cloudy"
              }, {
                "code": "26",
                "date": "11 Dec 2016",
                "day": "Sun",
                "high": "35",
                "low": "26",
                "text": "Cloudy"
              }, {
                "code": "30",
                "date": "12 Dec 2016",
                "day": "Mon",
                "high": "27",
                "low": "18",
                "text": "Partly Cloudy"
              }, {
                "code": "23",
                "date": "13 Dec 2016",
                "day": "Tue",
                "high": "26",
                "low": "15",
                "text": "Breezy"
              }, {
                "code": "30",
                "date": "14 Dec 2016",
                "day": "Wed",
                "high": "14",
                "low": "10",
                "text": "Partly Cloudy"
              }, {
                "code": "30",
                "date": "15 Dec 2016",
                "day": "Thu",
                "high": "18",
                "low": "11",
                "text": "Partly Cloudy"
              }, {
                "code": "23",
                "date": "16 Dec 2016",
                "day": "Fri",
                "high": "21",
                "low": "15",
                "text": "Breezy"
              }
            ],
            "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/23.gif\"/>\n<BR />\n<b>Curren" +
                "t Conditions:</b>\n<BR />Breezy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Wed - " +
                "Breezy. High: 30Low: 25\n<BR /> Thu - Breezy. High: 26Low: 20\n<BR /> Fri - Part" +
                "ly Cloudy. High: 26Low: 20\n<BR /> Sat - Mostly Cloudy. High: 30Low: 17\n<BR /> " +
                "Sun - Cloudy. High: 35Low: 26\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/" +
                "dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/" +
                "city-2379574/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided b" +
                "y <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
            "guid": {
              "isPermaLink": "false"
            }
          }
        }
      }
    }
  }))
});
app.listen();