
import { useEffect } from 'react';
import './App.css'

import { useUsers } from './hooks/useUsers';
import { getAllUsers } from './apis/userApi';
import Home from './pages/Home';


function App() {

  const { setUsers } = useUsers();

useEffect(() => {
  async function loadUsers() {
    const users = await getAllUsers();
    setUsers(users);
  }

  loadUsers();
}, []);

  return (
    <Home/>
  )

}

export default App
