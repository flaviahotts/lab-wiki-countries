import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList />
          <CountryDetails />
        </div>
      </div>
    </div>
  );
}
export default App;
