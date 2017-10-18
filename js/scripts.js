$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var holidayInput = $("input#holiday").val();
    var buildingInput = $("input#building").val();
    var verb1Input = $("input#verb1").val();
    var creatureInput = $("input#creature").val();
    var clothingInput = $("input#clothing").val();
    var figureInput = $("input#figure").val();
    var pluralNoun1Input = $("input#plural-noun1").val();
    var pastTenseVerbInput = $("input#past-tense-verb").val();
    var foodInput = $("input#food").val();
    var pluralNoun2Input = $("input#plural-noun2").val();

    $(".holiday").text(holidayInput);
    $(".building").text(buildingInput);
    $(".verb1").text(verb1Input);
    $(".creature").text(creatureInput);
    $(".clothing").text(clothingInput);
    $(".figure").text(figureInput);
    $(".plural-noun1").text(pluralNoun1Input);
    $(".past-tense-verb").text(pastTenseVerbInput);
    $(".food").text(foodInput);
    $(".plural-noun2").text(pluralNoun2Input);

    $("#story").show();
    event.preventDefault();
  });
})
