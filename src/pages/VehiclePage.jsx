// import { useParams } from "react-router-dom";

// function VehiclePage() {

//   const { code } = useParams();

//   return (
//     <div style={{textAlign: "center"}}>
//       <h2>Vehicle Contact</h2>

//       <button onClick={() => window.location.href = `http://localhost:8080/api/call/${code}`}>
//         📞 Call Now
//       </button>

//       <button onClick={() => window.location.href = `http://localhost:8080/api/whatsapp/${code}`}>
//         💬 WhatsApp
//       </button>
//     </div>
//   );
// }

// export default VehiclePage;

// import { useParams } from "react-router-dom";
// import "../css/VehiclePAge.css";

// function VehiclePage() {
//   const { code } = useParams();

//   const callNow = () => {
//     window.location.href = `http://localhost:8080/api/call/${code}`;
//   };

//   const whatsapp = () => {
//     window.location.href = `http://localhost:8080/api/whatsapp/${code}`;
//   };

//   const orderQR = () => {
//     const msg = `Hi, I want to order a QR sticker for my vehicle. Code: ${code}`;
//     window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
//   };

//   return (
//     <div className="container">
//       <div className="card">

//         <h2>🚗 Vehicle Contact</h2>
//         <p className="subtitle">Scan to contact owner</p>

//         <div className="buttons">
//           <button className="call" onClick={callNow}>
//             📞 Call Now
//           </button>

//           <button className="whatsapp" onClick={whatsapp}>
//             💬 WhatsApp
//           </button>
//         </div>

//         <hr />

//         <div className="order-section">
//           <p>Want your own QR sticker?</p>

//           <button className="order" onClick={orderQR}>
//             🛒 Order QR Sticker
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default VehiclePage;


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../services/api";
// import "./VehiclePage.css";

// function VehiclePage() {

//   const { code } = useParams();
//   const [vehicle, setVehicle] = useState(null);

//   useEffect(() => {
//     api.get(`/vehicle/${code}`)
//       .then(res => setVehicle(res.data))
//       .catch(err => console.error(err));
//   }, [code]);

//   const callNow = () => {
//     window.location.href = `http://localhost:8080/api/call/${code}`;
//   };

//   const whatsapp = () => {
//     window.location.href = `http://localhost:8080/api/whatsapp/${code}`;
//   };

//   const orderQR = () => {
//     const msg = `Hi, I want to order a QR sticker for my vehicle. Code: ${code}`;
//     window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
//   };

//   if (!vehicle) return <h3 style={{textAlign:"center"}}>Loading...</h3>;

//   return (
//     <div className="container">
//       <div className="card">

//         <h2>🚗 Vehicle Contact</h2>

//         {/* 🔥 NEW: Vehicle Info */}
//         <div className="vehicle-info">
//           <p><strong>Owner:</strong> {vehicle.ownerName}</p>
//           <p><strong>Vehicle No:</strong> {vehicle.vehicleNumber}</p>
//         </div>

//         <div className="buttons">
//           <button className="call" onClick={callNow}>📞 Call Now</button>
//           <button className="whatsapp" onClick={whatsapp}>💬 WhatsApp</button>
//         </div>

//         <hr />

//         <div className="order-section">
//           <p>Want your own QR sticker?</p>
//           <button className="order" onClick={orderQR}>
//             🛒 Order QR Sticker
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default VehiclePage;




// import { useParams } from "react-router-dom";
// import { useEffect, useState, setForm, showForm, form, code, setShowForm } from "react";
// import api from "../services/api";
// import "../css/VehiclePAge.css";

// function VehiclePage() {

//   const { code } = useParams();
//   const [vehicle, setVehicle] = useState(null);

//   useEffect(() => {
//     api.get(`/vehicle/${code}`)
//       .then(res => setVehicle(res.data))
//       .catch(err => console.error(err));
//   }, [code]);

//   const callNow = () => {
//     window.location.href = `http://localhost:8080/api/call/${code}`;
//   };

