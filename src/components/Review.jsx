import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Kumar",
    city: "Hyderabad",
    rating: 5,
    review:
      "Amazing product! The QR sticker looks premium and anyone can contact me instantly without asking around."
  },
  {
    name: "Priya Sharma",
    city: "Bengaluru",
    rating: 5,
    review:
      "Installation took less than a minute. The quality is excellent and the website opens instantly after scanning."
  },
  {
    name: "Arjun Reddy",
    city: "Vijayawada",
    rating: 5,
    review:
      "Very useful for my bike. I ordered two tags and received them quickly. Highly recommended."
  },
  {
    name: "Sneha Patel",
    city: "Chennai",
    rating: 5,
    review:
      "Beautiful design and excellent support. The QR works perfectly and the delivery was very fast."
  },
  {
    name: "Vikram Singh",
    city: "Mumbai",
    rating: 5,
    review:
      "Everyone should have this on their vehicle. Premium quality sticker and simple ordering process."
  },
  {
    name: "Karthik",
    city: "Guntur",
    rating: 5,
    review:
      "OwnTag is a brilliant idea. The call and WhatsApp options work smoothly. Worth every rupee."
  }
];

export default function Review() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-indigo-900 to-purple-900">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold">
            Customer Reviews
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Loved by Vehicle Owners
          </h2>

          <p className="text-gray-300 mt-5 text-lg max-w-3xl mx-auto">
            Thousands of customers trust OwnTag to make their vehicles smarter,
            safer and easier to identify.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04
              }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-orange-500 transition"
            >

              <div className="flex gap-1 mb-5">

                {[...Array(review.rating)].map((_, i) => (

                  <FaStar
                    key={i}
                    className="text-yellow-400 text-xl"
                  />

                ))}

              </div>

              <p className="text-gray-300 leading-7 italic mb-8">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">

                  {review.name.charAt(0)}

                </div>

                <div>

                  <h4 className="text-white font-bold text-lg">
                    {review.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {review.city}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}