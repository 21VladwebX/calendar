import { DAY_ITEM_CLASS_NAME } from './constants.js';

const getInput = () => {
  return `<input type="text" /> `
}

export const getDaysWrap = days => {
  return days.map(item=>{

    return !!item ?
          `<div class="${DAY_ITEM_CLASS_NAME} ${item.isCurrentDay && "current__day"}" data-id="${item.id}">${item.value} 
                <div class="day__item-input">${getInput()}</div>
                 <ul class="day__item-todo"></ul>
            </div>`
      : `<div class="day__item empty"></div>`
  })
}
