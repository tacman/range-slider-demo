import './jquery.instantSearch.js';

import 'jquery-ui';
import 'jqrangeslider';

$(function() {
    $('#slider').html('Date Range Slider goes here.');
    $('#slider').dateRangeSlider();

    $('.search-field').instantSearch({
        delay: 100,
    });
});
