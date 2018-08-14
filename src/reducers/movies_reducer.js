// const action = {
// 	type:"MOVIES_LIST",
// 	payload : [
// 	    {id:1,name:"POKIRI"},
// 	    {id:2,name:"Athadu"}
// 	]
// }

// const  state=0;

export default function(state={},action){
    switch(action.type){
        case 'MOVIES_LIST':
           return {...state,movies:action.payload}
        case 'DIR_LIST':
           return {...state,directors:action.payload}
        
        default:
           return state
    }
}