import "./App.css";
import "./index.css";
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
                <div key={product._id} className="card">
                  <a href={`/product/${product._id}`}>
                    <img
                      className="medium"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                  <div className="card-body">
                    <a href={`/product/${product._id}`}>
                      <h2>{product.name}</h2>
                    </a>
                    {/*make dynamic ratings */}
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div className="price">${product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default App;
