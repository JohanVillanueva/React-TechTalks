import './App.css';
import Header from './components/Header'
import Filters from './components/Filters'
import Results from './components/Results'


const App = () => {
  
  return (
    <div className="App">
      <Header />
      <main>
         <Filters />
         <Results />
      </main>
    </div>
  );
}

export default App;
