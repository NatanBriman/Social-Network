export const removeObjectFromArrayById = (array, objectToRemove) =>
  array.filter(({ id }) => id !== objectToRemove.id);

// TODO: Use RambdaJs!!
