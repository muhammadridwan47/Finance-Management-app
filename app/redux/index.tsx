import {createStore} from 'redux'; 

const initialState = {
    id: '',
    type: '',
    category: '',
    amount: '',
    date: '',
    desc: ''
}

const reducer = (state = initialState, action) => {
  if (action.type === 'TRANSACTION') {
    return {
      ...state,
      data: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
