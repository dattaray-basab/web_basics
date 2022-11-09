function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

asyncCall = async () => {
    try {
        console.log("calling");
        const result = await resolveAfter2Seconds();
        console.log(result);
        changeStatus("resolved!!!");
    } catch(error) {
        console.log("error")
        changeStatus("Error!!!");
    }

}

const changeStatus = (msg) => {
  document.getElementById("status").innerHTML = msg;
}
asyncCall();
