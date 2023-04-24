// Given a list of children and a UUID, this function finds the parent group's name
export const findParentGroupName = (
  children: any,
  uuid: string
): string | null => {
  // If there are no children, return null
  if (!children) return null;

  // Check if children is an array, if not use children._scene.children
  if (
    !Array.isArray(children) &&
    children._scene &&
    Array.isArray(children._scene.children)
  ) {
    children = children._scene.children;
  }

  // Loop through each child in the children array
  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    // If the current child's UUID matches the provided UUID, return the parent's name
    if (child.uuid === uuid) {
      return child.parent.name;
    }

    // If the current child has its own children, recursively call the function
    if (child.children && child.children.length > 0) {
      const result = findParentGroupName(child.children, uuid);
      // If a match is found in the nested children, return the result
      if (result) {
        return result;
      }
    }
  }

  // If no match is found, return null
  return null;
};
