//WHY DO WE NEED TO USE .bind() ?
// const obj = {
//     name: 'Yoav',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);

// console.log(getName());

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleSetOption = this.handleSetOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    };
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState((prevState) => (options));
            } 
        } catch(e) {
            
        }
        
        
    };
    componentDidUpdate(preProp, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
            console.log('saving data');
        }
    };
    componentWillUnmount(){
        console.log('componentWillUnmount');
    };
    handleDeleteOptions() {
         this.setState(() => ({options: []}));
    };

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
           options: prevState.options.filter((option) => {
            return optionToRemove !== option;
          })
       }))
    }
      
    handleSetOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    handlePick(){
        var randomNum = Math.floor(Math.random() * this.state.options.length);
        var pick = this.state.options[randomNum];
        alert(pick);
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
          <div>
            <Header subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length > 0} options={this.state.options} handlePick={this.handlePick}/>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
            <AddOption options={this.state.options} handleSetOption={this.handleSetOption} />
          </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    )
}

const Options = (props) => {
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                 <ul>
                    {props.options.length < 1 && <li>Please add an option to get started!</li>}
                    {props.options.map((option) => {
                        return <Option key={option} option={option} handleDeleteOption={props.handleDeleteOption}/>
                    })}
                </ul>
            </div>
           
        );
    }


const Option = (props) => {
    return (
        <li>
            <span>{props.option}</span>
            <button 
            onClick={(e) => {props.handleDeleteOption(props.option)}}>
            remove
            </button>
        </li>
    )
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleSetOption(option);
        this.setState(() => ({error}));
        if(!error) event.target.elements.option.value = '';
    }
    render(){
        return (
           <div> 
                {this.state.error && <p>{this.state.error}</p>}
                <form action="" onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp options={['Option one', 'Option two']} />, document.getElementById('app'));