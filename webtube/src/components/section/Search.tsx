import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setSearchKeyword("");
  }, [setSearchKeyword]);
  const handleSearch = () => {
    if (searchKeyword) {
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword("");
    }
  };
  return (
    <div id="search">
      <div className="search__inner">
        <label htmlFor="serchInput">
          <span className="ir">검색</span>
        </label>
        <input
          type="search"
          name="serchInput"
          id="serchInput"
          autoComplete="off"
          className="search__input"
          placeholder="검색어를 입력하세요"
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Search;
