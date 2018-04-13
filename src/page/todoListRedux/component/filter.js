import React, { Component } from "react";
import { connect } from "react-redux";
import { changeShowType } from "../store/actions";
import styles from "../static/style.css"

class Filter extends Component {
    render() {
        const filter = ["All", "WillDo", "Did"]
        const { dispatch, showType } = this.props
        // console.log(this.props)
        return (
            <div className={styles.choose}>
                <span>showType:</span>
                <ul className={styles.todoList}>
                    {
                        filter.map((item, index) => {
                            if (item === showType) {
                                return <li key={`filter${index}`}
                                    className={styles.type}
                                    onClick={() => {
                                        dispatch(changeShowType(item))
                                    }}
                                >{item}</li>
                            }else{
                                return <li key={`filter${index}`}
                                onClick={() => {
                                    dispatch(changeShowType(item))
                                }}
                            >{item}</li>
                            }

                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(function (state) {
    return state
})(Filter)