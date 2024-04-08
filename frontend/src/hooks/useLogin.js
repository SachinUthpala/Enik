import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    if (!username || !password) {
      setError("Please provide both username and password");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/inverters/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user data in local storage
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: data });

        // Redirect to home page after successful login
        navigate("/addenergy");
      } else {
        setError("Error logging in. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Error logging in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
