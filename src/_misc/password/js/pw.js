function isValid() {
    var password = document.getElementById('password').value;
    if (password == "123")
        // top.location.href="./file.pdf";
        console.log("its ok!")
    else 
        console.log("its NOT ok!")
        window.location.reload();
}