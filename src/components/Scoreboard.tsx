import { useEffect, useState } from "react";
import formatTime from "../helpers/formatTime";

// Define Scoreboard props
interface ScoreboardProps {
  score: number;
  startTime: number;
}

export default function Scoreboard(props: ScoreboardProps) {
  const { score, startTime } = props;
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return startTime ? (
    <div className="fixed text-white z-10 p-10 top-0 font-mono bg-black">
      <ul>
        <li>Score: {score}</li>
        <li>Time: {formatTime(currentTime - startTime)}</li>
      </ul>
    </div>
  ) : null;
}
