const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById("challenge-node"));

//////


const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);


//////

const JSX = (
  <div>
    <h2>Welcome to React!</h2> 
    <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);


//////


const MyComponent = function() {
  // change code below this line
  return(
    <div>
      AnyText
    </div>
  );
  // change code above this line
}

/////

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
return(
<div>
<h1>Hello React!</h1>
</div>
);
    // change code above this line
  }
};


////////

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
<ChildComponent/>

        { /* change code above this line */ }
      </div>
    );
  }
};


///////////


const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }
<TypesOfFruit />;
      { /* change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
<Fruits />;
        { /* change code above this line */ }
      </div>
    );
  }
};


/////

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
<Fruits />
<Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));

/////


// change code below this line
class MyComponent extends React.Component 
{
    constructor(props) 
    {
        super(props);
    } 

    render()
    {
    return (<div><h1>My First React Component!</h1></div>);
    }
};

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

//////

const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is:  {props.date}</p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};


//////




