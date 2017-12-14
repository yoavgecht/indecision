console.log('app.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Some subtitle',
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();
    event.target.elements.option.value ? app.options.push(event.target.elements.option.value) : console.log('No options array');
    event.target.elements.option.value = '';
    console.log(app.options);
    renderApp();
}

const onRemoveAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length) ;
    console.log(randomNum);
    const selectedOption = app.options[randomNum];
    console.log(selectedOption);
}

const renderApp = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
        <ol>
           {
               app.options.map((option) =>  <li key={option}> Item {option} </li>)
           }
        </ol>
        <form action="" onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            <button onClick={onRemoveAll}>Remove All</button>
        </form>
    </div>
    );
    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
}

 renderApp();