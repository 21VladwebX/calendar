import { monthNames, DAY_ITEM_CLASS_NAME } from './constants.js';
import { generateUniqId } from './common.js';

const getUniqId = generateUniqId();

/* Date*/
const getDaysInMonth = data => {
  return new Date(data.getFullYear(),
    data.getMonth()+1,
    0).getDate();
}

export const getCustomData = data => {
  const now = data || new Date();

  return {
    year: now.getFullYear(),
    month: getMonth(now),
    day: now.getDay(),
    daysInMonth: getDaysInMonth(now)
  }
}

const getMonth = data => {
  const currentMount = data.getMonth().toLocaleString()
  return monthNames[currentMount]
}

/* Date days*/
const getInput = () => {
  return `<input type="text" /> `
}

export const getDaysWrap = days => {
  const daysArr = new Array(days).fill();
  return daysArr.map((item, index)=>{
    return `<div class="${DAY_ITEM_CLASS_NAME}" data-id="${getUniqId()}">${index+1} 
                <div class="day__item-input">${getInput()}</div>
                 <ul class="day__item-todo"></ul>
            </div>`
  })
}
