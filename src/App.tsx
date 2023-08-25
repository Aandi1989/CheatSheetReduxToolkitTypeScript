import React, { useEffect } from 'react';
import './App.css';
import { useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { useActions } from './hooks/redux';

function App() {
  const { fetchUsers } = useActions();
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);

  useEffect(()=>{
    fetchUsers()
  },[])

  return (
    <div className="App">
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
