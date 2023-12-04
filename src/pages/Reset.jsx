import { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resetApp = () => {
    setLoading(true);
    const userID = window.localStorage.getItem("userID");
    axios
      .delete(`https://rabits-back.vercel.app/carrots/${userID}`)
      .then((response) => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-center pt-16">
      <p className="mt-10 text-lg mb-4">
        Are you sure you want to reset your carrots?
      </p>
      <button
        className="text-red-500 border border-1 px-4 py-2 rounded-md mb-4"
        onClick={resetApp}
      >
        Yes, reset
      </button>
      <BackButton />
    </div>
  );
};

export default Reset;
