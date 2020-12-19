import React, {} from 'react';
import {useSelector} from 'react-redux'
import ProjectPage from './Components/ProjectPage';
import SideBar from './Components/SideBar';
import Inbox from './Components/Inbox'

function App() {
 

  const actual = useSelector(state => state.Actual)

  return (
    <div className="App">
      <SideBar />
      {actual === 'INBOX' ? <Inbox /> : <ProjectPage />}
    </div>
  );
}

export default App