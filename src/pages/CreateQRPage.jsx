import { useState } from "react";
import api from "../services/api";

function CreateQRPage() {

  const [form, setForm] = useState({
    ownerName: "",
    phoneNumber: "",
    vehicleNumber: ""
  });

  const submit = async () => {

    const data = {
      ownerName: form.ownerName.trim(),
      phoneNumber: form.phoneNumber.trim(),
      vehicleNumber: form.vehicleNumber.trim().toUpperCase()
    };

    if (
      !data.ownerName ||
      !data.phoneNumber ||
      !data.vehicleNumber
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {

      const res = await api.post("/add", data);

      // Download QR
      window.open(
        `${api.defaults.baseURL}/qr/${res.data.uniqueCode}`,
        "_blank"
      );

      alert("✅ QR Generated!");

      setForm({
        ownerName: "",
        phoneNumber: "",
        vehicleNumber: ""
      });

    } catch (err) {

      const message =
        err.response?.data?.message ||
        err.response?.data ||
        "❌ Error generating QR";

      alert(message);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>

      <h2>🚗 Get Your QR</h2>

      <input
        placeholder="Your Name"
        value={form.ownerName}
        onChange={(e) =>
          setForm({
            ...form,
            ownerName: e.target.value
          })
        }
      />

      <input
        placeholder="Phone Number"
        value={form.phoneNumber}
        maxLength={10}
        onChange={(e) =>
          setForm({
            ...form,
            phoneNumber: e.target.value.replace(/\D/g, "")
          })
        }
      />

      <input
        placeholder="Vehicle Number"
        value={form.vehicleNumber}
        onChange={(e) =>
          setForm({
            ...form,
            vehicleNumber: e.target.value.toUpperCase()
          })
        }
      />

      <br />
      <br />

      <button onClick={submit}>
        Generate QR
      </button>

    </div>
  );
}

export default CreateQRPage;