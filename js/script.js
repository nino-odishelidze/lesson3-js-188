

// დავალება 1

let array = [1,2,3,4,5];

 for (let item = 5; item > array.length; item --); {
    
    console.log(array[item]);
}

// დავალება 2

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let element = 0; element < array2.length; element ++) {
    if ( element === 5); {
        break;
    }
    console.log('aris');
    
} 


// დავალება 3

let array5 = [1, 2, 3, 7, 6, 9];

    for (let item2 = 0; item2 < array5; item2 ++) {
       if (item2 === 7); {
            continue;
        }

        console.log(item2);
}

// დავალება 4

//რას დააბრუნებს 8 == "8" ? true an false? - ახსენით რატომ?

//პასუხი: დააბრუნებს true-ს, რადგან ორ ელემენს თავად დააკონვერტირებს და სტრინგს გადააკეთებს ნამბერად, იმიტომ, რომ მოაცილებს ბრჭყალებს და აღიქვამს, როგორც რიცხვად და ტოლი იქნება/;

//დავალება 5

let array1= [1, 2, 4,8, 7, 15, 25, 3, 18, 12];

for ( let item3 = 0; item3 < array3.length; item3 ++); {
    console.log(item3); 
}
let arraynew = item3 > 5;
if ( arraynew > 5 );
console.log(arraynew);
 for(let g of array7){
    if(g > 5){
        console.log(g);

    }
}



// დავალება 6

let box = ['jana', 'otari', 'maguli', 'levani', 'ana'];

for (let names of box); {
    console.log(box[names]);
}

if (box.names === 5 && box[1] === 'otari' ) {
    console.log('მასივის რაოდენობა: 5 და მეორე ელემენტია ოთარი');
    
} else if (box.length === 7 && box.length-1 === 'sandro') {
    console.log('მასივის რაოდენობა: 7 და ბოლო ელემენტია სანდრო');
    
} else {
    console.log(error);
    
}


// დავალება 7

let users = [
    {username: 'giorgi',age: 30},
    {username: 'levani', age: 25},
    {username: 'anna', age: 28}
]

for(sum of users){
    if(sum.age > 25){
      console.log(sum.username);

    }

}




