// import React, { useState } from "react";
// import axios from "axios";
// import pubchem from "pubchem-py";

// function App() {
//   const [cid, setCid] = useState("");
//   const [image, setImage] = useState("");

//   const handleSearch = async () => {
//     const compound = await pubchem.get_compounds(cid, "cid");
//     const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${compound[0].cid}/PNG`;
//     axios({
//       url,
//       method: "GET",
//       responseType: "arraybuffer",
//     })
//       .then((response) => {
//         const imgSrc = Buffer.from(response.data, "binary").toString("base64");
//         setImage(`data:image/png;base64,${imgSrc}`);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <input type="text" value={cid} onChange={(e) => setCid(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
//       {image && <img src={image} alt="Compound structure" />}
//     </div>
//   );
// }

// export default App;