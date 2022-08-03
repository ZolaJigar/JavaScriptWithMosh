// //Normal function

// let baseSalary = 30_000 ;
// let overtime = 10 ;
// let rate = 20 ;

// function getWage(baseSalary , overtime , rate) {
//     return baseSalary + (overtime * rate);
// }

// //function with oops concepts

// let employee = {
//      baseSalary : 30_000 ,
//      overtime : 10 ,
//      rate : 20 ,
//      getWage : function(){
//         return this.baseSalary + (this.overtime * this.rate);
//      }
// };

// employee.getWage();

function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}

circle.draw();

// const circle = {
//     radius : 1 ,
//     location : {
//         x : 2 ,
//         y : 2
//     }
// };

// circle.draw();
