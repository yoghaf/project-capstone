import { useEffect } from 'react';
import "./register.css";

function Login() {
    useEffect(() => {
        LoginScript();
      }, []);

  return (
    <>
    <div className="Title">
      <h1>Trash Hunter</h1>
    </div>
    <div className="SpaceLayout"></div>
    <div className="Layout0">
      <img src="./images/img-login.png" className="ImageSmall" alt=""></img>
      <div className="FormLayout">

        <form className="Form" action="login.php" method="POST">
          <fieldset>
          <legend>Welcome back</legend>
          <div className="TextSpace">
            <div className="InputField">
              <input className="InputText" type="text" name="username" placeholder="username" />
            </div>
          </div>
          <div className="TextSpace">
            <div className="PasswordInputField">
              <input id="inputPassword" className="InputText" type="password" name="password" placeholder="password" />
              <img id="togglePassword" src="./images/eye-ic.svg" alt="toggle password" />
            </div>
          </div>
          <div className="InputButtonSpace">
              <input className="InputButton" type="submit" name="submit" value="LOGIN" />
          </div>
          <p className="TextQuestion">Don’t have an account?  <a href="/#/register">Sign up</a></p>
          </fieldset>
        </form>

      </div>
      <img src="./images/img-login.png" className="ImageLarge" alt=""></img>
    </div>
    </>
  );
}

function LoginScript() {
    document.getElementById( "togglePassword" ).onclick = function() {
        const x = document.getElementById("inputPassword");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    };
}

export default Login;
