import { useEffect } from "react";
// import Logo from "../../assets/Images/logo.png";
import Image from "../../assets/Images/image.jpeg";
import Entertainment from "../../assets/Images/entertainment.jpg";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { Navigate, useNavigate } from "react-router-dom";

const Homepage = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".fade-in, .slide-in");
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-136 flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5d648]/30 to-white/70 z-10"></div>
        <img
          src={Image}
          alt="Financial growth"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Hero content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
              Exquisite
            </span>{" "}
            Infrazone
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto fade-in text-gray-700 font-medium">
            Where visionary investors meet exceptional opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <button onClick={() => navigate("/ready-to-invest")} className="bg-gradient-to-r from-[#ff6700] to-[#f5d648] hover:from-[#e65c00] hover:to-[#e6c642] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff6700]/30 flex items-center gap-2">
              Explore Opportunities
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button onClick={() => navigate("/contact")} className="border-2 border-[#f5d648] hover:bg-[#f5d648]/10 text-gray-800 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Schedule Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-[#f5d648]/20 animate-float1 z-0"></div>
        <div className="absolute bottom-1/4 right-32 w-24 h-24 rounded-full bg-[#ff6700]/15 animate-float2 z-0"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6700]/20 to-[#f5d648]/20 animate-float3 z-0"></div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <div className="animate-bounce w-8 h-14 border-4 border-[#f5d648] rounded-full flex justify-center">
            <div className="w-2 h-2 bg-[#ff6700] rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#f5d648]/10 to-[#ff6700]/10 p-8 rounded-xl border border-[#f5d648]/50 slide-in transform transition-all hover:scale-105 shadow-sm">
              <h3 className="text-5xl font-bold text-[#ff6700] mb-2">$2.4B+</h3>
              <p className="text-gray-600">Assets Under Management</p>
            </div>
            <div className="bg-gradient-to-br from-[#ff6700]/10 to-[#f5d648]/10 p-8 rounded-xl border border-[#ff6700]/50 slide-in transform transition-all hover:scale-105 shadow-sm">
              <h3 className="text-5xl font-bold text-[#f5d648] mb-2">24%</h3>
              <p className="text-gray-600">Average Annual ROI</p>
            </div>
            <div className="bg-gradient-to-br from-[#f5d648]/10 via-[#ff9248]/10 to-[#ff6700]/10 p-8 rounded-xl border border-[#f5d648]/50 slide-in transform transition-all hover:scale-105 shadow-sm">
              <h3 className="text-5xl font-bold text-[#ff6700] mb-2">150+</h3>
              <p className="text-gray-600">Successful Investments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Family of Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
                Family
              </span>{" "}
              of Brands
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in">
              Beyond investments, we cultivate excellence across diverse
              industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Entertainment Production Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl slide-in h-96">
              <a
                href="https://google.com"
                className="group relative overflow-hidden rounded-2xl shadow-2xl slide-in h-96 block"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <img
                  src={Entertainment}
                  alt="Entertainment Production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-1 bg-[#f5d648]"></div>
                      <span className="text-sm font-semibold text-[#f5d648]">
                        ENTERTAINMENT
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Exquisite Entertainment
                    </h3>
                    <p className="text-gray-200 mb-4">
                      Award-winning film and content production house creating
                      captivating stories
                    </p>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <a
                        href="#"
                        className="text-white hover:text-[#f5d648] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-[#f5d648] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#f5d648] text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Featured Productions
                </div>
              </a>
            </div>

            {/* Real Estate & Interior Design Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl slide-in h-96">
              <a
                href="https://google.com"
                className="group relative overflow-hidden rounded-2xl shadow-2xl slide-in h-96 block"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
                  alt="Real Estate & Interior Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-1 bg-[#ff6700]"></div>
                      <span className="text-sm font-semibold text-[#ff6700]">
                        REAL ESTATE & DESIGN
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Exquisite Construction
                    </h3>
                    <p className="text-gray-200 mb-4">
                      Luxury properties and transformative interior design
                      solutions
                    </p>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <a
                        href="#"
                        className="text-white hover:text-[#ff6700] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-[#ff6700] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#ff6700] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Award-Winning Designs
                </div>
              </a>
            </div>
          </div>

          <div className="text-center mt-12 fade-in">
            <button
              onClick={() => navigate("/companies")}
              className="border-2 border-gray-800 text-gray-800 cursor-pointer hover:bg-gray-800 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Explore All Our Companies
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
              Curated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
                Investment
              </span>{" "}
              Portfolios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in">
              We meticulously select opportunities that align with your
              financial goals and risk tolerance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Growth Equity",
                description:
                  "Invest in high-potential companies with proven business models",
                roi: "18-30%",
                risk: "Medium",
              },
              {
                title: "Real Estate Funds",
                description:
                  "Diversified property investments with stable cash flows",
                roi: "8-12%",
                risk: "Low",
              },
              {
                title: "Venture Capital",
                description:
                  "Early-stage investments in disruptive technologies",
                roi: "25-50%",
                risk: "High",
              },
              {
                title: "Private Credit",
                description: "Senior secured loans with attractive yields",
                roi: "10-15%",
                risk: "Medium-Low",
              },
              {
                title: "Hedge Funds",
                description:
                  "Absolute return strategies across market conditions",
                roi: "12-20%",
                risk: "Medium-High",
              },
              {
                title: "Sustainable Investments",
                description: "ESG-focused opportunities with positive impact",
                roi: "15-25%",
                risk: "Medium",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 slide-in transform transition-all hover:scale-[1.02] hover:border-[#ff6700]/50 shadow-sm hover:shadow-md"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-gray-500">Projected ROI:</span>
                      <span className="text-[#ff6700] ml-2">{item.roi}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Risk:</span>
                      <span
                        className={`ml-2 ${
                          item.risk === "High"
                            ? "text-red-500"
                            : item.risk === "Low"
                            ? "text-green-500"
                            : "text-[#f5d648]"
                        }`}
                      >
                        {item.risk}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#ff6700]/10 to-[#f5d648]/10 px-6 py-3 border-t border-gray-200">
                  <button className="text-[#ff6700] hover:text-[#e65c00] font-medium w-full text-left">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Consistent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
                  Outperformance
                </span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our proprietary investment framework has delivered
                market-beating returns across economic cycles.
              </p>
              <div className="space-y-6">
                {[
                  {
                    label: "2023 Performance",
                    value: "+28.4%",
                    width: "90%",
                    icon: "📈",
                  },
                  {
                    label: "5-Year Annualized",
                    value: "+24.1%",
                    width: "85%",
                    icon: "🏆",
                  },
                  {
                    label: "Since Inception",
                    value: "+19.8%",
                    width: "80%",
                    icon: "🚀",
                  },
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-700 font-medium">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[#ff6700] font-bold bg-[#ff6700]/10 px-3 py-1 rounded-full">
                        {item.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#ff6700] via-[#ff9248] to-[#f5d648] h-3 rounded-full transition-all duration-700 ease-out group-hover:scale-y-125 origin-left"
                        style={{ width: item.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-gradient-to-r from-[#ff6700] to-[#f5d648] hover:from-[#e65c00] hover:to-[#e6c642] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[#ff6700]/40 flex items-center gap-2">
                View Full Performance Report
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="lg:w-1/2 slide-in">
              <div className="relative bg-gradient-to-br from-[#ff6700]/10 to-[#f5d648]/10 p-1 rounded-2xl border border-[#ff6700]/20 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Performance chart showing growth"
                  className="rounded-xl w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs mx-4 border border-[#ff6700]/20">
                    <h3 className="text-xl font-bold text-[#ff6700] mb-2">
                      Growth Trajectory
                    </h3>
                    <p className="text-gray-700">
                      Our investments consistently outperform market benchmarks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
                Leadership
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in text-lg">
              Seasoned professionals with decades of collective investment
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group slide-in">
              <div className="relative overflow-hidden rounded-xl mb-4 h-96 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white">
                      Sarah Johnson
                    </h3>
                    <p className="text-[#f5d648] font-medium">
                      Chief Investment Officer
                    </p>
                    <p className="text-gray-200 mt-2">
                      Former Partner at Blackstone, 18 years experience
                    </p>
                    <div className="flex gap-3 mt-4">
                      <a
                        href="#"
                        className="text-white hover:text-[#f5d648] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-[#f5d648] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-br from-[#ff6700] to-[#f5d648] text-white px-3 py-1 rounded-full text-sm font-medium">
                  CIO
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group slide-in">
              <div className="relative overflow-hidden rounded-xl mb-4 h-96 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Michael Chen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white">
                      Michael Chen
                    </h3>
                    <p className="text-[#f5d648] font-medium">
                      Head of Private Equity
                    </p>
                    <p className="text-gray-200 mt-2">
                      Ex-KKR, specializes in technology investments
                    </p>
                    <div className="flex gap-3 mt-4">
                      <a
                        href="#"
                        className="text-white hover:text-[#f5d648] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-[#f5d648] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-br from-[#ff6700] to-[#f5d648] text-white px-3 py-1 rounded-full text-sm font-medium">
                  PE
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group slide-in">
              <div className="relative overflow-hidden rounded-xl mb-4 h-96 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
                  alt="David Rodriguez"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white">
                      David Rodriguez
                    </h3>
                    <p className="text-[#f5d648] font-medium">
                      Chief Risk Officer
                    </p>
                    <p className="text-gray-200 mt-2">
                      Former Goldman Sachs MD, risk management expert
                    </p>
                    <div className="flex gap-3 mt-4">
                      <a
                        href="#"
                        className="text-white hover:text-[#f5d648] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-[#f5d648] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-br from-[#ff6700] to-[#f5d648] text-white px-3 py-1 rounded-full text-sm font-medium">
                  CRO
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 fade-in">
            <button className="border-2 border-[#f5d648] text-gray-800 hover:bg-[#f5d648] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
              View Full Leadership Team
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ff6700]/10 to-[#f5d648]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRjY3MDAiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
                Elevate
              </span>{" "}
              Your Portfolio?
            </h2>
            <p className="text-xl text-gray-700 mb-8 fade-in">
              Join our exclusive network of investors and gain access to premium
              opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in">
              <button className="bg-gradient-to-r from-[#ff6700] to-[#f5d648] hover:from-[#e65c00] hover:to-[#e6c642] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Investor Call
              </button>
              <button className="border-2 border-[#f5d648] hover:bg-[#f5d648]/10 text-gray-800 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                Download Investment Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
