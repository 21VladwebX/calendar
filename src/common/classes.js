import {monthNames} from "./constants.js";

export class EventObserver {
  constructor () {
    this.observers = []
  }

  subscribe (fn) {
    this.observers.push(fn)
  }

  unsubscribe (fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }

  broadcast (data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}
// export const getCustomData = () => {
//   const now = new Date();
//   let mountCounter = 0;
//
//   return {
//     now,
//     // year: now.getFullYear(),
//     // month: getMonth(now),
//     day: now.getDay(),
//     daysInMonth: (now) => getDaysInMonth(now),
//     getNextMonth: ()=> {
//       mountCounter++;
//       return now.getMonth() + mountCounter;
//     },
//     getPrevMonth: ()=> {
//       mountCounter++;
//       return now.getMonth() + mountCounter;
//     }
//   }
// }
//

export class CustomData {
  constructor () {
    this.now = new Date();
    this.monthCounter = this.now.getMonth();
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

  get daysInMonth () {
    const date = this.now;
    return new Date(date.getFullYear(),
      date.getMonth()+1,
      0).getDate();
  }
  changeToNextMonth () {
    this.monthCounter++;
    this.now.setMonth(this.monthCounter);
  }
  changeToPrevMonth () {
    this.monthCounter--;
    this.now.setMonth(this.monthCounter);
  }
}

