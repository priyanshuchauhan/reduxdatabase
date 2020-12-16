import jsonfile from 'jsonfile';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import delay from 'lodash/delay';

const dbFile = './db.json';

const persistState = (state) => {
  const appendConfig = {flag: 'a', spaces: 2}
  const readfileResp = jsonfile.readFile(dbFile, (err, obj) => {
    if (err) {
      console.error('Error reading file');
      return;
    }
    const isStateSame = JSON.stringify(obj) === JSON.stringify(state);

    if (!isStateSame) {
      jsonfile.writeFile(dbFile, state, {spaces: 2}, err => {
        if (err) {
          console.error('Error writing file');
          return console.error(err);
        }
        console.log("The file was saved!");
      });
    }
  })
}

let foo;

const loadState = () => {
  const readfileResp = jsonfile.readFile(dbFile, (err, obj) => {
    if (err) {
      console.error('Error reading file');
      return;
    }
    console.log('##obj', obj);
    // foo = {...obj};
    foo = obj;
    // const isStateSame = JSON.stringify(obj) === JSON.stringify(state);
  })
  return foo;
}
loadState()
console.log('##loadState', foo);

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
store.subscribe(throttle(() => {
  const state = store.getState();
  // console.log('subscribe', state);
  persistState(state);
}, 2000));

export default store;
