import React from "react";

class Question1 extends React.Component {
  render() {
    const title = React.createElement('h3',{},  'Shopping List');
    const listItem1 = React.createElement('li', {},'Milk');
    const listItem2 = React.createElement('li', {}, 'Bread');
    const listItem3 = React.createElement('li', {},'Butter');

    const unorderedList = React.createElement('ul', {}, listItem1, listItem2, listItem3);

    const shoppingList = React.createElement('div',{}, title, unorderedList);

    return shoppingList;
  }
}

export default Question1;