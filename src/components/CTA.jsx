import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaQrcode } from "react-icons/fa";

export default function CTA({ onOrderClick }) {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span className="bg-white text-orange-600 px-5 py-2 rounded-full font-bold">
              🚀 Limited Time Offer
            </span>

            <h2 className="text-5xl md:text-6xl font-black text-white mt-8 leading-tight">

              Secure Your
              <br />

              Vehicle Today

            </h2>

            <p className="text-white/90 text-lg mt-8 leading-8">

              Get <strong>2 Premium QR Tags</strong> for just
              <span className="font-bold text-yellow-300"> ₹339</span>.

              Anyone can instantly contact you by scanning your QR tag.

            </p>

            <div className="flex flex-wrap gap-6 mt-10">

              <div className="flex items-center gap-3 text-white">

                <FaShieldAlt className="text-2xl" />

                Premium Quality

              </div>

              <div className="flex items-center gap-3 text-white">

                <FaQrcode className="text-2xl" />

                No App Required

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-md w-full">

              <p className="text-gray-500 text-lg">
                Starting From
              </p>

              <h1 className="text-6xl font-black text-orange-600 mt-3">
                ₹339
              </h1>

              <p className="text-gray-600 mt-3 text-lg">
                2 Premium QR Tags
              </p>

              <button
                onClick={onOrderClick}
                className="mt-10 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 transition-all duration-300 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-3 shadow-xl"
              >
                Order Now

                <FaArrowRight />

              </button>

              <p className="mt-6 text-sm text-gray-500">
                Fast Delivery • Premium Quality • Secure QR
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}