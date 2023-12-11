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
  const Products = [{name: 'Photoshop', price: '$200.00'}, {name:'Illustrator', price: '$150.99'}, {name:'Adobe Reader', price:'$10.00'}]
  return (
    <div className="App">
      <header className="App-header">
        <h2>This is first app</h2>
        <h3 style={textStyle}>Name: {person1.name + ", Age: " + person1.age}</h3>
        <h3 style={textStyle}>Name: {person2.name + ", Age: " + person2.age}</h3>
        <Person name="Shakib Khan" title="Nayok"></Person>
        <Person name = {nayoks[0].name} title = {nayoks[0].title}></Person>
        <ProductsCard product = {Products[0]}></ProductsCard>
        <ProductsCard product = {Products[1]}></ProductsCard>
        <ProductsCard product = {Products[2]}></ProductsCard>
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

function ProductsCard(props){
  const productStyle = {
    color: '#000000',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
    </div>
  );
}
export default App;
