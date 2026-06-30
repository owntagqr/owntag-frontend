
import { useState } from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import BrandStrip from "../components/BrandStrip";
import ImageCarousel from "../components/ImageCurousel";
import PricingSection from "../components/PricingSection";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Review from "../components/Review";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import api from "../services/api";

export default function LandingPage() {

  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicleNumber: "",
    address: ""
  });

  const submit = async () => {

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.vehicleNumber.trim() ||
      !form.address.trim()
    ) {
      setError("Please fill all fields.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {

      await api.post("/order", form);

      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        vehicleNumber: "",
        address: ""
      });

      setTimeout(() => {
        setSuccess(false);
        setShowForm(false);
      }, 2500);

    } catch (err) {

      let message = "Unable to place order.";

      const data = err.response?.data;

      if (typeof data === "string") {
        message = data;
      }
      else if (data?.message) {
        message = data.message;
      }
      else if (data?.errors) {
        message = Object.values(data.errors).join("\n");
      }
      else if (data?.phone) {
        message = data.phone;
      }
      else if (data?.vehicleNumber) {
        message = data.vehicleNumber;
      }
      else if (data?.address) {
        message = data.address;
      }

      setError(message);

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (

    <div className="bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white">

      <Navbar onOrderClick={() => setShowForm(true)} showOrderButton={true} />

      <Hero onOrderClick={() => setShowForm(true)} />

      <BrandStrip />

      <ImageCarousel />

      <PricingSection onOrderClick={() => setShowForm(true)} />

      <Features />

      <HowItWorks />

      <Review />

      <FAQ />

      <CTA onOrderClick={() => setShowForm(true)} />

      <Footer />

      {/* ORDER POPUP */}

      {showForm && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-white text-black p-8 rounded-2xl w-[90%] max-w-md shadow-2xl relative">

            <h2 className="text-2xl font-bold mb-6 text-center">
              🚗 Order Your QR Tag
            </h2>

            <div className="space-y-3">

              <input
                className="w-full p-3 border rounded-lg"
                placeholder="👤 Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value
                  })
                }
              />

              <input
                className="w-full p-3 border rounded-lg"
                placeholder="📱 Phone Number"
                value={form.phone}
                maxLength={10}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, "")
                  })
                }
              />

              <input
                className="w-full p-3 border rounded-lg"
                placeholder="🚘 Vehicle Number"
                value={form.vehicleNumber}
                onChange={(e) =>
                  setForm({
                    ...form,
                    vehicleNumber: e.target.value.toUpperCase()
                  })
                }
              />

              <textarea
                className="w-full p-3 border rounded-lg"
                placeholder="📍 Delivery Address"
                value={form.address}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: e.target.value
                  })
                }
              />

            </div>

            <button
              type="button"
              onClick={submit}
              className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              🚀 Place Order
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-500 text-xl"
            >
              ✖
            </button>

          </div>

        </div>

      )}

      {/* ERROR */}

      {error && (

        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">

          {error}

        </div>

      )}

      {/* SUCCESS */}

      {success && (

        <div className="fixed inset-0 flex items-center justify-center z-50">

          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          <div className="relative bg-white text-black rounded-2xl p-8 w-[90%] max-w-sm text-center shadow-2xl">

            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">

              <span className="text-2xl text-white">
                ✔
              </span>

            </div>

            <h2 className="text-xl font-bold mb-2">
              Order Placed!
            </h2>

            <p className="text-gray-600 text-sm">
              Your QR Tag order has been received successfully.
            </p>

          </div>

        </div>

      )}

    </div>
  );
}