//   const whatsapp = () => {
//     window.location.href = `http://localhost:8080/api/whatsapp/${code}`;
//   };

//   const [showForm, setShowForm] = useState(false);
//   const [form, setForm] = useState({
//   name: "",
//   phone: "",
//   address: ""
//   });

//   const orderQR = () => {
//     const msg = `Hi, I want to order a QR sticker for my vehicle. Code: ${code}`;
//     window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
//   };

//   if (!vehicle) return <h3 style={{textAlign:"center"}}>Loading...</h3>;

//   return (
//     <div className="main-bg">
//     <div className="container">
//       <div className="card">

//         <h2>🚗 Vehicle Contact</h2>

//         {/* 🔥 NEW: Vehicle Info */}
//         <div className="vehicle-info">
//           <p><strong>Owner:</strong> {vehicle.ownerName}</p>
//           <p><strong>Vehicle No:</strong> {vehicle.vehicleNumber}</p>
//         </div>

//         <div className="buttons">
//           <button className="call" onClick={callNow}>📞 Call Now</button>
//           <button className="whatsapp" onClick={whatsapp}>💬 WhatsApp</button>
//         </div>

//         <hr />

//         <div className="order-section">
//           <p>Want your own QR sticker?</p>
//           <button className="order" onClick={() => setShowForm(true)}>
//           🛒 Order QR Sticker
//           </button>
//         </div>

//       </div>
//       </div>
//     </div>
//   );
// }
// {showForm && (
//   <div className="order-form">
//     <input
//       placeholder="Your Name"
//       onChange={e => setForm({...form, name: e.target.value})}
//     />

//     <input
//       placeholder="Phone Number"
//       onChange={e => setForm({...form, phone: e.target.value})}
//     />

//     <textarea
//       placeholder="Delivery Address"
//       onChange={e => setForm({...form, address: e.target.value})}
//     />

//     <button onClick={submitOrder}>Submit Order</button>
//   </div>
// )}

// const submitOrder = async () => {
//   try {
//     await api.post("/order", {
//       ...form,
//       vehicleCode: code
//     });

//     alert("Order placed successfully!");
//     setShowForm(false);
//   } catch (err) {
//     alert("Error placing order");
//   }
// };

// export default VehiclePage;



// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../services/api";
// import "../css/VehiclePAge.css";

// function VehiclePage() {
//   const { code } = useParams();

//   const [vehicle, setVehicle] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     vehicleNumber: "" 
//   });

//   // 🔄 Fetch vehicle details
//   useEffect(() => {
//     api.get(`/vehicle/${code}`)
//       .then(res => setVehicle(res.data))
//       .catch(err => console.error(err));
//   }, [code]);

//   // 📞 Call
//   const callNow = () => {
//     window.location.href = `http://localhost:8080/api/call/${code}`;
//   };

//   // 💬 WhatsApp
//   const whatsapp = () => {
//     window.location.href = `http://localhost:8080/api/whatsapp/${code}`;
//   };

//   // 🛒 Submit Order
//   const submitOrder = async () => {
//     if (!form.name || !form.phone || !form.address) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       await api.post("/order", {
//         ...form,
//         vehicleCode: code
//       });

//       alert("✅ Order placed successfully!");
//       setShowForm(false);
//       setForm({ name: "", phone: "", address: "" });

//     } catch (err) {
//       alert("❌ Error placing order");
//     }
//   };

//   if (!vehicle) {
//     return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
//   }

//   return (
//     <div className="main-bg">
//       <div className="container">
//         <div className="card">

//           <h2>🚗 QR Vehicle</h2>
//           <p className="subtitle">Scan to contact owner</p>

//           {/* Vehicle Info */}
//           <div className="vehicle-info">
//             <p><strong>Owner:</strong> {vehicle.ownerName}</p>
//             <p><strong>Vehicle No:</strong> {vehicle.vehicleNumber}</p>
//           </div>

