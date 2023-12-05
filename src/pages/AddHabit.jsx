import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddHabit = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveHabit = (e) => {
    e.preventDefault();
    console.log("chunugs!");
    const userID = window.localStorage.getItem("userID");
    const data = {
      name: name,
      description: description,
      count: 0,
      goal: goal,
      user: userID,
    };
    setLoading(true);
    axios
      .post("https://rabits-backend.onrender.com/habits", data)
      .then(() => {
        setLoading(false);
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center pt-16">
      <BackButton />
      <p className="mt-10 text-lg">Create a new habit!</p>
      <form
        className="flex flex-col items-center mt-2 border border-1 p-5 rounded-lg w-[35%]"
        onSubmit={saveHabit}
      >
        <label htmlFor="">Habit name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full mb-2"
        />

        <label htmlFor="">Habit description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border w-full mb-2"
        />

        <label htmlFor="">Habit goal</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="border w-full"
        />

        <input
          type="submit"
          value="Submit"
          className="border border-1 px-4 py-2 rounded-md mt-4"
        />
      </form>
    </div>
  );
};

export default AddHabit;
