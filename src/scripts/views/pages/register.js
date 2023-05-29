import { useEffect } from 'react';
import "./register.css";

function Register() {
  useEffect(() => {
    RegisterScript();
  }, []);

  return (
    <>
    <div className="Title">
      <h1>Trash Hunter</h1>
    </div>
    <div className="SpaceLayout"></div>
    <div className="Layout0">
      <img src="./images/img-register.png" className="ImageSmall" alt=""></img>
      <div className="FormLayout">

        <form className="Form" action="register.php" method="POST">
          <fieldset>
          <legend>Create your account</legend>
          <div className="TextSpace">
            <div className="InputField">
              <input className="InputText" type="text" name="username" placeholder="username" />
            </div>
          </div>
          <div className="TextSpace">
            <div className="InputField">
              <input className="InputText" type="email" name="email" placeholder="email" />
            </div>
          </div>
          <div className="TextSpace">
            <div className="PasswordInputField">
              <input id="inputPassword" className="InputText" type="password" name="password" placeholder="password" />
              <img id="togglePassword" src="./images/eye-ic.svg" alt="toggle password" />
            </div>
          </div>
          <div className="InputButtonSpace">
              <input className="InputButton" type="submit" name="submit" value="SIGN UP" />
          </div>
          <p className="TextQuestion">Already have an account? <a href="/#/login">Log in</a></p>
          </fieldset>
        </form>

      </div>
      <img src="./images/img-register.png" className="ImageLarge" alt=""></img>
    </div>
    </>
  );
}

function RegisterScript() {
  document.getElementById( "togglePassword" ).onclick = function() {
    const x = document.getElementById("inputPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
};
}

export default Register;
