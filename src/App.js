import NavBar from "./components/navBar/navBar/navBar";
import HeroSection from "./components/navBar/heroSection/heroSection";
function App() {
  return (
    <div>
      <NavBar />
      <HeroSection
        content1="100 Thousand Songs , ad-free"
        content2=" Over thousands podcast episodes"
      />
    </div>
  );
}

export default App;
