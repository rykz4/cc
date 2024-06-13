// Check if the Geolocation API is supported by the browser
if ("geolocation" in navigator) {
  // Get the user's current position
  navigator.geolocation.getCurrentPosition(function(position) {
    // Access the latitude and longitude from the position object
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    const URL =  "https://916487b8-c983-4dfe-8ab6-589d055aeae4-00-17eq0vux49cud.pike.replit.dev/route?lat="+ latitude+"&long="+longitude;
    console.log(URL)
    fetch(URL).then(m=> {
        
        console.log(m)
    }).catch(err => {
        console.log(err)
    })

    // Do something with the latitude and longitude
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
  }, function(error) {
    // Handle any errors that occur while getting the position
    if (error.PERMISSION_DENIED) {
        //doing certain things :
        console.log("permission is not given")
    } {
         console.error("Error getting geolocation:", error);
    }
  });
} else {
  // Geolocation is not supported by the browser
  console.error("Geolocation is not supported by this browser.");
}