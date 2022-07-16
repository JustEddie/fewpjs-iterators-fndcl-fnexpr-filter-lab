function findMatching(arr,str) {
 
    return arr.filter(x=> {return x.toLowerCase()===str.toLowerCase()});
}



function fuzzyMatch(arr,str) {
    return arr.filter(x=> {return x.startsWith(str)});
}

function matchName(arr,str) {
    return arr.filter(x => x.name ===str);
}