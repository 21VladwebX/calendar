export const generateUniqId = () =>{
  let uniqId = 0;
  return () => uniqId++;
}
