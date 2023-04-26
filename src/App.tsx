import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import Scoreboard from "./components/Scoreboard";
import { useCollisionHandler } from "./hooks/useCollistionHandler";
import { useSpline } from "./hooks/useSpline";

export default function App() {
  const [score, setScore] = useState(0);
  const [spline, setSpline] = useSpline();
  const [level, setLevel] = useState(1);
  const [startTime, setStartTime] = useState<number>(0);

  useEffect(() => {
    setStartTime(Date.now());
  }, [spline]);

  // Handle collisions
  useCollisionHandler(
    spline,
    (value) => setScore((score: number) => score + value),
    score
  );

  return (
    <div className="h-screen">
      <Spline
        scene={`${process.env.REACT_APP_SPLINE_URL as string}?level=${level}`}
        onLoad={(spline: any) => setSpline(spline)}
      />
      <Scoreboard score={score} startTime={startTime} />
      <div className="fixed bottom-0 right-0 p-2 bg-white z-10">
        <button onClick={() => setLevel(level + 1)}>Next Level</button>
      </div>
      )
    </div>
  );
}
