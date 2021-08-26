import "./App.css";
import "./index.css";
import Product from "./components/Product";
import data from "./data";

//need to section app into components

function App() {
  return (
    <body>
      <div className="grid-container">

        <header className="row">
          <div>
            <a className="brand" href="/">
              Total physio
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
      
        <main>
          <div>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default App;
