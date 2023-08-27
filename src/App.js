import NavBar from "./component/navBar/navBar";
import HeroSection from "./component/heroSection/heroSection";
import Section from "./component/section/section";
import styles from "./app.module.css";
import { fetchTopAlbums, fetchSongs, fetchNewAlbums } from "./api/api";
import React, { useEffect, useState } from "react";
import BasicAccordion from "./component/accordian/accordian";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const [filteredDataValues, setFilterDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = React.useState(0);
  const [songsData, setSongsData] = useState([]);

  const handleToggle = () => {
    console.log("clicked");
    setToggle(!toggle);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongsData = () => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };
  useEffect(() => {
    generateSongsData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const generateTopAlbumData = async () => {
    try {
      const res = await fetchTopAlbums();
      setTopAlbumData(res);
    } catch (err) {
      console.log(err);
    }
  };
  const generateNewAlbumData = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewAlbumData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilterDataValues(res);
    } catch (err) {
      console.log(err);
    }
  };
  const filteredData = (val) => {
    setFilterDataValues(val);
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);

  return (
    <>
      <NavBar data={[...newAlbumData, ...topAlbumData]} />
      <HeroSection
        content1="100 Thousand Songs , ad-free"
        content2=" Over thousands podcast episodes"
      />
      <div className={styles.sectionWrapper}>
        <Section
          type="album"
          title="Top Albums"
          data={topAlbumData}
          filteredDataValues={topAlbumData}
        />
        <Section
          type="album"
          title="New Albums"
          data={newAlbumData}
          filteredDataValues={newAlbumData}
        />
        <Section
          type="songs"
          title="Songs"
          data={songsData}
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
      </div>
      <BasicAccordion />
    </>
  );
}

export default App;
