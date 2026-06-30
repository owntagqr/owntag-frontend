import { FaShieldAlt, FaTruck, FaMobileAlt, FaWater, FaQrcode, FaCheckCircle } from "react-icons/fa";

export default function BrandStrip() {
  const items = [
    {
      icon: <FaShieldAlt />,
      text: "Secure QR"
    },
    {
      icon: <FaWater />,
      text: "Waterproof"
    },
    {
      icon: <FaTruck />,
      text: "Fast Delivery"
    },
    {
      icon: <FaMobileAlt />,
      text: "No App Required"
    },
    {
      icon: <FaQrcode />,
      text: "Unlimited Scans"
    },
    {
      icon: <FaCheckCircle />,
      text: "Premium Quality"
    }
  ];

  return (
    <section className="bg-black border-y border-white/10 overflow-hidden py-4">

      <div className="whitespace-nowrap animate-marquee flex">

        {[...items, ...items, ...items].map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3 mx-10 text-white text-lg font-semibold"
          >

            <span className="text-orange-500 text-2xl">
              {item.icon}
            </span>

            <span>
              {item.text}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}