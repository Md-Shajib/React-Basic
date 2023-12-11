import './App.css';

function App() {
  var textStyle = {
    color: 'red',
    fontSize: 20,
    padding: 10,
    margin: 2,
    backgroundColor: 'gray'
  }
  var person1 = {
    name: "Md Shajib",
    age: 24
  }
  var person2 = {
    name: "Md Roni",
    age: 23
  }
  const nayoks = [{name: 'Saruk Khan', title: 'Star'}, {name:'Amir Khan', title: 'star'}, {name:'Salman Khan', title:'star'}]
  return (
    <div className="App">
      <header className="App-header">
        <h2>This is first app</h2>
        <h3 style={textStyle}>Name: {person1.name + ", Age: " + person1.age}</h3>
        <h3 style={textStyle}>Name: {person2.name + ", Age: " + person2.age}</h3>
        <Person name="Shakib Khan" title="Nayok"></Person>
        <Person name = {nayoks[0].name} title = {nayoks[0].title}></Person>
      </header>
    </div>
  );
}


function Person(props){
  var style = {
    border: '2px solid green',
    color: 'yellow',
    padding: 10,
    marginBottom: 3,
  }
  return(
    <div>
      <div  style={style}>
        <h2>Name: {props.name}</h2>
        <h4>Title: {props.title}</h4>
      </div>
    </div>
  );
}
export default App;
