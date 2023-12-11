import './App.css';
import React, { useEffect, useState } from 'react';

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
  const nayoks = [
    {name: 'Saruk Khan', title: 'Star'},
    {name:'Amir Khan', title: 'star'},
    {name:'Salman Khan', title:'star'},
    {name:'Shuvo'}
  ]
  const Products = [
    {name: 'Photoshop', price: '$200.00'},
    {name:'Illustrator', price: '$150.99'},
    {name:'Adobe Reader', price:'$10.00'},
    {name:'Visual Studio', price:'$1000.00'},
  ]
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

        <p>Dynamic - Using MAP</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok.name}</li>)
          }
        </ul>

        {
          Products.map(productObj => <ProductsCard product={productObj}></ProductsCard>)
        }
      </header>
      <Counter></Counter>
      <Users></Users>
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

function Counter(){
  const [count, setCount] = useState(0)
  const incrementer = () => {setCount(count + 1)};
  // const decrementer = () => {
  //   if(count > 0){
  //     const Newcount = count - 1;
  //     setCount(Newcount);
  //   }
  // }
  return(
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={incrementer}>Increase</button>
      <button onClick={()=>{if(count>0) setCount(count-1)}}>Decrease</button>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

export default App;
