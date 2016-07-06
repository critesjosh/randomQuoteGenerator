var author = '';
var quote = '';
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6',
 '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

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
