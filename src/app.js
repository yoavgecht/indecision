import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Layout = () => {
    return (
        <div>
            <p>Header</p>
            <p>Footer</p>
        </div>
    )
}


ReactDOM.render(<IndecisionApp options={['Option one', 'Option two']} />, document.getElementById('app'));


// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting(){
//         return `Hi. My name is ${this.name}`;
//     }
// };

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting());
// const greetings = oldSyntax.getGreeting;
// console.log(greetings());

// // -------------

// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}`;
//     }
// }
// const newSyntax = new NewSyntax();
// console.log(newSyntax);
// const greeting = newSyntax.getGreeting;
// console.log('New Syntax - ', greeting());