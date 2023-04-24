import { useEffect } from "react";
import { findParentGroupName } from "../helpers/parentGroupFinder";

// The useCollisionHandler hook accepts three arguments: the Spline instance,
// a function to update the score, and a function to call when a goal is reached.
export const useCollisionHandler = (
  spline: any | null,
  setScore: (value: number) => void,
  onGoal: () => void
) => {
  // The useEffect hook ensures that the event listener is set up and cleaned up
  // when the component mounts and unmounts.
  useEffect(() => {
    // handleCollision is a function that will be called when a collision event is detected.
    const handleCollision = (event: any) => {
      // Find the target object involved in the collision using its ID.
      const target = spline.findObjectById(event.target.id);

      // Check if the target is valid and visible.
      if (target && target.visible) {
        // Get the parent group of the target object.
        const parentGroupName = findParentGroupName(spline, target.uuid);

        // Hide the target object.
        target.visible = false;

        // Perform actions based on the name of the parent group of the target object.
        switch (parentGroupName) {
          case "GOOD":
            // Increase the score by 1.
            setScore(+1);
            break;
          case "BAD":
            // Decrease the score by 1.
            setScore(-1);
            break;
          case "GOAL":
            // Call the onGoal function when the goal is reached.
            onGoal();
            break;
          default:
            break;
        }
      }
    };

    // Add the collision event listener to the Spline instance if it exists.
    if (spline) {
      spline.addEventListener("collision", handleCollision);
    }

    // Clean up the event listener when the component unmounts.
    return () => {
      if (spline) {
        spline.removeEventListener("collision", handleCollision);
      }
    };
  }, [onGoal, setScore, spline]);
};
