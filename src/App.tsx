import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './context/AppContext';
import Viewport from './components/Viewport';

function App() {
  return (
    <div className='App d-flex justify-content-center'>
      <AppProvider>
        <Viewport />
      </AppProvider>
    </div>
  );
}

export default App;
