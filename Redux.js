const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);

/////////


const action = {
  type: 'LOGIN'
}
// Define an action creator here:


/////////

const action = {
  type: 'LOGIN'
}
// Define an action creator here:

function actionCreator()
{
  return action;
}


///////////


const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());

//////////

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
    if(action.type === 'LOGIN')
    {
      return {
      login: true
      } 
    }
    else
    {
      return state;
    }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};


/////////

