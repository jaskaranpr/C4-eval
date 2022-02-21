import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  getResults,
  sortByTitleAsc,
  sortByTitleDec,
  sortByQualityAsc,
  sortByDateAsc,
  sortByDateDec,
  getExplicit,
  sortByQualityDec,
} from "../store/action";
import { useSelector, useDispatch } from "react-redux";
import { Navigation } from "./Navigation";

const SearchRes = () => {
  const { res } = useParams();
  const Navigate = useNavigate();
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios.get("http://localhost:3001/search").then((data) => {
      dispatch(getResults({ data: data.data, res: res.toLowerCase() }));
    });
  }
  function getDate(timestamp) {
    let date = new Date(timestamp * 1000);
    console.log(date);
    return <span>{date}</span>;
  }
  return (
    <div>
      <Navigation getData={getData} />
      <div className="sorting">
        <button onClick={() => dispatch(sortByTitleAsc())}>
          sort-alphabetically{" "}
        </button>
        <button onClick={() => dispatch(sortByTitleDec())}>
          sort-alphabetically-desc
        </button>
        <button onClick={() => dispatch(sortByDateAsc())}>sort-by-date</button>
        <button onClick={() => dispatch(sortByDateDec())}>
          sort-by-date-desc
        </button>
        <button onClick={() => dispatch(sortByQualityAsc())}>
          sort-by-quality
        </button>
        <button onClick={() => dispatch(sortByQualityDec())}>
          sort-by-quality-desc
        </button>
        <button onClick={() => dispatch(getExplicit())}>filter-explicit</button>
      </div>
      <div className="search-result">
        {data.map((s) => {
          return (
            <div
              className="result"
              style={{
                textAlign: "left",
                lineHeight: "15px",
                margin: "20px",
              }}
              key={s.id}
            >
              <a
                style={{
                  color: "blue",
                  cursor: "pointer",
                }}
              >
                {s.url}
              </a>
              <h1
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  Navigate("/page/" + s.id);
                }}
              >
                {s.title}
              </h1>
              <h2>{s.author}</h2>
              <p>{s.description}</p>
              <span>Quality:{s.quality}</span>
              <br />
              <span>Explicit:{s.explicit ? "Yes" : "No"}</span>

              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchRes;
