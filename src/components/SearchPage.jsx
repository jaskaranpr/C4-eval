import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SearchPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios.get("http://localhost:3001/search/" + id).then((data) => {
      setData(data.data);
    });
  }
  console.log(data);
  return (
    <div
      style={{
        textAlign: "left",
      }}
      id="detailed-result"
    >

      <div className="desc">{data.title}</div>
      <div className="author">{data.description}</div>
      <div className="creation-date">{data.creation_date}</div>
      <div className="explicit"> explicit: {data.explicit}</div>
      <div className="quality"> quality: {data.quality}</div>
    </div>
  );
};
