import jsonfile from 'jsonfile';
import throttle from 'lodash/throttle';
import delay from 'lodash/delay';

const dbFile = './db.json';

const saveJSON = (key, item) => {
  const appendConfig = {flag: 'a', spaces: 2}
  const readfileResp = jsonfile.readFile(dbFile, (err, obj) => {
    if (err) {
      console.error('Error reading file');
      return;
    }
    // const isStateSame = JSON.stringify(obj) === JSON.stringify(state);
    let state = {};
    state[key] = item;

    jsonfile.writeFile(dbFile, state, {spaces: 2}, err => {
      if (err) {
        console.error('Error writing file');
        return console.error(err);
      }
      console.log("The file was saved!");
    });
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

export default function storage(type) {
// function storageOld(type) {
  return {
    getItem: (key) => {
      console.log('##getItem key', key)
      return new Promise((resolve, reject) => {
        resolve(loadJSON(key));
        // resolve(storage.getItem(key))
      })
    },
    setItem: (key, item) => {
      console.log('##setItem key', key)
      console.log('##item', item)
      console.log('##item.count', item.count)
      return new Promise((resolve, reject) => {
        resolve(saveJSON(key, item))
        // resolve(storage.setItem(key, item))
      })
    },
    removeItem: (key) => {
      return new Promise((resolve, reject) => {
        resolve(storage.removeItem(key))
      })
    },
  }
}

//export default function storage(type) {
function storageFoo(type) {
  console.log('##type', type)
  return {
    getItem: (key) => {
      return new Promise((resolve, reject) => {
        try {
          const storedValue = 'hello'
          process.nextTick(() => resolve(storedValue))
        } catch (e) {
          reject(e)
        }
      })
    },
  
    setItem: (key, value) => {
      return new Promise((resolve, reject) => {
        try {
          process.nextTick(() => resolve())
        } catch (e) {
          reject(e)
        }
      })
    },
  
    removeItem: (string) => {
      return new Promise((resolve, reject) => {
        try {
          process.nextTick(() => resolve())
        } catch (e) {
          reject(e)
        }
      })
    },
  
    getAllKeys () {
      return new Promise((resolve, reject) => {
        try {
          let keys = []
          const data = [];
          for (let i = 0; i < data.length; i++) {
            // keys.push(this.localStorage.key(i))
          }
          process.nextTick(() => resolve(keys))
        } catch (e) {
          reject(e)
        }
      })
    }
  }
}