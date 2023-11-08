import BackButton from "../components/BackButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Habit from "../components/Habit";

const ShowHabit = () => {
  const [habit, setHabit] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rabits-backend.onrender.com/habits/${id}`)
      .then((response) => {
        setHabit(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <BackButton />
      <p>{habit.name}</p>
      <p>{habit.description}</p>
      <p>{habit.count}</p>
      <p>{habit.goal}</p>
    </div>
  );
};

export default ShowHabit;
