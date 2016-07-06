var author = '';
var quote = '';

var getQuote = function() {
  $.ajax( "http://quotes.stormconsultancy.co.uk/random.json", {
    dataType: 'jsonp'
    }).done(function(data){
    console.log(data);
    author = data.author;
    quote = data.quote;

    $("#quote").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $("#quote").html('<i class="fa fa-quote-left" aria-hidden="true"></i> ' + quote);
    });

    $("#author").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $("#author").text('+ ' + author);
      });

    $("#twitter").attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + author));
  });
};

getQuote();

$(document).ready(function() {

    $("#new-quote").on("click", function(){
        getQuote();
      });
    });
