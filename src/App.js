// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import VehiclePage from "./pages/VehiclePage";
import OrdersPage from "./pages/OrdersPage";
// import CreateQRPage from "./pages/CreateQRPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./Auth/PrivateRoute";
import LoginPage from "./pages/LoginPage";
// import DashboardHome from "./pages/DashBoardHome";

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

// export default App;

// function App(){
//   return(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AdminPage />} />
//         <Route path="/v/:code" element={<VehiclePage />} />
//         <Route path="/orders" element={<OrdersPage />} />
//         {/* <Route path="/admin" element={<Dashboard />} /> */}
//         <Route path="/get-qr" element={<CreateQRPage />} />
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/admin" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
//        </Routes>
//     </BrowserRouter>
//   );
// }


// export default App;

function App(){
  return(
    <BrowserRouter>
      <Routes>

        {/* 🔐 Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* 🚗 Public QR page */}
        <Route path="/v/:code" element={<VehiclePage />} />

        {/* 🧾 Orders (optional) */}
        <Route path="/orders" element={<OrdersPage />} />

        {/* ➕ Create QR (Admin form page) */}
        <Route path="/" element={<AdminPage />} />
        

        {/* 🔐 Protected Dashboard */}
        <Route 
          path="/admin" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}


export default App;