
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducer/index.js";
import thunk from 'redux-thunk';


export default function configureStore() {
  const enhancer = compose(applyMiddleware(thunk));
  const store = createStore(reducers, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("../reducer/index.js").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
