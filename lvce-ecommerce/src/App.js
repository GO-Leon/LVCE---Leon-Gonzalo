import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ItemListContainer/ItemListContainer';
import DetailedItem from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ProductList />
      <DetailedItem />
    </div>
  );
}


export default App;
