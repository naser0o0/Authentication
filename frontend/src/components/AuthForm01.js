// import { Form, Link, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css";
import { useState } from "react";

function AuthForm() {
   const [isLogin, setIsLogin] = useState();

//   const [searchParams] = useSearchParams();
//   const isLogin = searchParams.get("mode") === "login";


function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin)=> !isCurrentlyLogin);
}

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>

        {/* {!isLogin ? (
          <p>
            <label htmlFor="image">Repeat password</label>
            <input id="password" type="password" name="password" required />
          </p>
        ) : null} */}
        <div className={classes.actions}>
          {/* <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link> */}
          <button onClick={switchAuthHandler} type="button">
            {isLogin ? "Create new user" : "Login"}
          </button>
          <button>save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
