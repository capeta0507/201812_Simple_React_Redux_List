import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

const initialState = {
  items:[
          {text:"買牛奶",key:1},
          {text:"玩賽車",key:2}
          ]
};

function reducer(state = initialState,action){
  switch(action.type){
    case "ADD_LIST":
      let newArray = state.items.concat(action.item);
      // newArray.push(action.item);  // 千萬千萬不要使用push
      console.log("new Array push ",newArray);
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

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <TodoList/>  
  </Provider>
  
)
  
        


ReactDOM.render(
    <App />
    , document.getElementById('root')
);

