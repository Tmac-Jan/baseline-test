'use strict';

function collectSameElements(collectionA, objectB) {
  collectionA.filter(function(a){
 let array==[];
        for(let i=0;i<=objectB.value.length;i++){
 //         for(let j =0;j<=collectionB[i].length,j++){
 //            if(a == collectionB[j]){
 //            return true;
 //            }
 //         }
             if(a.key == objectB.value[i]){
             array.push(a.key);
             return true;
            }
        }
        return false;
     });
     return array;
}
