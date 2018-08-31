const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('http://todomvc.com/examples/angularjs/#/')
  .type('#new-todo', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#r1-0 a.result__a')
//   .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
//   .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })