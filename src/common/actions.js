import {DAY_ITEM_CLASS_NAME} from "./constants.js";

const inputEventListener = (event, parent, store) => {
  const {target:{value},keyCode} = event;

  if(keyCode === 13 && !!parent && !!value.length) {
    const item = document.createElement('li');
    const key = parent.closest(`.${DAY_ITEM_CLASS_NAME}`).attributes[1].value
    const newItem = {
      key,
      value
    }
    store.setNewItem(newItem)
    parent.appendChild(item)

    item.textContent = value;
  }
}

const addDaysEventsListener = store => {
  const calendarWrapper = document.getElementsByClassName('days__wrapper')[0];

  calendarWrapper.addEventListener('click', ({target})=>{
    if(target.classList.contains(DAY_ITEM_CLASS_NAME) || target.nodeName === 'INPUT'){
      target.classList.toggle('details')
    }else{
      target.closest(`.${DAY_ITEM_CLASS_NAME}`).classList.toggle('details')
    }

    const list = target.getElementsByClassName( 'day__item-todo')[0];
    target.addEventListener('keyup',(e)=>{
      inputEventListener(e, list, store)
    })
  })
}

const addNavEventListener = (observer, dataObject) => {
    const nav = document.getElementsByClassName('calendar__header')[0];
    nav.addEventListener('click', e => {
      const classList = e.target.classList;
      if(classList.contains('nav')){
        const direction = classList.contains('prev') ? 'prev' : 'next';

        if(direction === 'prev'){
          dataObject.changeToPrevMonth()
        }else {
          dataObject.changeToNextMonth()
        }
        observer.broadcast('rerender')
      }
    })
}

export const addActions = (observer, dataObject, store) => {
  addDaysEventsListener(store)
  addNavEventListener(observer, dataObject)
}
