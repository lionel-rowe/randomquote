/*
http://quotationsbook.com/full_syndication_mixed.xml
*/


$(document).ready(function() {

  function getNewQuote() {
    $.ajax({
      cache: false,
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      dataType: 'JSON',
      beforeSend: function() {
        $('#randomQuote').html('<span style="color: lightgray; font-style: italic"> Loading... </span>');
        $('#author').html('');
      },
      success: function(data) {
        var quoteArr = data[0].content.split('');
        quoteArr = quoteArr.slice(3, quoteArr.length - 5);
        var quote = quoteArr.join('');
        var author = data[0].title;

        $('#randomQuote').html(quote);
        $('#author').html(author);
        
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=freeQuoteCamp&related=freecodecamp&text=' + $('#randomQuote').text().replace(';','%3B') + ' — ' + author)
        
      },
      error: function() {
        $('#randomQuote').html('Error retriving quote. Please refresh page and try again.');
      }
      
    });
  }
  
  getNewQuote();
  
  $('#change').click(function(e) {
    e.preventDefault();
    getNewQuote();
  });
  
});