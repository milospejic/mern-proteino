
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">proteINo</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slang" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
