import NavBar from "./component/navBar/navBar";
import HeroSection from "./component/heroSection/heroSection";
import Card from "./component/card/card";
function App() {
  return (
    <div>
      <NavBar />
      <HeroSection
        content1="100 Thousand Songs , ad-free"
        content2=" Over thousands podcast episodes"
      />
      <Card />
    </div>
  );
}

export default App;
