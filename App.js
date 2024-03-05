import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/layout";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Error from "./Pages/Error";
import Search  from "./Pages/search";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// import { useState } from "react";
// function App() {
//   let [Edata, setEdata] = useState({
//     name: "",
//     age: "",
//     place: "",
//   });
//   let [Fdata, setFdata] = useState({});
//   const changeHandler = (e) => {
//     let Ename = e.target.name;
//     let Evalue = e.target.value;
//     setEdata({ ...Edata, [Ename]: Evalue });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setFdata(Edata);
//   };
//   return (
//     <>
//       <center>
//         <h2>Form Demo</h2>
//       </center>
//       <hr></hr>
//       <form onSubmit={submitHandler}>
//         <label>Name</label>
//         <input type="text" name="name" onChange={changeHandler} /> <br></br>
//         <label>Days</label>
//         <input type="text" name="age" onChange={changeHandler} /> <br></br>
//         <label>Place</label>
//         <input type="text" name="place" onChange={changeHandler} /> <br></br>

//         <button>Submit</button>
//       </form>
//       <hr></hr>
//       <div style={{ backgroundColor: "pink", width: "30%" }}>
//         <img src={Fdata.place} alt="place" width="200px" height="200px"/>
//         <p>{Fdata.name}</p>
//         <p>{Fdata.age}</p>

//       </div>
//     </>
//   );
// }
// export default App;

// import React from "react";
// import { useState } from "react";
// import Comp1 from "./comp1";
// const App = () => {
//   const [color, setColor] = useState("red");

//   return (
//     <div>
//       <h4>my color is {color}</h4>;
//       <Comp1 name="sri" />
//     </div>
//   );
// };

// import React from "react";

// const App = () => {
//   return <Fragm />;
// };
// export default App;
// // import React, { useState, useEffect } from "react";

// // export default function PageTitle() {
// //   const [name, setName] = useState("");

// //   useEffect(() => {
// //     document.title = `Hi, ${name}`;
// //   }, [name]);

// //   return (
// //     <div>
// //       <p>Use {name} input field below to rename this page!</p>
// //       <input
// //         onChange={({ target }) => setName(target.value)}
// //         value={name}
// //         type="text"
// //       />
// //     </div>
// //   );
// // }

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
