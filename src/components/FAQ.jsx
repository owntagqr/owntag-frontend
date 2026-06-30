import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is OwnTag?",
    answer:
      "OwnTag is a smart QR vehicle tag that lets anyone contact the vehicle owner instantly by simply scanning the QR code."
  },
  {
    question: "Do I need to install any app?",
    answer:
      "No. OwnTag works directly with your mobile camera. Just scan the QR code and your browser opens automatically."
  },
  {
    question: "How many tags do I get?",
    answer:
      "Each package includes 2 premium waterproof QR tags for just ₹339."
  },
  {
    question: "Can I use it for cars and bikes?",
    answer:
      "Yes. OwnTag works perfectly on cars, bikes, scooters, commercial vehicles and many other vehicles."
  },
  {
    question: "How can someone contact me?",
    answer:
      "After scanning the QR code, they can directly call you or send a WhatsApp message using the buttons shown on the page."
  },
  {
    question: "How long does delivery take?",
    answer:
      "Orders are usually processed within 24 hours and delivered within 3–7 business days depending on your location."
  },
  {
    question: "Can I order more than one package?",
    answer:
      "Yes. You can order multiple packs if you have multiple vehicles."
  },
  {
    question: "Is the QR sticker waterproof?",
    answer:
      "Yes. Our premium quality stickers are waterproof, weather resistant and designed for long-term outdoor use."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950 via-black to-purple-950">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Got Questions?
          </h2>

          <p className="text-gray-300 mt-5 text-lg">
            Everything you need to know about OwnTag.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
            >

              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >

                <span className="text-white font-semibold text-lg">
                  {faq.question}
                </span>

                {active === index ? (
                  <FaChevronUp className="text-orange-400" />
                ) : (
                  <FaChevronDown className="text-orange-400" />
                )}

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >

                    <div className="px-6 pb-6 text-gray-300 leading-8">

                      {faq.answer}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}