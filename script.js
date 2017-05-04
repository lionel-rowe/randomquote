/*
http://quotationsbook.com/full_syndication_mixed.xml
*/

$(document).ready(function() {
  
  $.ajax({
    type: 'GET',
    url: 'http://quotationsbook.com/full_syndication_gbase.xml',
    dataType: 'xml',
    success: function(xml) {
      $('#output').html('success');
    },
    error: function() {
      $('#output').html('error');
    }
  });
  
  $('#randomQuote').html(Math.floor(Math.random() * 10 + 1));
  $('#author').html(Math.floor(Math.random() * 10 + 1));
  
});