import Spline from "@splinetool/react-spline";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import { useCollisionHandler } from "./hooks/useCollistionHandler";
import { useSpline } from "./hooks/useSpline";

export default function App() {
  const [score, setScore] = useState(0);
  const [spline, setSpline] = useSpline();

  // Handle collisions
  useCollisionHandler(spline, (value) =>
    setScore((score: number) => {
      const newScore = score + value;
      if (newScore >= (process.env.REACT_APP_GOAL_SCORE as unknown as number)) {
        console.log("You win! 🎉");
      }
      return newScore;
    })
  );

  return (
    <div className="h-screen">
      <Spline
        scene={process.env.REACT_APP_SPLINE_URL as string}
        onLoad={(spline: any) => setSpline(spline)}
      />
      <Scoreboard score={score} />)
    </div>
  );
}
