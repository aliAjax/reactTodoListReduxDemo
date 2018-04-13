import { combineReducers } from "redux";

const initdata = {
    todoList: [{
        id: 0,
        text: "HTML",
        completed: true
    }, {
        id: 1,
        text: "CSS",
        completed: false
    }, {
        id: 2,
        text: "JS",
        completed: true
    }, {
        id: 3,
        text: "NodeJs",
        completed: false
    }],
    id:4,
    showType:"All"
}

function todoList(state=initdata.todoList,action){
    // console.log(action)
    let newArr=JSON.parse(JSON.stringify(state))
    if(action.type==="ADD_TODO"){
        newArr.push({
            id:action.id,
            text:action.text,
            completed:false
        })
    }else if(action.type==="COMPLETED_TODO"){
        newArr.map((item)=>{
            if(item.id===action.id){
                item.completed=!item.completed
            }
            return item
        })
    }
    return newArr
}

function id(state=initdata.id,action){
    // console.log(state)
    if(action.type==="INCREMENT"){
        state=state+1
    }
    return state
}

function showType(state=initdata.showType,action){
    if(action.type==="FILTER_LIST"){
        state=action.item
    }
    return state
}

const reducers=combineReducers({
    todoList,id,showType
})
export default reducers;