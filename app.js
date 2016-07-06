var author;
var quote;

$.getJSON( "https://jsonp.afeld.me/?callback=&url=http://quotes.stormconsultancy.co.uk/random.json", {
  }).done(function(data){
  console.log(data);
  author = data.author;
  quote = data.quote;

  $("#quote").replaceWith('<p class="quote"><i class="fa fa-quote-left" aria-hidden="true"></i> ' + quote + '</p>');
  $("#author").replaceWith('<p class="author"> + ' + author + '</p>');
  $("#twitter").attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + author));

});

$(document).ready(function() {

    $("#new-quote").on("click", function(){

      $.getJSON( "https://jsonp.afeld.me/?callback=&url=http://quotes.stormconsultancy.co.uk/random.json", {
        format: 'jsonp'
      }).done(function(data){
        console.log(data);
        author = data.author;
        quote = data.quote;


        $(".quote").replaceWith('<p class="quote"><i class="fa fa-quote-left" aria-hidden="true"></i> ' + quote + '</p>');
        $(".author").replaceWith('<p class="author"> + ' + author + '</p>');
        $("#twitter").attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + author));

      });
    });

});
