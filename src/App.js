import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        coverImg={item.coverImg}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
