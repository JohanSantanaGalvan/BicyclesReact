import './App.css';
import HelloWorld from './pages/helloWorld';
import Main from './pages/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/helloWorld" element={<HelloWorld/>}></Route>
      <Route path="/helloWorld" element={<HelloWorld/>}></Route>
      <Route path="/" element={<Main/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
