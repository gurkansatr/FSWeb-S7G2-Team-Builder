import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form'

function App() {
  const [uyeler, setUyeler] = useState([]);
  const [editId, setEditId] = useState(null);
  const handleEdit = (id)=>{
    setEditId(id)
  }
  return (
    <div className="App">
      <Form editId={editId} uyeler={uyeler} setUyeler = {setUyeler}/>
      {uyeler.map((uye) => 
      (
        <div key = {uye.id}>
          <span>
            {uye.firstName + " " + uye.lastName}
          </span>
          <span>
            <button onClick={()=>handleEdit(uye.id)} >
              Düzelt
            </button>
          </span>
          </div>
      ))}
    </div>
  );
}

export default App;
