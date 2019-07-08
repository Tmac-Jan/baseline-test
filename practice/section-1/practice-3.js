'use strict';

function collectSameElements(collectionA, objectB) {
 return collectionA.filter(function(a){
                for(let i=0;i<=objectB.value.length;i++){
         //         for(let j =0;j<=collectionB[i].length,j++){
         //            if(a == collectionB[j]){
         //            return true;
         //            }
         //         }
                     if(a == objectB.value[i]){
                     return true;
                    }
                }
                return false;
    });
}
