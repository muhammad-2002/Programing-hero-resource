import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "./Provider";

const Register = () => {
  const { createUser } = useContext(authContext);
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confPassword = e.target.confirmPassword.value;
    if (!/^[^\s@]+@gmail\.com$/.test(email)) {
      setEmailError("Please Enter Valid Email Address");
      return;
    }
    if (!confPassword) {
      return setPassError("please provide conFrom Password");
    }
    if (password !== confPassword) {
      return setPassError("Password Don't Match");
    }
    if (password.length < 6) {
      return setPassError("Password Must be use 6 charecter");
    }
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setPassError("Provide a strong password");
      return;
    }
    setEmailError("");
    setPassError("");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-3xl font-semibold">Register in to your account</h1>
        <a className="text-sm dark:text-gray-600" href="/">
          Or start your free trial
        </a>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 p-2"
            />
            <br />
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 p-2"
            />
            {emailError && (
              <small className="text-red-500 text-start">{emailError}</small>
            )}
            <br />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 p-2"
            />
            <br />
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 p-2"
            />
            {passError && (
              <small className="text-red-500 text-start">{passError}</small>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                aria-label="Remember me"
                className="mr-1 rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600"
              />
              <label htmlFor="remember" className="text-sm dark:text-gray-600">
                Remember me
              </label>
            </div>
            <a className="text-sm dark:text-gray-600" href="/">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
