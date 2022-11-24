import AppHeader from "./components/AppHeader";
import EpisodesView from "./components/AllEpisodesView";
import AllShowsView from "./components/AllShowsView";
import { useState, useEffect } from "react";
import { IShow } from "./AllShowsInterface";

function App(): JSX.Element {
  const [allShows, setAllShows] = useState<IShow[] | []>([]);
  const [isHome, setIsHome] = useState<boolean>(true);
  const [showID, setShowID] = useState<number>(1);

  useEffect(() => {
    const fetchAllShows = async () => {
      const response = await fetch("https://api.tvmaze.com/shows?page=1");
      const jsonBody = await response.json();
      setAllShows(jsonBody);
    };
    fetchAllShows();
  }, []);

  return (
    <>
      <AppHeader />
      {isHome ? (
        <AllShowsView
          allShows={allShows}
          setIsHome={setIsHome}
          showID={showID}
          setShowID={setShowID}
        />
      ) : (
        <EpisodesView
          allShows={allShows}
          showID={showID}
          setShowID={setShowID}
          setIsHome={setIsHome}
        />
      )}
    </>
  );
}

export default App;
