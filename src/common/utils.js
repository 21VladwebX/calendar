import { DAY_ITEM_CLASS_NAME } from './constants.js';
import { daysTodosItemsTempl, getInputTempl} from  './templates.js';


const getItemData = (day, getItem) => {
  const item = day && getItem(day.id);
  return !!item ? item : "";
}

export const getDaysWrap = (days, getItem) => days.map(item=>{
  //trying to get data from DB on FE
  const itemData = getItemData(item, getItem);
  const getItemsTemp = itemData && daysTodosItemsTempl(itemData);

  return !!item ?
        `<div class="${DAY_ITEM_CLASS_NAME} ${item.isCurrentDay ? "current__day" : ""}" data-id="${item.id}">${item.value} 
              <div class="day__item-input">${getInputTempl()}</div>
               <ul class="day__item-todo">
                  ${getItemsTemp}
                </ul>
          </div>`
    : `<div class="day__item empty"></div>`
})
