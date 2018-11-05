const countingSheep =  (num) => {
  if(num===0){
    return;
  }
  console.log(`${num} - Another sheep jump over the fence`);
  return(countingSheep(num-1));
};

countingSheep(3);

const counting = (num) => {
  for (let i=num; i>0; i--){
    console.log(`${i} - Another sheep jump over the fence`);
  }
};

counting(3);