class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: true
        }; 
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !this.state.visibility,
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Detils' : 'Show Details'}</button>
                {this.state.visibility && <p>Hey. these are some details you can now see!</p>}
            </div> 
        ) 
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app')); 