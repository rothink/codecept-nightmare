Feature('test-angular');

Scenario("Test of tasks" , (I) => {

    I.amOnPage('http://todomvc.com/examples/angularjs/#/');
    I.wait(1);
    I.click('#new-todo');
    I.moveCursorTo("#new-todo");

    I.fillField("#new-todo", 'Rodrigo');
    I.pressKey(['Enter']);

    I.fillField("#new-todo", 'Brubru');
    I.pressKey(['Enter']);

    I.fillField("#new-todo", 'Cocota');
    I.pressKey(['Enter']);


    I.click('#toggle-all');

    I.wait(1);

    I.click('#clear-completed');


    I.wait(1);
});