import NavBar from "./component/navBar/navBar";
import HeroSection from "./component/heroSection/heroSection";
import Section from "./component/section/section";
import styles from "./app.module.css";
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
    <>
      <NavBar />
      <HeroSection
        content1="100 Thousand Songs , ad-free"
        content2=" Over thousands podcast episodes"
      />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>
    </>
  );
}

export default App;
