import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import List from './components/List';
import Alert from './components/Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({
        show: true,
        msg: 'ป้อนข้อมูล',
        type: 'error'
      });
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      }
      setList([...list, newItem]);
      setName('');
      setAlert({
        show: true,
        msg: 'บันทึกข้อมูลสำเร็จ',
        type: 'success'
      });
    }
  };

  const removeItem = (id) => {
    console.log('delete ', id);
    const result = list.filter((item) => item.id !== id)
    setList(result);
    setAlert({
      show: true,
      msg: 'ลบข้อมูลสำเร็จ',
      type: 'error',
    })
  };

  const editItem = (id) => {
    console.log('edit ', id);
  };

  return (
    <div className="container">
      <h1>TodoList App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list} />}
      <form className='form-group' onSubmit={handleSubmit}>
        <div className='form-control'>
          <input type="text"
            onChange={(e) => setName(e.target.value)}
            value={name} />
          <button type="submit">เพิมข้อมูล</button>
        </div>
      </form>
      <div className='list-container'>
        {list && list.map((item, index) => (
          <List key={index} item={item} removeItem={removeItem} editItem={editItem} />
        ))}

      </div>
    </div>
  );
}

export default App;
