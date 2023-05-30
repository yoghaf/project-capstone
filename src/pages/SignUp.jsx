import React from "react";
import { useEffect , useState} from 'react';
import { Link } from "react-router-dom";
import "../assets/style/signup.css"
import supabase from "../config/supabaseClient";

function SignUp() {
  const [formData, setFormData] = useState({
    username:"", email:"", password:""
  })

  useEffect(() => {
    SignUpScript();
  }, []);

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }
  async function handleSubmit(e){
    e.preventDefault()
    try {
      const {data, error} = await supabase.auth.signUp({
        email:formData.email,
        password:formData.password,
        options:{
          data:{
            username:formData.username
          }
        }
      })


    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
    <div className="Title">
      <h1><Link to={"/"}>Trash Hunter</Link></h1>
    </div>
    <div className="SpaceLayout"></div>
    <div className="Layout0">
      <img src="./images/img-register.png" className="ImageSmall" alt=""></img>
      <div className="FormLayout">

        <form className="Form" onSubmit={handleSubmit} method="POST">
          <fieldset>
          <legend>Create your account</legend>
          <div className="TextSpace">
            <div className="InputField">
              <input className="InputText" type="text" name="username" placeholder="username" onChange={handleChange}/>
            </div>
          </div>
          <div className="TextSpace">
            <div className="InputField">
              <input className="InputText" type="email" name="email" placeholder="email" onChange={handleChange}/>
            </div>
          </div>
          <div className="TextSpace">
            <div className="PasswordInputField">
              <input id="inputPassword" className="InputText" type="password" name="password" placeholder="password" onChange={handleChange}/>
              <img id="togglePassword" src="./images/eye-ic.svg" alt="toggle password" />
            </div>
          </div>
          <div className="InputButtonSpace">
              <input className="InputButton" type="submit" name="submit" value="SIGN UP" />
          </div>
          <p className="TextQuestion">Already have an account? <Link to={"/login"}>Log in</Link></p>
          </fieldset>
        </form>

      </div>
      <img src="./images/img-register.png" className="ImageLarge" alt=""></img>
    </div>
    </>
  );
}

function SignUpScript() {
  document.getElementById( "togglePassword" ).onclick = function() {
    const x = document.getElementById("inputPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
};
}


export default SignUp;
