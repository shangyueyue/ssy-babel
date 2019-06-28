let p = new Promise((reslove,reject)=>{
  resolve('success');
});

p.then((data)=>{
  console.log(data)
})