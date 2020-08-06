import { monthHeaderTempl, daysTempl } from "./common/templates.js";
import { getDaysWrap } from './common/utils.js';
import { addActions } from  './common/actions.js';
import { EventObserver, CustomData } from "./common/classes.js";

const observer = new EventObserver();
const dataObject = new CustomData();

const daysWrapper = (days) => {
  const daysWrap = getDaysWrap(days);
  return daysTempl(daysWrap)
}

const renderApp = (data, root) => {
  const {getYear, getMonth, daysInMonth, getDay} = dataObject;

  const monthComponent = monthHeaderTempl(getYear,getMonth, getDay);
  const daysComponent = daysWrapper(daysInMonth);
  root.innerHTML = `${monthComponent} ${daysComponent}`;

  addActions(observer, dataObject)
}

const mainApp = () => {
  const idWrapper = document.getElementById('app');

  observer.subscribe(()=>{
    renderApp(dataObject,idWrapper)
  })

  renderApp(dataObject,idWrapper)
}

mainApp()


/*
  TODO @Vlad
    * add class to current day;
    * state management?


 */
