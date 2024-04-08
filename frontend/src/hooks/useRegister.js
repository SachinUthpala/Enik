import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useRegister = () => {
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState(null);

  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (username, email, password, confirmPassword, number) => {
    setIsLoading(true);
    setError(null);

    // Input validation: Check if email and password are not empty
    // if (!email || !password || !confirmPassword) {
    //   setError("Please provide both email and password");
    //   setIsLoading(false);
    //   return;
    // }

    if (password === confirmPassword) {
      try {
        const response = await fetch("http://localhost:4000/api/inverters/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username, email, password, number }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          setError(data.error);
          if (data.emptyFields) {
            setEmptyFields(data.emptyFields);
          }
        }

        if (response.ok) {
          // Handle successful registration
          navigate("/Login");
        } else {
          setError(data.error || "Unknown error occurred");
        }
      } catch (error) {
        console.error(error);
        setError("Error registering. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setError("Passwords do not match");
      setIsLoading(false);
    }
  };

  return { register, isLoading, error ,emptyFields};
};
