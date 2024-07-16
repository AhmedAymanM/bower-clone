// Reference: https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript/8511350#8511350

export const isObject = (
  element: unknown
): element is Record<string, unknown> =>
  typeof element === 'object' &&
  !Array.isArray(element) &&
  element !== null &&
  !(element instanceof Date)
