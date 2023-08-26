import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './components/Select';
import BAbutton from './components/BAbutton';
import BATable from './components/BATable';
import BACard from './components/BACard';

function App() {

  let data = [
    {
      name: 'abc',
      id: 1,
      city: 'karachi'
    },
    {
      name: 'xyz',
      id: 2,
      city: 'lahore'
    },
  ]

  function del() {
    alert('DELETE')

  }
  function add() {
    alert('ADD');
  }
  return (
    <div className="App">

      <h1>Select Component</h1>
      <Select getValue={(a: string) => { console.log(a) }} label='GENDER : ' options={[
        { displayName: 'Male', value: 'male' },
        { displayName: 'Female', value: 'female' }
      ]} />

      <br /> <h1>Button Component</h1>

      <BAbutton buttonClick={del} value='Delete' />
      <BAbutton buttonClick={add} value='Add' />

      <br /> <h1>TABLE Component</h1>

      <BATable cols={[{
        heading: 'ID',
        key: 'id'
      },
      {
        heading: 'NAME',
        key: 'name'
      },
      {
        heading: 'CITY',
        key: 'city'
      },
      ]} sourceData={data} />

<br /> <h1>CARD Component</h1>

      {data.map((x, i) => (

        <BACard id={x.id} name={x.name} city={x.city} />
      ))}



    </div>
  );
}

export default App;
