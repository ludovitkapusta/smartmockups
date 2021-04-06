// eslint-disable-next-line import/prefer-default-export
export const compareTwoArrays = (
  array1: string[],
  array2: string[]
): boolean => {
  if (array1.length !== array2.length) return false

  return (
    array1.reduce((acc: string[], curr) => {
      const findInArray2 = array2.find((item) => item === curr)
      return findInArray2 ? [...acc, findInArray2] : acc
    }, []).length === array1.length
  )
}
