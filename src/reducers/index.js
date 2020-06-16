const initState = {
  number: 0
};

const incrementReducer = (state = initState, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      state.number += 1;
      return {...state};
      break;
    }
    default: return state;
  }
};

export default incrementReducer;