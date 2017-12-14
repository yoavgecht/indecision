class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        console.log('componentDidMount');
        const count = parseInt(localStorage.getItem('count'));
        if(!isNaN(count)){
            this.setState(() => ({count}));
        } 
    }
    componentDidUpdate(prevProp, prevState) {
       if(this.state.count !== prevState.count){
          localStorage.setItem('count', this.state.count);
          console.log('saving data');
       }
    };
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
           this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne} className="button">+1</button>
                <button onClick={this.handleMinusOne} className="button">-1</button>
                <button onClick={this.handleReset} className="button">Reset</button>
            </div>
        );
    }
}




const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//      count = 0;
//      renderCounterApp();
// };


// const renderCounterApp = () => {
//     const template2 = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne} className="button">+1</button>
//         <button onClick={minusOne} className="button">-1</button>
//         <button onClick={reset} className="button">Reset</button>
//     </div>
// );
//     ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();