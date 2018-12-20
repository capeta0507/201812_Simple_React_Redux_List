import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
// import App from './App';

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
// 設定store
const store = createStore(reducer);
// dispatch為執行者
// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"DECREMENT"});

const App = () => (
    <Provider store={store}>
        <Counter/>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));


