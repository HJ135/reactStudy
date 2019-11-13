import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class MyComponent extends Component{

    static propTypes = {
        name : PropTypes.string
    }

    constructor(props){
        super(props);
        this.state = {
            number : 0
        }
    }
    render(){
        return(
            <div>
            안녕하세요, 제 이름은 {this.props.name} 입니다.
            <p> 저는 {this.state.number} 살 입니다. </p>
            <button onClick = { () => {
                this.setState({
                    number : this.state.number + 1
                })
            }
        }>더하기</button>
            </div>
        )
    }
}

MyComponent.propTypes = {
    name : PropTypes.string

}


export default MyComponent;