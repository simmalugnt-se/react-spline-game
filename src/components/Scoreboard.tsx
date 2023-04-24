// Define Scoreboard props
interface ScoreboardProps {
  score: number;
}

export default function Scoreboard(props: ScoreboardProps) {
  const { score } = props;

  return (
    <div className="fixed text-white z-10 p-10 top-0 font-mono bg-black">
      <h1>Score: {score}</h1>
    </div>
  );
}
