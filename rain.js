const getSpaces = () => {
  const n = Math.floor(Math.random() * (300 - 1)) + 1;
  let spaces = "";
  
  for(let i = 0; i < n; i ++) spaces += " ";
  
  return spaces;
};

const rain = () => {
  setInterval(() => {
    console.log(getSpaces() + "/");
  }, 1);
};

rain();