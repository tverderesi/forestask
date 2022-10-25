import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardListContext from './context/CardListContext';
import { CardListProvider } from './context/CardListContext';
import { useContext } from 'react';
import { ViewPort } from './components/ViewPort';

function App() {
  return <CardListProvider>{ViewPort()}</CardListProvider>;
}

export default App;
