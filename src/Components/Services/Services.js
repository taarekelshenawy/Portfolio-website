

export default function Services() {
const services = [
  {
    title: "Responsive Design",
    desc: "Fully responsive layouts that work perfectly on all screen sizes and devices.",
    icon: "📱",
  },
  {
    title: "Modern UI",
    desc: "Clean and modern UI designs focused on great user experience.",
    icon: "🎨",
  },
  {
    title: "High Performance",
    desc: "Optimized frontend for fast loading and smooth interactions.",
    icon: "⚡",
  },
  {
    title: "Clean Code",
    desc: "Maintainable and scalable code structure for long-term projects.",
    icon: "🧩",
  },
  {
    title: "API Integration",
    desc: "Professional integration with REST APIs and backend services.",
    icon: "🔌",
  },
  {
    title: "E-commerce Frontend",
    desc: "Complete frontend solutions for e-commerce with cart and checkout flows.",
    icon: "🛒",
  },
  {
  title: "Performance Optimization",
  desc: "Improving frontend performance, reducing load time, and optimizing assets.",
  icon: "🚀",
},
{
  title: "SEO & Accessibility",
  desc: "SEO-friendly structure and accessible UI for better search ranking and usability.",
  icon: "♿",
},
];
    
  return (
    <section className="py-20 px-6  services ">
      <h2 className="text-4xl font-bold text-center mb-14 text-white">
        My Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="
              group
              relative
              bg-white/5
              backdrop-blur-md
              border border-white/10
              rounded-2xl
              p-6
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-2xl
            "
          >
            {/* Glow Effect */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-br from-indigo-500/20 to-purple-500/20
              opacity-0
              group-hover:opacity-100
              transition
              duration-300
            " />

            {/* Icon */}
            <div className="
              relative
              z-10
              flex items-center justify-center
              w-14 h-14
              rounded-xl
              bg-gradient-to-br from-indigo-500 to-purple-500
              text-2xl
              mb-5
              transition
              duration-300
              group-hover:scale-110
            ">
              {service.icon}
            </div>

            {/* Content */}
            <h3 className="relative z-10 text-xl font-semibold mb-2 text-white">
              {service.title}
            </h3>

            <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>

            {/* Bottom Line Animation */}
            <div className="
              relative z-10
              mt-5
              h-1
              w-0
              bg-gradient-to-r from-indigo-500 to-purple-500
              rounded-full
              transition-all
              duration-500
              group-hover:w-full
            " />
          </div>
        ))}
      </div>
    </section>
    

  )
}
