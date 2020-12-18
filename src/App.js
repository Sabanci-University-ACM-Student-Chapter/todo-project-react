import React, {} from 'react';
import ProjectPage from './Components/ProjectPage';
import SideBar from './Components/SideBar';

function App() {
  // "count" adında yeni bir state değişkeni tanımlayın.
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <SideBar /> 
      <ProjectPage />
    </div>
  );
}

export default App