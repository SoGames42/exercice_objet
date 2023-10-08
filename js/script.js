"use strict";

let student={
     name:"Kyara",
     favoriteFood:"Nems",
     city:"Paris",
 }

 let values=Object.values(student);
 let resultBis=0;
 values.forEach((values)=> {
     resultBis+=values.length
 })
 if(resultBis%2==0){
    console.log("pair")
 }
 else{
    console.log("impair")
 }