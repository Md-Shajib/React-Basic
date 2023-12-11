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
  return (
    <div className="App">
      <header className="App-header">
        <h2>This is first app</h2>
        <h3 style={textStyle}>Name: {person1.name + ", Age: " + person1.age}</h3>
        <h3 style={textStyle}>Name: {person2.name + ", Age: " + person2.age}</h3>
      </header>
    </div>
  );
}

export default App;
