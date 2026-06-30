import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaQrcode,
  FaMobileAlt,
  FaPhoneAlt
} from "react-icons/fa";

const steps = [
  {
    icon: <FaShoppingCart />,
    title: "Order Your QR Tags",
    description:
      "Place your order online and receive two premium OwnTag QR stickers delivered to your doorstep."
  },
  {
    icon: <FaQrcode />,
    title: "Stick On Your Vehicle",
    description:
      "Paste the premium waterproof QR sticker on your car, bike, scooter or any vehicle."
  },
  {
    icon: <FaMobileAlt />,
    title: "Someone Scans It",
    description:
      "Anyone can scan the QR using their phone camera. No app installation is required."
  },
  {
    icon: <FaPhoneAlt />,
    title: "Connect Instantly",
    description:
      "The scanner can instantly call or message you through WhatsApp without any hassle."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950 via-black to-purple-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold">
            Simple Process
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            How OwnTag Works
          </h2>

          <p className="text-gray-300 mt-5 text-lg max-w-3xl mx-auto">
            Get started in just four easy steps and make your vehicle smarter
            with OwnTag.
          </p>

        </motion.div>

        {/* Steps */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              whileHover={{
                scale: 1.05
              }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-orange-500 transition-all"
            >

              {/* Step Number */}

              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-xl">

                {index + 1}

              </div>

              {/* Icon */}

              <div className="w-20 h-20 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-4xl mb-8">

                {step.icon}

              </div>

              <h3 className="text-2xl font-bold text-white mb-4">

                {step.title}

              </h3>

              <p className="text-gray-300 leading-7">

                {step.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}