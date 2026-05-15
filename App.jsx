
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from "./Components/Student" ;
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center",fontFamily:"emoji", marginTop: "20px" }}>Student Information</h1>
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
          marks={100} 
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
export default App;
// import { useState } from 'react'
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
        
//         <h2 style = {{ fontFamily:"emoji" }}>React Counter Application</h2>

//         <h1>{count}</h1>

//         <button onClick={increment} style={{ margin: "5px", backgroundColor: "green", color: "white", padding: "8px 15px", border: "none" , fontFamily:"emoji"}}> 
//           Increment (+)
//         </button>

//         <button onClick={decrement} style={{ margin: "5px", backgroundColor: "red", color: "white", padding: "8px 15px", border: "none" , fontFamily:"emoji"}}>
//           Decrement (-)
//         </button>

//         <br />

//         <button onClick={reset} style={{ marginTop: "10px", backgroundColor: "blue", color: "white", padding: "8px 15px", border: "none"  , fontFamily:"emoji"}}>
//           Reset
//         </button>

//       </div>
//     </>
//   );
// }
  //port default App;
// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [errors, setErrors] = useState({});
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => console.log("API fetched"))  
//       .catch(err => console.log(err));
//   }, []);

//   const validate = () => {
//     let newErrors = {};

//     if (!name) newErrors.name = "Name is required";
//     if (!email.includes("@")) newErrors.email = "Valid email required";
//     if (password.length < 6) newErrors.password = "Min 6 characters";

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setUsers([...users, { name, email }]);
//       setErrors({});
//       setName("");
//       setEmail("");
//       setPassword("");
//     }
//   };

//   return (
//     <div style={{
//       backgroundColor: "#ea97cd",
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center"
//     }}>

//       <div style={{
//         backgroundColor: "white",
//         padding: "30px",
//         borderRadius: "10px",
//         boxShadow: "0 4px 10px rgba(167, 229, 236, 0.84)",
//         width: "350px",
//         textAlign: "center"
//       }}>

//         <h2 style={{ color: "white", backgroundColor: "#56bce0", padding: "10px", borderRadius: "5px" , fontFamily: "emoji" }}>Registration Form</h2>

//         <form onSubmit={handleSubmit}>

//           <input 
//             name="name"
//             type="text"
//             placeholder="Enter Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{ width: "100%", margin: "8px 0", padding: "8px" }}
//           />
//           <p style={{ color: "red" }}>{errors.name}</p>

//           <input
//             name="email"
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: "100%", margin: "8px 0", padding: "8px" }}
//           />
//           <p style={{ color: "red" }}>{errors.email}</p>

//           <input
//             name="password"
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: "100%", margin: "8px 0", padding: "8px" }}
//           />
//           <p style={{ color: "red" }}>{errors.password}</p>

//           <button type="submit" style={{
//             backgroundColor: "#62eb9f",
//             color: "white",
//             padding: "8px 15px",
//             border: "none",
//             marginTop: "10px",
//             fontFamily: "emoji"
//           }}>
//             Register
//           </button>

//         </form>

//         {users.length > 0 && (
//           <p style={{ color: "green" , fontFamily: "emoji" }}>Registration Successful!</p>
//         )}

//         <h3>Registered Users</h3>
//         <ul>
//           {users.map((user, index) => (
//             <li key={index}>
//               {user.name} - {user.email}
//             </li>
//           ))}
//         </ul>

//       </div>
//     </div>
//   );
// }

// export default App;

