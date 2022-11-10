
//async function demo(subject){
//   const URL='https://www.reddit.com/r/' + subject + '/top/.json?limit=3';
//   const Res= fetch(URL);
//   const response= await Res;
//   const json= await response.json();
//   console.log(json);
//   return json
//}

async function get_cars(subject){
    fetch("http://localhost:3005/cars", {

        // Adding method type
        method: "GET",

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    // Converting to JSON
    .then(response => response.json())

    // Displaying results to console
    .then(json => console.log(json));

    return json
}

async function post_car(subject){
    fetch("http://localhost:3005/cars", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            "id": 2,
            "year": 1999,
            "make": "honda",
            "model": "civic",
            "owner_id": 1
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(json => console.log(json));

    return json
}
const changeStatus = (msg) => {
  document.getElementById("status").innerHTML = msg;
}

asyncCall = async () => {
    try {
        console.log("calling");
        const result = await post_car('javascript');
        console.log(result);
        changeStatus("resolved!!!");
    } catch(error) {
        console.log("error")
        changeStatus("Error!!!");
    }

}


asyncCall();
