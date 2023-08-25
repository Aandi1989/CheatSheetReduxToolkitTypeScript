import React, { useEffect } from 'react';
import './App.css';
import { useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { useActions } from './hooks/redux';

function App() {
  const { fetchUsers, usersWorks } = useActions();
  const { users, isLoading, error, itWorks  } = useAppSelector(state => state.userReducer);

  const userWorksHandler = () => usersWorks();
  console.log(itWorks)
 
  useEffect(()=>{
    fetchUsers()
  },[])

  return (
    <div className="App">
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
      <button onClick={userWorksHandler}>UsersWorks</button>
    </div>
    
  );
}

export default App;
