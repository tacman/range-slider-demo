import './jquery.instantSearch.js';

import 'jquery-ui';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/mouse';
import 'jqrangeslider/jQAllRangeSliders-min';

$(function() {
    $('#slider').html('Date Range Slider goes here.');
    $('#slider').dateRangeSlider();

    $('.search-field').instantSearch({
        delay: 100,
    });
});
