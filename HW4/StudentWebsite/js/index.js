$(document).ready(function() {
    var apiKey = "c5396e48f5524ccae2f5a277f5082aca" // Enter your API Key here
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    for(key in state_info){
        (function(key){
            var state = state_info[key];
            var latitude = state.lat;
            var longitude = state.lng;
  //  var state_obj = state_info['CO']
  //  var url =`https://api.darksky.net/forecast/c5396e48f5524ccae2f5a277f5082aca/37.8267,-122.4233`;
   var url =`https://api.darksky.net/forecast/c5396e48f5524ccae2f5a277f5082aca/${latitude},${longitude}`;

    $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                console.log(data)
                var temperature = null
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                var temperature = data.currently.temperature;

                console.log(temperature)

                //TODO
                // Default color gray
                  $('#'+key).css('fill', "#808080");
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10 should be blue
                if(temperature <= 10){
                    $('#' + key).css('fill', "#6495ED");
                }
                // Between 11 and 20
                else if(temperature >= 11 && temperature <= 20){
                    $('#' + key).css('fill', "#7FFFD4");
                }
                // Between 21 and 30
                else if(temperature >= 21 && temperature <= 30){
                    $('#' + key).css('fill', "#0000FF");
                }
                // Between 31 and 40
                else if(temperature >= 31 && temperature <= 40){
                    $('#' + key).css('fill', "#008B8B");
                }
                // Between 41 and 50
                else if(temperature >= 41 && temperature <= 50){
                    $('#' + key).css('fill', "#00BFFF");
                }
                // Between 51 and 60
                else if(temperature >= 51 && temperature <= 60){
                    $('#' + key).css('fill', "#F08080");
                }
                // Between 61 and 70
                else if(temperature >= 61 && temperature <= 70){
                    $('#' + key).css('fill', "#CD5C5C");
                }
                // Between 71 and 80
                else if(temperature >= 71 && temperature <= 80){
                    $('#' + key).css('fill', "#8B0000");
                }
                // Between 81 and 90
                else if(temperature >= 81 && temperature <= 90){
                    $('#' + key).css('fill', "#B22222");
                }
                // Greater than 90
                else if(temperature > 90){
                    $('#' + key).css('fill', "#FF0000");
                }

                //$('#CO').css('fill', "blue");   // Example on how to fill colors for your state.

          });
      })(key);
  }

});
