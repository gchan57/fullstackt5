import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Auth = () => {
   const navigate=useNavigate();
  const [isRegister, setIsRegister] = useState(true);

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const inputStyle =
    "w-full p-3 mb-4 border border-b-blue-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-150";
  const buttonStyle =
    "w-full py-3 bg-indigo-600 text-white font-semibold rounded-2xl hover:bg-indigo-700 transition duration-75 ease-in-out shadow-md";

 
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    
      const res = await axios.post("http://localhost:3000/api/auth/register", registerForm);
     alert(res.data.message)
     setIsRegister(false);
    } catch (err) {
      alert(err.response?.data.message||"Registration Failed")
    } 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
   
    setLoading(true);
    try {
      // Adjust endpoint as needed. Example: POST /api/auth/login
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email: loginForm.email.trim(),
        password: loginForm.password,
      });

      // Example expected response: { token, user, message }
      const token = res?.data?.token;
      const message = res?.data?.message || "Login successful.";

      if (token) {
       
        localStorage.setItem("token", token);
        navigate('/dashboard')
      }

      setSuccess(message);
      setLoginForm({ email: "", password: "" });

    
    } catch (err) {
      setError(
        err?.response?.data?.message || err.message || "Login failed. Check credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (toRegister) => {
    setIsRegister(toRegister);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold rounded-l-lg ${
              isRegister ? "bg-indigo-950 text-white" : "bg-gray-400 text-rose-50 hover:bg-amber-700"
            }`}
            onClick={() => handleToggle(true)}
            type="button"
          >
            Register
          </button>

          <button
            className={`px-4 py-2 font-semibold rounded-r-lg ${
              !isRegister ? "bg-indigo-950 text-white" : "bg-gray-400 text-rose-50 hover:bg-amber-700"
            }`}
            onClick={() => handleToggle(false)}
            type="button"
          >
            Login
          </button>
        </div>

        {isRegister ? (
          <form onSubmit={handleRegister}>
            <input
              className={inputStyle}
              name="name"
              placeholder="Name"
              value={registerForm.name}
              onChange={handleRegisterChange}
            />
            <input
              className={inputStyle}
              name="email"
              type="email"
              value={registerForm.email}
              placeholder="Email"
              onChange={handleRegisterChange}
            />
            <input
              className={inputStyle}
              name="password"
              type="password"
              value={registerForm.password}
              placeholder="Password"
              onChange={handleRegisterChange}
            />

            {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
            {success && <p className="text-sm text-green-600 mb-3">{success}</p>}

            <button
              className={buttonStyle}
              type="submit"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              className={inputStyle}
              name="email"
              type="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={handleLoginChange}
            />
            <input
              className={inputStyle}
              name="password"
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleLoginChange}
            />

            {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
            {success && <p className="text-sm text-green-600 mb-3">{success}</p>}

            <button
              className={buttonStyle}
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
