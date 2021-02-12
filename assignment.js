// //kilometer to meter


function kilomiterToMeter(kilometer){
    if(kilometer>= 0){
    meter = kilometer * 1000;
    return meter;
}
else{
    console.log("you can't use negative value")
   }
}
var result = kilomiterToMeter(-10);
console.log(result);




// // // budgetCalculator
function budgetCalculator(watch, phone, laptop){
    if(watch >=0, phone>=0, laptop>=0){
        
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var total = watchPrice + phonePrice + laptopPrice;
    }
    else{
        console.log("don't use negative value")
    }
    return total;

}
var result = budgetCalculator(10, 10, 10);
console.log(result);


// //hotelCost
 function hotelCost(day){
     if(day <= 10){
        totalRent = day * 100;
     }
     else if(day <= 20){
         var rent1 = 10 * 100;
         var remain = date -10;
         var rent2 = remain * 80;
         totalRent =rent1 + rent2;
     }
     else {
         var rent1 = 10 * 100;
         var rent2 = 10 * 80;
         remain = day - 20;
         var rent3 = remain * 50;
         totalRent =rent1 + rent3 + rent2;

     }
     return totalRent;
 }
 var result = hotelCost(25);
 console.log(result);




// finding megaFriend
function megaFriend(listOfFriend){
    var longestWord = 0;
    for (let i = 0; i < listOfFriend.length; i++) {
        if(listOfFriend[i].length >longestWord){
            longestWord = listOfFriend[i].length
             


         }
        }
        return longestWord;
         }
var statement = ["kader","shakl","udoy","araf","islam","shagora"]
var result = megaFriend(statement);
console.log(result);

