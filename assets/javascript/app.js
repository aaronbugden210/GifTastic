var topics = ["saitama", "genos", "yusukeurameshi", "botan", "hiei"];



function createButtons()
{
	for(var i = 0; i < topics.length; i++)
	{
		$("#button-div").append("<input type = 'button' attr = 'data-character'/>");
		$(".button").html("character");
	}
}

$(".button").on("click", function()
{
	var character = $(this).attr("data-character");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        character + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax
      ({
        url: queryURL,
        method: "GET"
      }).then(function(response) 
      {

        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) 
        {

            var characterDiv = $("<div class>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var characterImage = $("<img>").attr("src", results[i].images.fixed_height.url);

            characterDiv.append(p);
            characterDiv.append(characterImage);

            $("#character-images").prepend(characterDiv);
        }

});

createButtons();