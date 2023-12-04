import { useState, useEffect } from "react";
import Habit from "../components/Habit";
import axios from "axios";
import { Link } from "react-router-dom";
import LevelBar from "../components/LevelBar";
import Logout from "../components/Logout";

const Home = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [carrots, setCarrots] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .put("http://localhost:5500/habits/user", {
        userID: window.localStorage.getItem("userID"),
      })
      .then((response) => {
        setHabits(response.data.habits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    axios
      .put("http://localhost:5500/carrots", {
        userID: window.localStorage.getItem("userID"),
      })
      .then(async (response) => {
        await setCarrots(response.data.count);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [carrots]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-2xl mb-4 mt-5">Rabits</h1>
        <div className="flex md:flex-row flex-col gap-10">
          <div className="flex-1">
            <Link to={"/habits/create"}>
              <div className="flex items-center flex-col">
                <p className="border border-1 px-4 py-2 rounded-md mb-4 text-center">
                  Add new habit
                </p>
              </div>
            </Link>

            <div>
              {habits.map((habit) => (
                <div className="m-2">
                  <Habit
                    name={habit.name}
                    description={habit.description}
                    count={habit.count}
                    goal={habit.goal}
                    id={habit._id}
                    loading={loading}
                    setLoading={setLoading}
                    carrots={carrots}
                    setCarrots={setCarrots}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-center">🥕: {carrots}</p>
            <LevelBar carrots={carrots} />
            <Link to={"/carrots/reset"}>
              <div className="flex items-center flex-col">
                <p className="text-red-600 text-center border border-1 px-4 py-2 rounded-md mb-4">
                  Reset carrots
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Logout />
        <p>
          Check out the code{" "}
          <a href="https://github.com/yifeifang11/rabits" className="underline">
            here
          </a>
          !
        </p>
      </div>
    </div>
  );
};

export default Home;
