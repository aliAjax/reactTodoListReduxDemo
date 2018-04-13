export const ADD_TODO = "ADD_TODO";
export const INCREMENT = "INCREMENT";
export const COMPLETED_TODO="COMPLETED_TODO";
export const FILTER_LIST="FILTER_LIST";

export function addTodoAction({id,text}) {
    return {
        type: ADD_TODO,
        text,
        id
    }
}


export function changeCompleted(id){
    return {
        type:COMPLETED_TODO,
        id
    }
}

export function increment(){
    return {
        type:INCREMENT
    }
}

export function changeShowType(item){
    return {
        type:FILTER_LIST,
        item
    }
}