import Header from "./components/Header";
import Card from "./components/Cards";
import { data } from "./mockdata";


function App() {
  return (
    <div className="container">
      <Header/>
      <div className="product-section">
      {data.map(item=>(
          <Card 
          img={item.image} 
          title={item.title.slice(0, 45)} 
          description={item.description.slice(0,15)} 
          price={item.price} 
          />
        ))}
      </div>  
    </div>
  );
}

export default App;


