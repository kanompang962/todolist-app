import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import List from './components/List';
import Alert from './components/Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [chkEditItem, setChkEditItem] = useState(false);
  const [editId, setEditId] = useState(null);

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
      if (chkEditItem) {
        const result = list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name }
          }
          return item;

        });
        setList(result);
        setName('');
        setChkEditItem(false);
        setEditId(null);
        setAlert({
          show: true,
          msg: 'แก้ไขข้อมูลสำเร็จ',
          type: 'success'
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
    setChkEditItem(true);
    setEditId(id);
    const result = list.find((item) => item.id === id);
    setName(result.title);
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
          <button type="submit">
            {chkEditItem ? 'แก้ไขข้อมูล' : 'เพิ่มข้อมูล'}
          </button>
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
