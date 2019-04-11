function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin123" ){
        alert("login successfully");
        
       // window.open = ('index.html') //redirecting to index page.
        return false;

    } else{
        alert("username does not exist or password/username error.");
    }
}