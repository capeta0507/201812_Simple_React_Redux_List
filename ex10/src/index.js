import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import reducer from './store/reducer';
// import App from './App';

// 設定store，reducer從store裡的資料夾引進js檔
const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Counter/>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));


