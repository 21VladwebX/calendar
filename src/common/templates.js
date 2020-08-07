export const monthHeaderTempl = (year,month) => `
<div class="calendar__header">
  <div class="nav prev">Previous month</div>
  <div class="mount__header">${year}/${month}</div>
  <div class="nav next">Next month</div>
</div>
<div class="calendar__days">
  <ul>
      <li>Monday</li>
      <li>Tuesday</li>
      <li>Wednesday</li>
      <li>Thursday</li>
      <li>Friday</li>
      <li>Saturday</li>
      <li>Sunday</li>
  </ul>
</div>
`

export const daysTempl = children => {
  const wrapper = `<div class="days__wrapper">${children.join()}</div>`
  return wrapper.replace(/,/g, '');
}

export const daysTodosItemsTempl = todos => todos.map(item=> `<li>${item}</li>`)

export const getInputTempl = () => {
  return `<input type="text" /> `
}
