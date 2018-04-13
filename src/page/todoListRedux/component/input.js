import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addTodoAction,increment } from "../store/actions";
import "../static/style.css"


class Input extends Component {

    render() {
        // console.log(this.props)
        const { dispatch,id} = this.props 
        return (
            <Fragment>
                <input ref={(el) => this.todoEl = el} placeholder="add a new thing" />
                <button onClick={() => {
                    let text=this.todoEl.value
                    dispatch(addTodoAction({id,text}))
                    dispatch(increment())
                    this.todoEl.value = ""
                }}>AddThing</button>
            </Fragment>
        )
    }
}

export default connect(
    function(initdata){
    return initdata
}
)(Input)