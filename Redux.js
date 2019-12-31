const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);

/////////

const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line

const currentState = store.getState();

////////


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

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line
switch(action.type)
{
  case 'LOGIN':
  return{authenticated:true}
  case 'LOGOUT':
  return{authenticated:false}
  default:
  return defaultState;
}
  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};


///////////

// change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};


/////////////

// change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};


///////////

