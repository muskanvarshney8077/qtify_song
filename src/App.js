import NavBar from "./component/navBar/navBar";
import HeroSection from "./component/heroSection/heroSection";
import Card from "./component/card/card";
import { fetchTopAlbums } from "./api/api";
import { useEffect, useState } from "react";
function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
    console.log(data);
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <div>
      <NavBar />
      <HeroSection
        content1="100 Thousand Songs , ad-free"
        content2=" Over thousands podcast episodes"
      />
      {topAlbumData.map((ele) => (
        <Card data={ele} key={ele.id} type="album" />
      ))}
    </div>
  );
}

export default App;
