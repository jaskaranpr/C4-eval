import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBox = ({ btn, getData }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handelSearch = () => {
    btn && getData();
    navigate("/search/" + query.toLowerCase());
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} action="">
      <input
        className="search-box"
        onKeyPress={(e) => {
          e.key === "Enter" && handelSearch();
        }}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      
        <button className="search" onClick={handelSearch}>
          search
        </button>
      
    </form>
  );
};
