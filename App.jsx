import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from "./Components/Student" ;
function App() {
  

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Student Information</h2>

      <div style={{
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        gap: "20px",
        marginTop: "30px"
          }}>
        
        <Student 
          name="Kshitij Sharma" 
          course="Electronics" 
          marks={90} 
        />
        <Student 
          name="Jivisha Gupta" 
          course="Artificial Intelligence" 
          marks={95} 
        />
        <Student 
          name="Avneet Kaur" 
          course="Computer Science" 
          marks={98} 
        />

      </div>
    </>
  );
}
export default App

// import "./App.css";

// function App() {

//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <>
//       <div style={{
//         textAlign: "center",
//         marginTop: "50px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         padding: "30px",
//         width: "300px",
//         margin: "auto",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
//       }}>
        
//         <h2>React Counter Application</h2>

//         <h1>{count}</h1>

//         <button onClick={increment} style={{ margin: "5px" }}>
//           Increment (+)
//         </button>

//         <button onClick={decrement} style={{ margin: "5px" }}>
//           Decrement (-)
//         </button>

//         <br />

//         <button onClick={reset} style={{ marginTop: "10px" }}>
//           Reset
//         </button>

//       </div>
//     </>
//   );
// }

// export default App;