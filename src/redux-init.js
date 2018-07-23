import jsonfile from 'jsonfile';
import { createStore } from 'redux';

const dbFile = './db.json';

const persistState = (state) => {
  const appendConfig = {flag: 'a', spaces: 2};
  const readfileResp = jsonfile.readFile(dbFile, (err, obj) => {
    if (err) {
      console.log('Error reading file');
      return;
    }
    const isStateSame = JSON.stringify(obj) === JSON.stringify(state);

    if (isStateSame) {
      jsonfile.writeFile(dbFile, state, {spaces: 2}, err => {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
      });
    }
  })
}

function counter(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state
  }
}

let store = createStore(counter);
store.subscribe(() => {
  console.log(store.getState());
  persistState(store.getState());
})

export default store;
