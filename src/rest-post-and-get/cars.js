

async function getCars(subject){
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

async function postCar(){
    fetch("http://localhost:3005/cars", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            "id": 13,
            "year": 1979,
            "make": "cheyy",
            "model": "pinto",
            "owner_id": 1
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(
            json => {
                console.log(json);
                changeStatus('added new car !!!');
            })
        .catch(
            err => console.log(err)
        )

}

const changeStatus = (msg) => {
  // document.getElementById("status").innerHTML = msg;
}


// postCar();
