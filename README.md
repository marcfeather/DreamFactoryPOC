### Setup

1. install [nodejs](https://nodejs.org/en/)
2. install bower `npm install -g bower`
3. install http-server `npm install -g http-server`
2. clone repository or download zip
3. CD into cloned directory
5. install required bower components `bower install`

### Customizing

All calls to the DreamFactory API are found in `view1.js`. Change the `url` and `data` of the `$http` requests to suite your API's needs. When logging into this app be sure to use a DreamFactory admin account's credentials.

### Serving

Run server by `npm start` inside working directory. Make sure that Dream Factory is also running.

### Viewing

Navigate to `http://localhost:8000` in a web browser.
