var author;
var quote;
var tweet;

//<a href="https://twitter.com/share" class="twitter-share-button" data-text="Custom text" data-size="large">Tweet</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

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

    $("#facebook").on("click", function(){

    });

});
