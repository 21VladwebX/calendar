import {monthNames} from "./constants.js";

export class EventObserver {
  constructor () {
    this.observers = []
  }

  subscribe (fn) {
    this.observers.push(fn)
  }

  broadcast (data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}
export class CustomData {
  constructor () {
    this.now = new Date();
    this.monthCounter = this.now.getMonth();
    this.daysInMonth = 0;
  }
  // get getNowProp () {
  //   return this.now;
  // }
  get getYear () {
    return this.now.getFullYear()
  }
  get getMonth () {
    const currentMonth = this.now.getMonth().toLocaleString()
    return monthNames[currentMonth]
  }
  get getDay () {
    return this.now.getDay()
  }
  get isCurrentMonth () {
    const date = new Date();
    const thisDate = this.now.getFullYear().toString() + this.now.getMonth().toString();
    const currentDate = date.getFullYear().toString() + date.getMonth().toString();
    return thisDate === currentDate;
  };
  get getDaysDetails () {
    const daysInMonth = this.getDaysInMonth
    const now = this.now;
    const firstMonthDay = new Date(this.getYear, now.getMonth(), 1).getDay() - 2; //because of indexes
    const allMonthDays = firstMonthDay + daysInMonth;
    const isCurrentMonth = this.isCurrentMonth;
    const uniqIdTemp = `${now.getFullYear()}/${now.getMonth()}`;
    const allMonthDaysData = []; // array of object of days in month
    const currentDay = new Date().getDay();
    let daysCount = 1; //counter of days in month

    for (let i = 0; i < allMonthDays; i++) { //set data to allMonthDaysData
      if( i > firstMonthDay){
        const dayOfMonth = daysCount++;
        allMonthDaysData.push({
          id: `${uniqIdTemp}/${dayOfMonth}`,
          value: dayOfMonth,
          isCurrentDay: isCurrentMonth && i === currentDay
        });
      } else {
        allMonthDaysData.push(null)
      }
    }
    return allMonthDaysData
  }

  get getDaysInMonth () {
    const date = this.now;
    return new Date(date.getFullYear(),
      date.getMonth()+1,
      0).getDate();
  }
  changeToNextMonth () {
    this.monthCounter = this.monthCounter++ > 12 ? 0 : this.monthCounter++
    console.log(this.monthCounter)
    this.now.setMonth(this.monthCounter);
  }
  changeToPrevMonth () {

    //TODO @Vlad bug with prev month
    this.monthCounter = this.monthCounter-- < 0 ? 12 : this.monthCounter
    // this.monthCounter--
    console.log(this.monthCounter)
    console.log(this.monthCounter  < 0)
    // debugger
    if(this.monthCounter < 0) {
      this.now.setFullYear(this.now.getFullYear( )  )
    }
    this.now.setMonth(this.monthCounter);
  }
}

export class Store {
  constructor() {
    this.data = []
  }

  setNewItem({key,value}) {
    if(this.data[key]) {
      this.data[key].push(value)
    } else {
      this.data[key] = [value]
    }
  return true
  }

  getItem(key) {
    return this.data[key] || null
  }
}
