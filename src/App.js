
import './App.css';
import React,{useState} from 'react';
import data from './Components/Data/data';
import List from './Components/List/List';
function App() {
  
  const [people,setPeople] = useState(data)
  const clearCard=()=>{
    setPeople([])
  }
  return (
   <main className='myApp'>
     <section className="card">
       <h3>Birthday Reminder</h3>
       <List people={people}/>
       <button type="button" class="btn btn-primary" onClick={clearCard}>Clear All</button>
     </section>
   </main>
  );
}

export default App;
