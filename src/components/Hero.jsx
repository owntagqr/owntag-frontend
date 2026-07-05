import { motion } from "framer-motion";

export default function Hero({ onOrderClick, onWatchDemo }) {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-black via-indigo-900 to-purple-900 pt-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="bg-orange-500/20 border border-orange-500 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
            🚗 India's Smart Vehicle QR Tag
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-8 leading-tight">

            Never Lose
            <br />

            Contact With
            <br />

            <span className="text-orange-400">
              Your Vehicle
            </span>

          </h1>

          <p className="text-gray-300 text-lg mt-8 max-w-xl leading-8">

            Anyone can instantly contact you by simply scanning your QR Tag.

            No App Required.

            Waterproof.

            Premium Quality.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={onOrderClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 transition duration-300 text-white px-8 py-4 rounded-xl font-bold shadow-2xl"
            >
              🔥 Get 2 Tags @ ₹339
            </button>

            <button
              type="button"
              onClick={onWatchDemo}
              className="border border-white text-white hover:bg-white hover:text-black transition duration-300 px-8 py-4 rounded-xl font-semibold"
            >
              ▶ Watch Demo
            </button>

          </div>

          {/* STATS */}

          <div className="grid grid-cols-3 gap-6 mt-16">

            <div>

              <h2 className="text-4xl font-bold text-orange-400">
                500+
              </h2>

              <p className="text-gray-400">
                Happy Customers
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-orange-400">
                1000+
              </h2>

              <p className="text-gray-400">
                QR Tags
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-orange-400">
                24×7
              </h2>

              <p className="text-gray-400">
                Support
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >

          {/* Glow */}

          <div className="absolute w-[420px] h-[420px] rounded-full bg-orange-500 blur-[140px] opacity-30"></div>

          {/* Floating Card */}

          <motion.div

            animate={{
              y: [0, -18, 0]
            }}

            transition={{
              duration: 3,
              repeat: Infinity
            }}

            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"

          >

            <img
              src="/tag.png"
              alt="OwnTag"
              className="rounded-2xl w-[430px] max-w-full"
            />

          </motion.div>

          {/* OFFER CARD */}

          <motion.div

            animate={{
              y: [0, 10, 0]
            }}

            transition={{
              duration: 2,
              repeat: Infinity
            }}

            className="absolute -bottom-6 left-0 bg-orange-500 text-white px-6 py-5 rounded-2xl shadow-2xl"

          >

            <h3 className="text-3xl font-bold">
              ₹339
            </h3>

            <p>
              2 Premium QR Tags
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}