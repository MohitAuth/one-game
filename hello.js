/*
var mmass, mheight, tmass, theight, mbmi, tbmi;
mmass= 78;
mheight = 1.69;
tmass = 92;
theight = 1.95;

mbmi = mmass / (mheight * mheight);

console.log(mbmi);

tbmi =  tmass / (theight * theight);

console.log(tbmi);

console.log('is bmi of mohit greater than tiwari?'+''+ mbmi > tbmi);


var mteam, tteam,rteam, mavg, tavg;

mteam = 89 + 120 + 103;
tteam = 0 + 94 + 123;
rteam = 1 + 2 + 3;

mavg = mteam/3;
tavg = tteam/3;
ravg = rteam/3;

mavg > tavg && mavg > ravg? console.log('mteam is winner with' + '' + mavg +'points') : console.log('tteam is winner');


function calculator(bill) {
var percentage;
if(bill < 50) {
    percentage = 0.2; 
}
else if(bill >= 50 && bill < 200) {
       percentage = 0.15; 
} 
else {
    percentage = 0.1;
}
return percentage * bill;
}


console.log(calculator(124));
*/

var mohit =  {
    fullname: 'Mohit Ji',
    height: 6,
    weight: 80,
     bmi: function() {
         this.mbmi = this.weight/(this.height*this.height);
         return this.mbmi;
    }
}

var tiwari = {
    fullname: 'Tiwari Ji',
    height: 6,
    weight: 70,
     bmi: function() {
        this.tbmi= this.weight/(this.height*this.height);
        return this.tbmi;
    }
}


console.log(mohit.bmi());
console.log(tiwari.bmi());


if (mohit.mbmi > tiwari.tbmi) { console.log('The heighest BMI is of '+' '+ mohit.fullname + ' which is ' +' '+ mohit.bmi()) 
}
else {
console.log('The heighest BMI is of '+' '+ tiwari.fullname + ' which is ' +' '+ tiwari.bmi());
}


















