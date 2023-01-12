export function displayLogin(){
    let loginContainer: HTMLDivElement = document.createElement("div");
    let loginHeader: HTMLHeadingElement = document.createElement("h1");
    let loginForm: HTMLFormElement = document.createElement("form");
    let loginFormInputUsernameLabel: HTMLLabelElement = document.createElement("label");
    let loginFormInputUsername: HTMLInputElement = document.createElement("input");
    let loginFormInputPasswordLabel: HTMLLabelElement = document.createElement("label");
    let loginFormInputPassword: HTMLInputElement = document.createElement("input");
    let loginFormSubmitButton: HTMLInputElement = document.createElement("input");

    loginContainer.setAttribute("id", "login-container");
    loginHeader.setAttribute("id", "login-header");
    loginForm.setAttribute("id", "login-form");
    loginFormInputUsernameLabel.setAttribute("id", "login-username-label");
    loginFormInputUsername.setAttribute("id", "login-username-input");
    loginFormInputUsername.setAttribute("required", "");
    loginFormInputPasswordLabel.setAttribute("id", "login-password-label");
    loginFormInputPassword.setAttribute("id", "login-password-input");
    loginFormInputPassword.setAttribute("required", "");
    loginFormSubmitButton.setAttribute("id", "login-submit-button");

    loginFormInputPassword.setAttribute("type", "password");
    loginFormSubmitButton.setAttribute("type", "submit");
    loginFormSubmitButton.setAttribute("value", "LOGIN");
    loginForm.setAttribute("onsubmit", "return false");
    
    loginHeader.innerText = "LOGIN";
    loginFormInputUsernameLabel.innerText = "Username: ";
    loginFormInputPasswordLabel.innerText = "Password: ";

    (document.querySelector("body") as HTMLElement).appendChild(
        loginContainer
    );

    loginContainer.appendChild(loginHeader);
    loginContainer.appendChild(loginForm);
    loginForm.appendChild(loginFormInputUsernameLabel);
    loginForm.appendChild(loginFormInputUsername);
    loginForm.appendChild(loginFormInputPasswordLabel);
    loginForm.appendChild(loginFormInputPassword);
    loginForm.appendChild(loginFormSubmitButton);

    if (loginForm.addEventListener) {
        loginForm.addEventListener("submit", callback, false); //Modern browsers
      } else if (loginForm.attachEvent) {
        loginForm.attachEvent("onsubmit", callback); //Old IE
    }

    function callback() {
        let testUsername : string = (<HTMLInputElement>document.getElementById("login-username-input")).value; 
        let testPwd : string = (<HTMLInputElement>document.getElementById("login-password-input")).value; 

        if (testUsername == "test" && testPwd == "123"){
            setTimeout(function () {
                console.log("Success!");
                loginHeader.innerText = "LOGIN SUCCESS!";
                loginHeader.style.color = "limegreen";
                setTimeout(function () {
                    loginContainer.style.display = "none";
                }, 2500);
            }, 500); 
        }
        else{
            setTimeout(function () {
                console.log("Error!");
                loginHeader.innerText = "LOGIN FAILED!";
                loginHeader.style.color = "red";
            }, 500); 
        }
    }
}

export function displayHeroes(){
    let heroContainer: HTMLDivElement = document.createElement("div");

    heroContainer.setAttribute("id", "hero-container");

    (document.querySelector("#main-container") as HTMLElement).appendChild(
        heroContainer
    );
}