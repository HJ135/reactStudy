import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        pasword : '', //password로 선언하게 되면 점으로 보인다. 이걸 passwrd 등으로 바꾸면 글자가 그대로 노출됨.
        clicked : false,
        validated : false
    }
    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        });
        this.input.focus();
    }



    render(){
        return(
            <div>
            <input
            ref = {(ref) => this.input = ref}
            type = "password"
            value = {this.state.password}
            onChange = {this.handleChange}
            className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
            
            />
            <button onClick = {this.handleButtonClick} >검증하기</button>
            
            </div>
            
            );
            
        }
    
}

export default ValidationSample;