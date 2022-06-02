import React, { useState, useEffect } from "react";
import Axios from "axios";

const ModifyApy = () => {
  const [stableApy, setStableApy] = useState(0);
  const [big4Apy, setBig4Apy] = useState(0);
  const [bscApy, setBscApy] = useState(0);


  //get all apys from db and set them to state
  async function getApy() {
    await Axios.get("/apy/getAll")
      .then((res) => {
        console.log(res.data);
        res.data.map((data) => {
            setStableApy(data.stableApy);
            setBig4Apy(data.big4Apy);
            setBscApy(data.bscApy);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getApy();
  }, []);

  //save apy in db
  const saveApy = () => {
    Axios.post("/apy/update", {
      stableApy: stableApy,
        big4Apy: big4Apy,
        bscApy: bscApy,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(stableApy);





  return (
    <>
      <h1>ModifyApy</h1>
      <div className="d-flex flex-column">
        <label>STABLE</label>
        <input type="number" placeholder={stableApy} onChange={(e) => setStableApy(e.target.value)} />
        <label>BIG4</label>
        <input type="number" placeholder={big4Apy} onChange={(e) => setBig4Apy(e.target.value)} />
        <label>BSC</label>
        <input type="number" placeholder={bscApy} onChange={(e) => setBscApy(e.target.value)} />
        <button onClick={saveApy}>Modificar</button>
      </div>
    </>
  );
};

export default ModifyApy;
