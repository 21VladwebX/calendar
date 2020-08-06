export const monthHeaderTempl = (year,month) => `
<div class="calendar__header">
  <div class="nav prev">Previous month</div>
  <div class="mount__header">${year}/${month}</div>
  <div class="nav next">Next month</div>
</div>
`

export const daysTempl = children => {
  const wrapper = `<div class="days__wrapper">${children.join()}</div>`
  return wrapper.replace(/,/g, '');
}
