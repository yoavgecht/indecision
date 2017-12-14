import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
           options: prevState.options.filter((option) => {
            return optionToRemove !== option;
          })
       }))
    }
    handleDeleteOptions = () => {
         this.setState(() => ({options: []}));
    };
    handleSetOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    handlePick = () => {
        var randomNum = Math.floor(Math.random() * this.state.options.length);
        var pick = this.state.options[randomNum];
        this.setState(() =>({selectedOption: pick}));
    }

    closeModal = () => {
       this.setState(() =>({selectedOption: undefined}));
    }

    componentDidMount = () => {
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
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
          <div>
            <Header subtitle={subtitle}/>
            <div className="container">
                <Action hasOptions={this.state.options.length > 0} options={this.state.options} handlePick={this.handlePick}/>
                <div className="widget">
                    <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                    <AddOption options={this.state.options} handleSetOption={this.handleSetOption} />
                </div> 
            </div>
            <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal}/>
          </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}



//WHY DO WE NEED TO USE .bind() ?
// const obj = {
//     name: 'Yoav',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);

// console.log(getName());