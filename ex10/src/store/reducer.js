
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
                count:state.count + 1
            };
        case "DECREMENT":
            return{
                count:state.count - 1
            };
        
        default:
            return state;
    }
}

export default reducer