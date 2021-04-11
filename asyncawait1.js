function getUser(userId){
    return new Promise((resolve,reject)=>{
        console.log("Get user")
        setTimeout(()=>{
            resolve({
                userId: userId,
                username: 'admin'
            });
        },1000);
    })
}
function getServices(user){
    return new Promise((resolve,reject)=>{
        console.log("Get Services:")
        setTimeout(()=>{
            resolve(['email','vpn','cdn']);
        },3*1000);
    })
}
function getServiceCost(services){
    return new Promise((resolve,reject)=>{
        console.log("Calculate services of cost:")
        setTimeout(()=>{
            resolve(services.length * 1000);
        },2*1000);
    });
}
getUser(100)
.then(getServices)
.then(getServiceCost)
.then(console.log)

async function getDetails(id){
    name= await getUser(id)
    services=await getServices()
    cost=await getServiceCost()
    console.log("cost is:"+cost)
}
getDetails(1000)