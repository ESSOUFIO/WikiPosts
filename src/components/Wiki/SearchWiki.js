import "./SearchWiki.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoDiffAdded } from "react-icons/go";
import { useFirebase } from "../../firebase/useFirebase";
import { UI_Context } from "../../Context/UIContext";

const SearchWiki = () => {
  const [term, setTerm] = useState("");
  const [debounceS, setDebounceS] = useState(term);
  const [data, setData] = useState([]);
  const { addPost } = useFirebase();
  const { hideModal } = UI_Context();

  useEffect(() => {
    const result = setTimeout(() => {
      setDebounceS(term);
    }, 1200);
    return () => {
      clearTimeout(result);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceS,
        },
      });
      setData(respond.data.query.search);
    };
    if (debounceS) {
      search();
    } else setData([]);
  }, [debounceS]);

  const AddWikiPost = (el) => {
    const post = {
      id: el.pageid.toString(),
      title: el.title,
      description: el.snippet,
    };

    addPost(post);
    hideModal();
  };

  const fetchData = data.map((el, index) => {
    return (
      <tr key={el.pageid}>
        <th scope="row">{index}</th>
        <td>{el.title} </td>
        <td>
          <span dangerouslySetInnerHTML={{ __html: el.snippet }} />
        </td>
        <td>
          <div className="AddIcon" onClick={() => AddWikiPost(el)}>
            <GoDiffAdded />
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="SearchWiki">
      <h1>Wikipedia Posts</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Search from Wikipedia"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Add</th>
          </tr>
        </thead>
        <tbody>{fetchData}</tbody>
      </table>
    </div>
  );
};

export default SearchWiki;
