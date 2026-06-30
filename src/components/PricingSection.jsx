import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaQrcode,
  FaTruck,
  FaShieldAlt,
  FaMobileAlt,
  FaStar
} from "react-icons/fa";

export default function PricingSection({ onOrderClick }) {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950 via-black to-purple-950">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold">
            🔥 Limited Time Offer
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Premium QR Tags
          </h2>

          <p className="text-gray-300 mt-5 text-lg">
            Protect your vehicle with India's Smart QR Vehicle Tag
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

            {/* TOP */}

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-center py-6">

              <h3 className="text-white text-3xl font-bold">
                Premium Pack
              </h3>

            </div>

            {/* PRICE */}

            <div className="text-center py-10">

              <div className="flex justify-center items-end">

                <span className="text-2xl text-orange-400 font-bold">
                  ₹
                </span>

                <span className="text-7xl text-white font-black">
                  339
                </span>

              </div>

              <p className="text-gray-300 mt-3 text-lg">
                2 Premium QR Tags
              </p>

            </div>

            {/* FEATURES */}

            <div className="px-8 pb-8 space-y-5 text-white">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-400 text-xl" />
                <span>2 Premium QR Tags</span>
              </div>

              <div className="flex items-center gap-4">
                <FaQrcode className="text-orange-400 text-xl" />
                <span>Instant QR Access</span>
              </div>

              <div className="flex items-center gap-4">
                <FaShieldAlt className="text-orange-400 text-xl" />
                <span>Weather Resistant</span>
              </div>

              <div className="flex items-center gap-4">
                <FaTruck className="text-orange-400 text-xl" />
                <span>Fast Delivery</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMobileAlt className="text-orange-400 text-xl" />
                <span>No App Required</span>
              </div>

              <div className="flex items-center gap-4">
                <FaStar className="text-yellow-400 text-xl" />
                <span>Premium Quality Printing</span>
              </div>

            </div>

            {/* BUTTON */}

            <div className="px-8 pb-10">

              <button
                onClick={onOrderClick}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 transition duration-300 text-white py-4 rounded-xl text-lg font-bold shadow-xl"
              >
                🚀 Order Now
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}