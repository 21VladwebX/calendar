import { monthHeaderTempl, daysTempl } from "./common/templates.js";
import { getDaysWrap } from './common/utils.js';
import { addActions } from  './common/actions.js';
import { EventObserver, CustomData, Store } from "./common/classes.js";

const observer = new EventObserver();
const dataObject = new CustomData();
const store = new Store();

const daysWrapper = getDaysDetails => {
  const daysWrap = getDaysWrap(getDaysDetails, store.getItem.bind(store));
  return daysTempl(daysWrap)
}

const renderApp = (data, root) => {
  const {getYear, getMonth, getDaysDetails} = dataObject;

  const monthComponent = monthHeaderTempl(getYear,getMonth);
  const daysComponent = daysWrapper(getDaysDetails);
  //Render or rerender app
  root.innerHTML = `${monthComponent} ${daysComponent}`;

  addActions(observer, dataObject, store)
}

const mainApp = () => {
  //initial and first step for app
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