//           {/* Buttons */}
//           <div className="buttons">
//             <button className="call" onClick={callNow}>
//               📞 Call Now
//             </button>

//             <button className="whatsapp" onClick={whatsapp}>
//               💬 WhatsApp
//             </button>
//           </div>

//           <hr />

//           {/* Order Section */}
//           <div className="order-section">
//             <p>Want your own QR sticker?</p>

//             <button
//             className="order"
//             onClick={() => window.location.href = "/get-qr"}
//             >
//            🛒 Get Your Own QR
//             </button>

//             {/* Order Form */}
//             {showForm && (
//               <div className="order-form">
//                 <input
//                   placeholder="Your Name"
//                   value={form.name}
//                   onChange={e => setForm({ ...form, name: e.target.value })}
//                 />

//                 <input
//                   placeholder="Phone Number"
//                   value={form.phone}
//                   onChange={e => setForm({ ...form, phone: e.target.value })}
//                 />

//                 <input
//                   placeholder="Vehicle Number"
//                   value={form.vehicleNumber}
//                   onChange={e => setForm({ ...form, vehicleNumber: e.target.value })}
//                 />

//                 <textarea
//                   placeholder="Delivery Address"
//                   value={form.address}
//                   onChange={e => setForm({ ...form, address: e.target.value })}
//                 />

//                 <button onClick={submitOrder}>
//                   Submit Order
//                 </button>
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default VehiclePage;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import "../css/VehiclePAge.css";

function VehiclePage() {

  const { code } = useParams();

  const [vehicle, setVehicle] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    vehicleNumber: ""
  });

  useEffect(() => {
    api.get(`/vehicle/${code}`)
      .then(res => setVehicle(res.data))
      .catch(err => console.error(err));
  }, [code]);

  const callNow = () => {
    window.location.href = `http://localhost:8080/api/call/${code}`;
  };

  const whatsapp = () => {
    window.location.href = `http://localhost:8080/api/whatsapp/${code}`;
  };

  const submitOrder = async () => {

    if (!form.name || !form.phone || !form.address || !form.vehicleNumber) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post("/order", {
        ...form,
        vehicleCode: code
      });

      alert("✅ Order placed successfully!");

      setForm({
        name: "",
        phone: "",
        address: "",
        vehicleNumber: ""
      });

      setShowForm(false);

    } catch (err) {
      alert("❌ Error placing order");
    }
  };

  if (!vehicle) return <h3 style={{textAlign:"center"}}>Loading...</h3>;

  return (
    <div className="main-bg">
      <div className="container">
        <div className="card">

          <h2>🚗 QR Vehicle</h2>

          <div style={{backgroundColor:"orange"}} className="vehicle-info">
            <p style={{color:"black"}}><b>Owner:</b> {vehicle.ownerName}</p>
            <p style={{color:"black"}}><b>Vehicle No:</b> {vehicle.vehicleNumber}</p>
          </div>

          <div className="buttons">
            <button style={{backgroundColor:"white", color:"blue"}} className="call" onClick={callNow}>📞 Call Now</button>
            <button style={{backgroundColor:"green"}} className="whatsapp" onClick={whatsapp}>💬 WhatsApp</button>
          </div>

          <hr />

          <p style={{color:"black"}}>Want your own QR sticker?</p>

          <button className="order" onClick={() => setShowForm(!showForm)}>
            🛒 Order QR Sticker
          </button>

          {showForm && (
            <div className="order-form">

              <input placeholder="Your Name"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
              />

              <input placeholder="Phone Number"
                value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})}
              />

              <textarea placeholder="Delivery Address"
                value={form.address}
                onChange={e => setForm({...form, address: e.target.value})}
              />

              <input placeholder="Vehicle Number"
                value={form.vehicleNumber}
                onChange={e => setForm({...form, vehicleNumber: e.target.value})}
              />

              <button style={{color:"black"}} onClick={submitOrder}>Submit Order</button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default VehiclePage;