import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

const initialState = {
    items:[
            {text:"買牛奶",key:1},
            {text:"玩賽車",key:2},
            {key:3,text:"吃水果"},
            {key:4,text:"買便當"},
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
  store.subscribe(()=>{
      console.log("Store state change ",store.getState());
  })
  
ReactDOM.render( <Provider store={store}>
                    <App />
                </Provider> 
                ,document.getElementById('root'));

