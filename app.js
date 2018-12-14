function add(n){
  if(n<0){
    return 0;
  }
  return n+add(n-1);
}

console.log(add(8))

function add2(n){
  let total = 0;
  for(let i=1;i<=n;i++){
    total+=i;
  }
  return total;
}

console.log(add2(8));