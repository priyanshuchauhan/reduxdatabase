import jsonfile from 'jsonfile';
import _map from 'lodash/map';

const god = indu;
const times = {
  humanTime: 1000,
  societyTime: 10000
}

const cast = {
  ruler: () => {},
  monk: () => {},
  warrier: () => {},
  worker: () => {},
  trader: () => {}
}

const memory = () => {

}

const nature = {
  conscious: () => {
    // access memory and senses, i.e new data and old data

  },
  unconscious: () => {},
  rest: () => {
    // Delete unused data
  },
  turiya: (yoga) => {
    // die
    return god;
  }
}

const qualitites = {ego, jeasous, love};



const human = (castType) => {
  const type = cast[castType];
  const natureType = nature(type);
}

const family = () => {
  const humans = [new human(), new human()]
  setTimeout( () => {
    _map(familes, familyInstance => {

    })
  }, times.humanTime);

  return humans; 
}

// society share common consciousness
const society = () => {
  let familes = [new family(), new family()]
  setTimeout( () => {
    familes = _map(familes, familyInstance => {
        return familyInstance;
    })
  }, times.societyTime);

  return familes; 
}

// TODO: society list that war, culture clashes, family and human moves to one another etc

const indu = new society();

export default indu;
