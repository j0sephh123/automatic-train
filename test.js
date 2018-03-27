let obj = {
  arbs: {
    valsartan : {
      dosage : "160-320mg",
      generics :[ "Valsacor", "Valtensin", "Diovan"]
   },
    telmisartan : {
      dosage : "80mg",
      generics :[ "Micardis",  "Telmitan"]
   },
    losartan : {
      dosage : "50-100mg" ,
      generics :[ "Lorista", "Lozap", "Tores" ]
   },
    candesartan : {
      dosage : "8-32mg" ,
      generics :[ "Acrux", "Atacand", "Candecard", ]
   },
    olmesartan : {
      dosage : "20-40mg" ,
      generics :[ "Olmesta", "Tensar", "Tespadan" ]
   }
  }
}
let newObj;
let objEntries = Object.entries(obj);
for(const[key, value] of objEntries){
  newObj = value;
}

let allDrugs1 = Object.entries(newObj).map(item => item[0])
console.log(allDrugs1);