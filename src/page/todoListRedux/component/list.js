import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import styles from "../static/style.css"
import {changeCompleted} from "../store/actions"

class List extends Component {

    static defaultProps={
        todoList:[],
        changeCompleted:()=>{
            console.log("default")
        }
    }

    render() {
        const {dispatch,showType}=this.props
        let list=this.props.todoList.filter((item)=>{
            if(showType==="All"){
                return item
            }else if(showType==="WillDo"){
                return item.completed===false
            }else if(showType==="Did"){
                return item.completed===true
            }
        })
        return (
                <Fragment>
                    <ul>
                        {
                            list.map((item,index)=>{
                                return <li key={index} 
                                className={styles[item.completed?'active':""]}
                                onClick={()=>{
                                    // console.log(item.id)
                                    dispatch(changeCompleted(item.id))
                                }}
                                >{item.text}</li>
                            })
                        }
                    </ul>
                </Fragment>
        )
    }
}
export default connect(function(state){
    return state
})(List)