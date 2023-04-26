import { useEffect } from "react";
import { findParentGroupName } from "../helpers/parentGroupFinder";

// The useCollisionHandler hook accepts three arguments: the Spline instance,
// a function to update the score, and a function to call when a goal is reached.
export const useCollisionHandler = (
  spline: any | null,
  setScore: (value: number) => void,
  score: number
) => {
  // The useEffect hook ensures that the event listener is set up and cleaned up
  // when the component mounts and unmounts.
  useEffect(() => {
    // handleCollision is a function that will be called when a collision event is detected.
    const handleCollision = (event: any) => {
      // Find the target object involved in the collision using its ID.
      const target = spline.findObjectById(event.target.id);
      // Check if the target is valid
      if (target && target.visible) {
        const targetParentName = findParentGroupName(
          spline._scene.children,
          target.uuid
        );
        console.log("parent", targetParentName);
        target.visible = false;
        console.log("collision with", target);
        // TODO: Check parent of target to see if it's good or bad
        setScore(+1);
        if (score >= 3) {
          console.log("You win!");
          // emit
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
  }, [setScore, spline]);
};
