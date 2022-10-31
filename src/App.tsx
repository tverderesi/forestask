import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CardListProvider } from './context/CardListContext';
import { ViewPort } from './components/ViewPort';

function App() {
  const style = {
    backgroundImage: `url("./media/4.png")`,
    height: '100vh',
    margin: '0',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
  };

  return (
    <div
      className='App d-flex justify-content-center'
      style={style}
    >
      <CardListProvider>
        <ViewPort />
      </CardListProvider>
    </div>
  );
}

export default App;
