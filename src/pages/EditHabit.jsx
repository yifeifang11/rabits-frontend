import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditHabit = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5500/habits/${id}`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
        setGoal(response.data.goal);
        setCount(response.data.count);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const saveHabit = (e) => {
    e.preventDefault();
    console.log("chunugs!");
    const data = {
      name: name,
      description: description,
      count: count,
      goal: goal,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5500/habits/${id}`, data)
      .then(() => {
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
      <BackButton />
      <p className="mt-10 text-lg">Edit habit</p>
      <form
        onSubmit={saveHabit}
        className="flex flex-col items-center mt-2 border border-1 rounded-md p-5 w-[35%]"
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
          className="border w-full mb-2"
        />

        <input
          type="submit"
          value="Save"
          className="border border-1 px-4 py-2 rounded-md mt-4"
        />
      </form>
    </div>
  );
};

export default EditHabit;
