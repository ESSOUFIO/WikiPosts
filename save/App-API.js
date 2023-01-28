import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [term, setTerm] = useState("javascript");
  const [debounceS, setDebounceS] = useState(term);
  const [data, setData] = useState([]);

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

    search();
  }, [debounceS]);

  // useEffect(() => {
  //   const search = async () => {
  //     const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: term,
  //       },
  //     });
  //     setData(respond.data.query.search);
  //   };

  //   if (!data.length) {
  //     // first render
  //     if (term) {
  //       search();
  //     }
  //   } else {
  //     const debounceSearch = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 1500);

  //     return () => {
  //       clearTimeout(debounceSearch);
  //     };
  //   }
  // }, [term]);

  // useEffect(() => {
  //   const login = async () => {
  //     const url = "https://tarmeezacademy.com/api/v1/login";
  //     const body = {
  //       username: "OMARES",
  //       password: "123456",
  //     };

  //     const respond = await axios.post(url, body);
  //   };
  //   login();
  // }, []);

  const fetchData = data.map((el, index) => {
    return (
      <tr key={el.pageid}>
        <td>{index}</td>
        <td>{el.title} </td>
        <td>
          <span dangerouslySetInnerHTML={{ __html: el.snippet }} />
        </td>
      </tr>
    );
  });
  return (
    <div className="container pt-5">
      <label htmlFor="searchInput" className="form-label">
        Search Input
      </label>
      <input
        className="form-control"
        type="text"
        id="searchInput"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Discription</th>
          </tr>
        </thead>
        <tbody>{fetchData}</tbody>
      </table>
    </div>
  );
}

export default App;
