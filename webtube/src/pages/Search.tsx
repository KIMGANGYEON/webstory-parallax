import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import VideoSearch from "../components/video/VideoSearch";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/api";

const Search = () => {
  const { searchID } = useParams();
  const [videos, setVideos] = useState<any[]>([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVideos([]);
    fetchVideos(searchID);
    setLoading(true);
  }, [searchID]);

  const fetchVideos = (query: any, pageToken = "") => {
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextPageToken(data.nextPageToken);
        setVideos((preVideos) => [...preVideos, ...data.items]);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetchin data");
        setLoading(false);
      });
  };

  const serachPageClass = loading ? "isLoading" : "isLoaded";

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchVideos(searchID, nextPageToken);
    }
  };

  return (
    <Main title="유투브 검색" description="유튜브 검색 결과 페이지입니다.">
      <section id="searchPage" className={serachPageClass}>
        <h2>
          <em>{searchID}</em> 검색결과
        </h2>
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
        <div className="video__more">
          {nextPageToken && <button onClick={handleLoadMore}>more</button>}
        </div>
      </section>
    </Main>
  );
};

export default Search;
