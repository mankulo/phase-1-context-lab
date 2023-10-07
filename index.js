/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(array){
    return{
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[], 
        timeOutEvents:[],
    }
}
function createEmployeeRecords(arr){
    //or
    
    /*let newArr=[]
    for(const items of arr){
        newArr.push(items)
    }
    return newArr
    */
    let newArr=arr.map((array)=>{
        return createEmployeeRecord(array)})
  return newArr;

}
function  findEmployeeByFirstName(collection, firstNameString){
     
    let newCollection= collection.find((arrayo)=>{
        return arrayo.firstName===firstNameString;
    })
    return newCollection;
}
function createTimeInEvent(dateStamp){
    let newDateStamp=dateStamp.split(' ');
    
    let objecto = {
    type: "TimeIn",
    hour: parseInt(newDateStamp[1]),
    date: newDateStamp[0]
  };
    this.timeInEvents.push(objecto);
    return this;
}
//console.log(createTimeInEvent("2023-03-29 1728"))
function createTimeOutEvent(dateStamp){
  
    let newDateStamp=dateStamp.split(' ')
    let objectito = {
    type: "TimeOut",
    hour: parseInt(newDateStamp[1]),
    date: newDateStamp[0]
  };
  this.timeOutEvents.push(objectito);
 
  return this;
};
function hoursWorkedOnDate(date){
    let timeInObj=this.timeInEvents.find(obj=>obj.date===date).hour
    let timeOutObj=this.timeOutEvents.find(objo=>objo.date===date).hour
   
    return (timeOutObj-timeInObj)/100
}
  function wagesEarnedOnDate(date){
   return hoursWorkedOnDate.call(this,date)*this.payPerHour;
    //return hours()*this.payPerHour;
  }
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, record) => {
      return totalPayroll + allWagesFor.call(record)
    }, 0)
  }
