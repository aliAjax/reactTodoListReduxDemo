import React, { Component, Fragment } from "react";
import Filter from "./component/filter";
import Input from "./component/input";
import List from "./component/list"

export default class App extends Component {
    constructor(props){
        super(props)
        // 定义数据结构
        this.state={
            addThing:[
                {
                    name:"Html",
                    type:true,
                    id:0
                },
                {
                    name:"Css",
                    type:false,
                    id:1
                },{
                    name:"JS",
                    type:true,
                    id:2
                },{
                    name:"NodeJs",
                    type:false,
                    id:3
                }
            ],
            type:"All"
        }
    }

    // 改变具体事项是否完成的方法
    completedEvent(data){
        let addThing=JSON.parse(JSON.stringify(this.state.addThing))
        addThing[data].type=!addThing[data].type
        this.setState({
            addThing
        })
    }

    // 改变现实类型的方法
    filterEvent(data){
        this.setState({
            type:data
        })
        // switch (data) {
        //     case "WillDo":
        //     let addThingW=this.state.addThing.filter((item)=>{return item.type===false})
        //     console.log(addThingW)
        //     this.setState({
        //         addThing:addThingW
        //     })
        //     break;
        //     case "Did":
        //     let addThingD=this.state.addThing.filter((item)=>{return item.type===true})
        //     console.log(addThingD)
        //     this.setState({
        //         addThing:addThingD
        //     })
        //     break;
        //     case "All":
        //     this.setState({
        //     })
        //     break;
        //     default:
        //     this.setState({})
        //     break;
        // }
        
    }

    // 增加待办事项的方法
    parrentEvent(data){
        let addThing=this.state.addThing
        let newThing={
            name:data,
            type:false,
            id:addThing.length
        }
        addThing.push(newThing)
        this.setState({
            addThing
        })
    }

    render() {
        let addThing=this.state.addThing
        let show=this.state.type
        // console.log(show)
        return (
            <Fragment> 
                <Input parrent={(data)=>this.parrentEvent(data)} />
                <List addThing={addThing} completed={(data)=>this.completedEvent(data)} showType={show}/>
                <Filter filter={(data)=>this.filterEvent(data)}/>
            </Fragment>
        )
    }
}