import { monthHeaderTempl, daysTempl } from "./common/templates.js";
import { getCustomData, getDaysWrap } from './common/utils.js';
import { DAY_ITEM_CLASS_NAME } from  './common/constants.js';

const daysWrapper = (days) => {
  const daysWrap = getDaysWrap(days);
  const daysSection = daysTempl(daysWrap)
  //add Listeners
  return daysSection;
}

const addActions = () => {
  const calendarWrapper = document.getElementsByClassName('days__wrapper')[0];
  calendarWrapper.addEventListener('click', ({target})=>{
    //TODO @Vlad set day__item to constants
    if(target.classList.contains(DAY_ITEM_CLASS_NAME) || target.nodeName === 'INPUT'){
      target.classList.toggle('details')
    }else{
      target.closest(`.${DAY_ITEM_CLASS_NAME}`).classList.toggle('details')
    }
    const list = target.getElementsByClassName( 'day__item-todo')[0];

    target.addEventListener('keyup',(e)=>{
      const {target:{value},keyCode} = e;
      if(keyCode === 13 && !!list) {
        // console.log(list)
        // console.log(value)
        const item = document.createElement('li');
        item.innerHTML = value;
        list.appendChild(item)
      }
    })
  },false)
}

const mainApp = () => {
  const idWrapper = document.getElementById('app')
  const {year, month, daysInMonth, day} = getCustomData();
  const monthComponent = monthHeaderTempl(year,month, day);
  const daysComponent = daysWrapper(daysInMonth);







  //write app to index.html
  idWrapper.innerHTML = `${monthComponent} ${daysComponent}`;

  //add Listeners
  addActions()
}
mainApp()
