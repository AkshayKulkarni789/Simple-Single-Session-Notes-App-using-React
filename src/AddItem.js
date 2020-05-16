import React,{ Component } from 'react'

class AddItem extends Component{
    state = {
        content: ""
    }
    changeHandler = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.addItem(this.state);
        this.setState({
            content:""
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.changeHandler} placeholder="Add item..." value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddItem;