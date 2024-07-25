import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onSubmit: () => void;
}

const Login = () => {
  const [action, setAction] = useState("Login");
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({ username: "", password: "" });
  const [isSubmit, setIsSubmit] = useState(false);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = ``;

    if (action === "Sign Up") {
      path = "Alert";
    } else {
      path = "Home";
    }
    //if (Object.keys(formErrors).length === 0 && isSubmit) {
    navigate(path);
    //}
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //console.log(formValues);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      routeChange();
    }
  }, [formErrors]);
  const validate = (values: { username: any; password: any }) => {
    const errors = {
      username: "",
      password: "",
    };
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if (action === "Login" && !values.username) {
      errors.username = "Username is required!";
    } else if (action === "Sign Up" && !values.username) {
      errors.username = "Username is required!!!!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters!";
    }

    return errors;
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message Success">Signed in successfully</div>
          ) : (
            <pre> {JSON.stringify(formValues, undefined, 2)}</pre>
          )}

          <form onSubmit={handleSubmit}>
            <h1>{action}</h1>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>{action === "Sign Up" && <label>First Name: </label>}</td>
                  <td>
                    {action === "Sign Up" && (
                      <input name="fName" type="text"></input>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>{action === "Sign Up" && <label>Last Name: </label>}</td>
                  <td>
                    {action === "Sign Up" && (
                      <input name="lName" type="text"></input>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>{action === "Sign Up" && <label>Email: </label>}</td>
                  <td>
                    {action === "Sign Up" && (
                      <input name="email" type="email"></input>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Username: </label>
                  </td>
                  <td>
                    <input
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={formValues.username}
                      onChange={handleChange}
                    ></input>
                    <p>{formErrors.username}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Password: </label>
                  </td>
                  <td>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      value={formValues.password}
                      onChange={handleChange}
                    ></input>
                    <p>{formErrors.password}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    {action === "Sign Up" && <label>Confirm Password: </label>}
                  </td>
                  <td>
                    {action === "Sign Up" && (
                      <input name="confirmPassword" type="password"></input>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    {action === "Sign Up" ? (
                      <button type="submit" className="btn btn-primary">
                        Create Account
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ display: "none" }}
                      >
                        Create Account
                      </button>
                    )}
                    {action === "Login" ? (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setAction("Sign Up")}
                      >
                        Sign Up
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ display: "none" }}
                        onClick={() => setAction("Sign Up")}
                      >
                        Sign Up
                      </button>
                    )}
                  </td>
                  <td>
                    {action === "Sign Up" ? (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => setAction("Login")}
                      >
                        Back
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{ display: "none" }}
                        onClick={() => setAction("Login")}
                      >
                        Back
                      </button>
                    )}
                    {action === "Login" ? (
                      <button type="submit" className="btn btn-primary">
                        Confirm Login
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ display: "none" }}
                      >
                        Confirm Login
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
