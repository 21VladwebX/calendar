export const monthHeaderTempl = (year,month,day) => `<div class="mount__header">${year}/${month}/${day}</div>`

export const daysTempl = children => {
  const wrapper = `<div class="days__wrapper">${children.join()}</div>`
  return wrapper.replace(/,/g, '');
}
