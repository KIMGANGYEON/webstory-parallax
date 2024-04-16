import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import VideoSearch from "../components/video/VideoSearch";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/api";

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState<any[]>([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVideos([]);
    fetchVideos(searchId);
    setLoading(true);
  }, [searchId]);

  const fetchVideos = (query: any, pageToken = "") => {
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextPageToken(data.nextPageToken);
        setVideos((preVideos) => [...preVideos, ...data.items]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetchin data");
        setLoading(false);
      });
  };

  const serachPageClass = loading ? "isLoading" : "isLoaded";

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchVideos(searchId, nextPageToken);
    }
  };

  return (
    <Main title="유투브 검색" description="유튜브 검색 결과 페이지입니다.">
      <section id="searchPage" className={serachPageClass}>
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
