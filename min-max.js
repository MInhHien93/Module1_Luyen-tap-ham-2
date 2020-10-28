function minMax(x,y,z) {
    let result = Math.min.apply(Math,[x,y,z]);
    // let result = Math.max.apply(Math,[x,y,z]);
    console.log(result);
}
minMax(1,3,5);