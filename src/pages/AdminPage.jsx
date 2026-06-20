import { useState, useEffect } from "react";
import api from "../services/api";
import "../css/AdminPage.css";
import { toPng } from "html-to-image";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {

  const [form, setForm] = useState({
    ownerName: "",
    phoneNumber: "",
    vehicleNumber: "",
    address: ""
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const tagRef = useRef();
const [qrCode, setQrCode] = useState("");

const downloadTag = (code) => {
  setQrCode(code);

  setTimeout(() => {
    toPng(tagRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `owntag-${code}.png`;
      link.href = dataUrl;
      link.click();
    });
  }, 400);
};

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("admin") === "true");
  }, []);

  const submit = async () => {

    if (!form.ownerName || !form.phoneNumber || !form.vehicleNumber || !form.address) {
      setError("Please fill all fields");
      setTimeout(() => setError(""), 2000);
      return;
    }

    try {
      const res = await api.post("/add", form);

      setMessage("✅ QR Generated Successfully!");

      // open QR after small delay (better UX)
      setTimeout(() => {
        downloadTag(res.data.uniqueCode);
      }, 800);

      setForm({
        ownerName: "",
        phoneNumber: "",
        vehicleNumber: "",
        address: ""
      });

      setTimeout(() => setMessage(""), 2500);

    } catch (err) {
      setError("❌ Error generating QR");
      setTimeout(() => setError(""), 2500);
    }
  };

  return (
    <>
      {/* SUCCESS MESSAGE */}
      {message && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {message}
        </div>
      )}

      {/* ERROR MESSAGE */}
      {error && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {error}
        </div>
      )}

      <div className="admin-bg">
        <div className="admin-container">

          <div className="admin-card">

            <h2>🚗 OwnTag</h2>
            <p className="subtitle">Create QR for new vehicle</p>

            <input
              className="text-black"
              placeholder="Owner Name"
              value={form.ownerName}
              onChange={e => setForm({ ...form, ownerName: e.target.value })}
            />

            <input
              className="text-black"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={e => setForm({ ...form, phoneNumber: e.target.value })}
            />

            <input
              className="text-black"
              placeholder="Vehicle Number"
              value={form.vehicleNumber}
              onChange={e => setForm({ ...form, vehicleNumber: e.target.value })}
            />

            <input
              className="text-black"
              placeholder="Address"
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
            />

            <button onClick={submit}>
              Generate & Download QR
            </button>

            {!isLoggedIn && (
              <button
                className="login-btn"
                onClick={() => navigate("/login")}
              >
                🔐 Admin Login
              </button>
            )}

          </div>

        </div>
      </div>
      {/* 🔥 HIDDEN TAG TEMPLATE */}
<div style={{ position: "absolute", left: "-9999px" }}>
  <div ref={tagRef} className="relative w-[600px]">

    <img src="/tag.png" className="w-full" alt="tag-preview"/>

    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.owntag.in/v/${qrCode}`}
      className="absolute right-[35px] top-1/2 transform -translate-y-1/2 w-[160px] h-[160px]" alt="tag-preview"
    />

  </div>
</div>
    </>
  );
}

export default AdminPage;