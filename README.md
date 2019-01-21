Symfony Demo With RangeSlider
=============================

The "Symfony Demo Application" is a reference application created to show how
to develop applications following the [Symfony Best Practices][1].  This fork demonstrates using jqueryUI
and jqrangeslider.  At the moment, it is not working.

The only difference between the symfony demo and this repo is adding the slider, via the following changes

```bash
# add the libraries to package.json
yarn add jquery-ui jqrangeslider

```

```html
# added to /blog/search.html
        <div id="slider">Slider Placeholder</div>
```

```javascript
# added to assets/js/search.js
import 'jquery-ui';
import 'jqrangeslider';


$('#slider').dateRangeSlider();
```

Installation
------------

    git clone git@github.com:tacman/range-slider-demo.git
    cd range-slider-demo
    yarn install
    yarn run encore dev
    

Usage
-----

There's no need to configure anything to run the application. If you have
installed the [Symfony client][4] binary, run this command to run the built-in
web server and access the application in your browser at <http://localhost:8000>:

```bash
$ cd range-slider-demo
$ symfony serve
```

Problem
-------

Navigate to the administration site http://127.0.0.1:8000/en/blog/search

Open the browser debugger

```
TypeError: $(...).dateRangeSlider is not a function[Learn More] admin.22dc4073.js line 11 > eval:21:16
```

