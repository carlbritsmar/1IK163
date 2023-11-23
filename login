<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login or register!</title>
    <script src="index.js"></script>
    <link href="style.css" rel="stylesheet" type="text/css"
    <script src="https://kit.fontawesome.com/6ff35d474c.js" crossorigin="anonymous"></script>
</head>
<body>
<div class="containerlogin">
    <div class="form-box">
        <h1 id="title">Sign up</h1>
        <form>
            <div class="input-group">
                <div class="input-field" id="namefield">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder="Name">
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-user"></i>
                    <input type="email" placeholder="me@example.com">
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-user"></i>
                    <input type="password" placeholder="Password">
                </div>
                <div class="btn-field">
                    <button type="button" id="registerbtn">Register</button>
                    <button type="button" id="signinbtn" class="disable">Sign in</button>

                </div>
            </div>
        </form>


    </div>
    </div>
    <script>
        let registerbtn = document.getElementById("registerbtn");
        let signinbtn = document.getElementById("signinbtn");
        let nameField = document.getElementById("namefield");
        let title = document.getElementById("title");
        
        signinbtn.onclick = function(){
            nameField.style.maxHeight = "0"
            title.innerHTML = "Sign In";
            registerbtn.classList.add("disable");
            signinbtn.classList.remove("disable");


        }
        registerbtn.onclick = function(){
            nameField.style.maxHeight = "65px"
            title.innerHTML = "Register";
            registerbtn.classList.remove("disable");
            signinbtn.classList.add("disable");
        }

    </script>
</body>
</html>