//დავალება6

// შევქმნათ სტრინგების მასივი და დავბეჭდოთ ყველა სტრინგი რომელიც რა სიმბოლოთიც იწყება, იმავე სიმბოლოთი მთავრდება

var arr = ["ირაკლი", "ნიკა", "იკა", "ავა", "იანვარი"];
for (var i of arr){
        if (i[0] == i[i.length-1]){console.log(i)}
        else if  (i[0] != i[i.length-1]){console.log("ესეთი ელემენტი არ მოიძებნა")}      
    }


// სტირნგებს მასივიდან ვიპოვოთ უდიდესი სტრინგი

var arr = ["ირაკლი", "ნიკა", "იკა", "ავა", "იანვარი"];
var max = 0;
for (var i=0; i<arr.length; i++){
    if (arr[i].length > max){var max = arr[i].length;}
          
}
console.log(max)