import logo from './logo.svg';
import './App.css';
import { DataPrivider } from './data/dataProvider';
import { Header } from './interface/header';
import { Main } from './interface/main';
 function App() {
  
  
  return (
   <DataPrivider>
    <Header/>
    <Main/>
   </DataPrivider>
  );
}

export default App;
