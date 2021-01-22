//https://github.com/FARDIN98/Js-Assignment

//1.kilometerToMeter
function kilometerToMeter(kilometer){
    if(kilometer < 0){                         //To avoid negative value
        return "Distance can not be negative";
    }
    var meter = kilometer * 1000;
    return meter;
}

//2.budgetCalculator
function budgetCalculator(watch,mobile,laptop){
    if(watch < 0 || mobile < 0 || laptop < 0){
        return "Quantity value can not be negative.";
    }
    var total = (watch * 50) + (mobile * 100) + (laptop * 500);  //Total cost.
    return total;
}


//3.hotelCost
function hotelCost(day){
    var totalCost;
    if(day > 0){                             //To avoid negative value.
        if (day <= 10){
            totalCost = day * 10;
            return totalCost;
        }
        else if(day <= 20){
            day = day - 10;
            totalCost = ((day * 80) + 1000);   //Day (1-10) total cost 1000 taka.
            return totalCost;
        }
        else if(day > 20){
            day = day - 20;
            totalCost = ((day * 50) + 1800);   //Day (1-20) total cost 1000 + 800 = 1800 Taka.
            return totalCost;
        }
    }
    else{
        return "Invalid Input!. Days can not be negative."  //If the value is negative.
    }
}

//4.megaFriend
function megaFriend(name){
    if(name.length == 0){           //If the array has no value.
        return "Empty array!"
    }
    else{
        var largeName = name[0];
        for(var i = 0; i < name.length; i++){
            var element = name[i];
            if(element.length > largeName.length){
                largeName = element;
            }
        }
    }
    return largeName;
}
