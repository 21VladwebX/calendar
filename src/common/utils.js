import { DAY_ITEM_CLASS_NAME } from './constants.js';
import { generateUniqId } from './common.js';

const getUniqId = generateUniqId();

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
