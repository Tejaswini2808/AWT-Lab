function double(value,callback){
    console.log(value)
    setTimeout(()=>{
        callback(value*2)
    },2000)
}
double(10,function(fres){
    console.log("FirstValue:"+fres)
    double(fres,function(sres){
        console.log("Second Value:"+sres)
        double(sres,function(tres){
            console.log("Third Value:"+tres)
        })
    })
})