let timesURL = 'https://api.sunrise-sunset.org/json?';

function bringOnTheSun() {
    let myLatitude = document.getElementById("latitude").value;
    let myLongitude = document.getElementById("longitude").value;
    let myURL = timesURL + "lat=" + myLatitude + "&lng=" + myLongitude + "&date=today";
    $.ajax(myURL,
        {
            success: function bringOnTheSun(APIResponse) {
                let sunUpDown = document.createElement(div);
                sunUpDown.innerHTML = APIResponse.results.sunrise;
                document.body.appendChild(sunUpDown);
            }
        }
    )
}