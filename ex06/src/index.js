import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Counter/App.css';
import './Todo/TodoList.css';
import Counter from './Counter/Counter';
import TodoList from './Todo/TodoList'
import { createStore } from 'redux';
import { Provider} from 'react-redux';
// import App from './App';

// 建立state
const initialState = {
    count: 0,
    items:[
        {text:"買牛奶",key:1},
        {text:"玩賽車",key:2}
    ]
};
// 設定發號施令reducer，action為動作
function reducer(state = initialState,action){
    // console.log(action);
    // 記住return 內要加上(...state)，擴散開後再執行，否則會有衝突
    switch(action.type){
        case "INCREMENT":
            return{
                ...state,
                count:state.count + 1
            };
        case "DECREMENT":
            return{
                ...state,
                count:state.count - 1
            };

        case "ADD_LIST":
            let newArray = state.items.concat(action.item);
            // newArray.push(action.item);  // 千萬千萬不要使用push
            // console.log("new Array push ",newArray);
            return{
                ...state,
                items:newArray
            };

        case "DELETE_LIST":
            let newState = state.items.filter((item) => (item.key !== action.key))
            return{
                ...state,
                items:newState
            };
        
        default:
            return state;
    }
}
// 設定store
const store = createStore(reducer);
// dispatch為執行者
// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"DECREMENT"});

const App = () => (
    <Provider store={store}>
        <Counter/>
        <hr/>
        <TodoList />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));


