# Paradise Castle

## Getting Started

To run the example Omron D6T thermal imaging example, follow the steps outlined below:

1. Clone, setup and run the app:

```
$ git clone https://github.com/jmromeo/paradise-castle
$ cd paradise-castle
$ npm install
$ cd bathroom
$ node app.js
```

2. Once the app is running, there are 2 options for connecting to the app (replace chromium-browser with your favorite browswer):

```
# if running "node app.js" command from same device as connecting to browser
$ chromium-browser http://127.0.0.1:3000 &

# if running "node app.js" command from device and connecting using a browswer from a different device
$ chromium-browser http://<ip_of_device>:3000
```

Here is a screenshot when I'm far away from the sensor.
![ScreenShot](documentation/images/noperson.png)

Here is a screenshot when I'm standing near the sensor.
![ScreenShot](documentation/images/person.png)
