let timesURL = 'https://api.sunrise-sunset.org/json?';

function getSunriseSunset() {
    let baseURL = "https://api.sunrise-sunset.org/json?";
    let latitude = document.getElementById("latitude").value;
    let longitude = document.getElementById("longitude").value;
    let url = baseURL + "lat=" + latitude + "&lng=" + longitude + "&date=today";
    $.ajax(url,
        {
            success: function getSunriseSunset(APIResponse) {
                let sunUpDown = document.createElement('div');
                sunUpDown.innerHTML = APIResponse.results.sunrise;
                document.body.appendChild(sunUpDown);
            }
        }
    )
}