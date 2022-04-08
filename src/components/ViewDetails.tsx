import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Permit } from "./../types";

function ViewDetails() {
  const [permit, setPermit] = useState<Permit | string | any>({} as Permit);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("https://data.cityofchicago.org/resource/ydr8-5enu.json")
      .then((res) => res.json())
      .then((json) => {
        setPermit(json.find((permit: Permit) => permit.id === id));
        setLoading(false);
      });
  }, []);

  return (
    <div className="main__content">
      <div className="main__post">
        <div className="card">
          <h1>
            <u>Permit</u>
          </h1>
          <div className="card__content">
            <div className="card__content__details">
              <div className="card__content__details__item">
                {loading && <div>Loading...</div>}
                {Object.keys(permit).map((key: string, index) => {
                  return (
                    <div className="permit_detail">
                      <h3>{key.split("_").join(" ").toLocaleUpperCase()}</h3>
                      <p>{permit?.[key]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
