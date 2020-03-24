const sherlockAndAnagrams = s => {
  let ansCount = 0;
  let sArr = [];
  let n = 1;

  for (let i = 0; i < s.length; i++) {
    sArr.push(s.substring(i, ))
    let temS = s[i]
    sArr.push(temS)
    for (let j = n; j < s.length; j++) {
      // sArr.push(s.substring(i, j))
      temS += s[j]
      sArr.push(temS)
    }
    n++
  }

  n = 1;
  for(let i = 0; i<sArr.length; i++){
    for(let j = n; j<sArr.length; j++){
      if(sArr[i].length !== sArr[j].length) continue;
      else{
        let compObj = {}
        let compObjTwo = {}
        for(let k = 0; k<sArr[i].length; k++){
          if(!compObj[sArr[i][k]]) compObj[sArr[i][k]] = 1;
          else{ compObj[sArr[i][k]] += 1 };

          if(!compObjTwo[sArr[j][k]]) compObjTwo[sArr[j][k]] = 1;
          else{ compObjTwo[sArr[j][k]] += 1 }
        }
        
        // for(let k = 0; k<sArr[i].length; k++){
        //   if(!compObjTwo[sArr[j][k]]) compObjTwo[sArr[j][k]] = 1;
        //   else{ compObjTwo[sArr[j][k]] += 1 }
        // }
        let detObj = {}
        for(let k = 0; k<sArr[i].length; k++){ 
          if(compObj[sArr[i][k]] === compObjTwo[sArr[i][k]]) 
            {
              detObj['true'] = 1;
            }
          else{ detObj['false'] = 1 }
        }

        if(detObj['false']) continue;
        else ansCount += 1
      }
    }
    n++
  }


  return ansCount
};

console.log(sherlockAndAnagrams("cdcd"), 5); 
console.log(sherlockAndAnagrams("ifailuhkqq"), 3);
console.log(sherlockAndAnagrams("abba"), 4);
console.log(sherlockAndAnagrams("abcd"), 0);
console.log(sherlockAndAnagrams("kkkk"), 10);