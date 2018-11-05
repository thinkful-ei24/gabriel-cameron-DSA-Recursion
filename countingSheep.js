const countingSheep =  (num) => {
  if(num===0){
    return;
  }
  console.log(`${num} - Another sheep jump over the fence`);
  return(countingSheep(num-1));
};

countingSheep(3);