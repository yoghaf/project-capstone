import "./Register.css";

function Register() {
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
          <p className="TextField">
              <input className="InputText" type="text" name="username" placeholder="username" />
          </p>
          <p className="TextField">
              <input className="InputText" type="email" name="email" placeholder="email" />
          </p>
          <p className="TextField">
              <input className="InputText" type="password" name="password" placeholder="password" />
          </p>
          <button>
              <input className="InputButton" type="submit" name="submit" value="SIGN UP" />
          </button>
          <p className="TextQuestion">Already have an account? <a href="#login">Log in</a></p>
          </fieldset>
        </form>

      </div>
      <img src="./images/img-register.png" className="ImageLarge" alt=""></img>
    </div>
    </>
  );
}

export default Register;
