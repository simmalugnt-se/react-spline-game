import { useEffect, useState } from "react";

export const useSpline = () => {
  const [spline, setSpline] = useState<any>(null);

  useEffect(() => {
    if (spline) {
      // Do whatever you want with the Spline instance here, this will fire once spline has loaded the scene
      // Find the goal object using its ID from the environment variable
      const goal = spline.findObjectById(process.env.REACT_APP_GOAL_OBJECT_ID);
      if (goal) {
        // Hide the goal object so we can show it later when the conditions are all met
        goal.visible = false;
      }
    }
  }, [spline]);

  return [spline, setSpline];
};
