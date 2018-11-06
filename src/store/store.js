import { createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
let store = null;
if(process.env.NODE_ENV === 'production') {
   store = createStore(reducer, applyMiddleware(sagaMiddleware))
} else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
    store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
}
// 执行saga
sagaMiddleware.run(sagas);
export default store;