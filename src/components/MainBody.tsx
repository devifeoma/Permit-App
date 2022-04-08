import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Permit } from "./../types";

function MainBody() {
  const [allPermits, setAllPermits] = useState([]);
  const [permits, setPermits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [{ start, end, limit }, setPageOptions] = useState({
    start: 0,
    end: 10,
    limit: 10,
  });

  useEffect(() => {
    setLoading(true);
    fetch("https://data.cityofchicago.org/resource/ydr8-5enu.json")
      .then((res) => res.json())
      .then((json) => {
        const _permits = json.map((permit: Permit, index: number) => {
          return {
            _id: index,
            ...permit,
          };
        });
        setPermits(_permits.slice(start, end));
        setAllPermits(_permits);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setPermits(allPermits.slice(start, end));
  }, [start, end]);

  const prevFn = () => {
    setPageOptions({
      start: start - limit,
      end: end - limit,
      limit: limit,
    });
  };

  const nextFn = () => {
    setPageOptions({
      start: start + limit,
      end: end + limit,
      limit: limit,
    });
  };

  return (
    <div className="main__content">
      <div className="main__post">
        <div className="card">
          <div className="table__responsiveness">
            <table className="table__style">
              <tr>
                <th>Id</th>
                <th>Permit</th>
                <th>Permit Type</th>
                <th>Review Type</th>
                <th>Application Start Date</th>
                <th>Issue date</th>
                <th>Street Direction</th>
                <th>Street Name</th>
                <th>Actions</th>
              </tr>
              {loading && <div>Loading...</div>}
              {permits.map((permit: any) => (
                <tr key={permit.id}>
                  <td>{permit.id}</td>
                  <td>{permit.permit_}</td>
                  <td>{permit.permit_type}</td>
                  <td>{permit.review_type}</td>
                  <td>
                    {new Date(permit.application_start_date).toUTCString()}
                  </td>
                  <td>{new Date(permit.issue_date).toUTCString()}</td>
                  <td>{permit.street_direction}</td>
                  <td>{permit.street_name}</td>
                  <td>
                    <Link to={`viewDetails/${permit.id}`}>
                      <button className="button">View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </table>
          </div>

          <div className="pagination__container">
            <button
              disabled={start === 0}
              className="prev__btn button"
              onClick={prevFn}
            >
              Prev
            </button>
            <button
              disabled={end == allPermits.length}
              className="next__btn button"
              onClick={nextFn}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
