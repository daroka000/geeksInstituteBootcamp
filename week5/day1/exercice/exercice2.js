const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve("succes"),200}
    );
});
promise.then((pro)=> console.log("succes"));
