
//async function demo(subject){
//   const URL='https://www.reddit.com/r/' + subject + '/top/.json?limit=3';
//   const Res= fetch(URL);
//   const response= await Res;
//   const json= await response.json();
//   console.log(json);
//   return json
//}

async function demo2(subject){
    fetch("https://jsonplaceholder.typicode.com/posts", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1
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
        const result = await demo2('javascript');
        console.log(result);
        changeStatus("resolved!!!");
    } catch(error) {
        console.log("error")
        changeStatus("Error!!!");
    }

}


asyncCall();
