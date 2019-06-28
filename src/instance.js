const arr = [1,2,3,4];
const result = arr.includes(1);
const flat = arr.flat(Infinity);
arr.some((item)=>{
  return item === 2;
})
Array.prototype.slice.call(arr,1)