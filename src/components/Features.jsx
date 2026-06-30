import { motion } from "framer-motion";
import {
  FaQrcode,
  FaWhatsapp,
  FaPhoneAlt,
  FaTruck,
  FaShieldAlt,
  FaMobileAlt
} from "react-icons/fa";

const features = [
  {
    icon: <FaQrcode />,
    title: "Instant QR Scan",
    description:
      "Anyone can scan your QR code and instantly access your contact options."
  },
  {
    icon: <FaPhoneAlt />,
    title: "One Tap Calling",
    description:
      "Allow people to contact you immediately without revealing unnecessary details."
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Connect",
    description:
      "Visitors can start a WhatsApp conversation instantly after scanning."
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    description:
      "Premium quality QR tags delivered safely to your doorstep."
  },
  {
    icon: <FaShieldAlt />,
    title: "Premium Quality",
    description:
      "High-quality waterproof and durable stickers built for everyday use."
  },
  {
    icon: <FaMobileAlt />,
    title: "No App Required",
    description:
      "Works directly in any mobile browser. Just scan and connect."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-indigo-900 to-purple-900">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold">
            Why Choose OwnTag?
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Smart Features
          </h2>

          <p className="text-gray-300 mt-5 text-lg max-w-2xl mx-auto">
            OwnTag helps anyone reach you instantly with a secure QR code,
            making your vehicle smarter and safer.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{
                scale: 1.05
              }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-orange-500 transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-3xl mb-6">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold text-white mb-4">

                {feature.title}

              </h3>

              <p className="text-gray-300 leading-7">

                {feature.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}