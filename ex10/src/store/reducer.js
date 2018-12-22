
// 建立state
const initialState = {
    count: 0
};
// 設定發號施令reducer，action為動作
function reducer(state = initialState,action){
    // console.log(action);
    switch(action.type){
        case "INCREMENT":
            return{
                ...state,
                count:state.count + action.val
            };
        case "DECREMENT":
            return{
                ...state,
                count:state.count - action.val
            };
        
        default:
            return state;
    }
}

export default reducer