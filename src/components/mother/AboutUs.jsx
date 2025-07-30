import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Our team"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">Story</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto fade-in text-gray-200 font-medium">
            Building wealth through vision, integrity, and exceptional opportunities
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 slide-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Our office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                  <div className="bg-gradient-to-r from-[#ff6700] to-[#f5d648] text-white px-6 py-3 rounded-full text-sm font-medium">
                    Since 2008
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">Mission</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At Exquisite Investments, we redefine private wealth management by combining institutional-grade investment strategies with personalized service.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#ff6700]/10 to-[#f5d648]/10 p-3 rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Performance Focused</h3>
                    <p className="text-gray-600">We pursue absolute returns regardless of market conditions, leveraging our proprietary investment framework.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#ff6700]/10 to-[#f5d648]/10 p-3 rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f5d648]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Alignment of Interests</h3>
                    <p className="text-gray-600">We invest alongside our clients, ensuring our success is directly tied to your financial outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#ff6700]/10 to-[#f5d648]/10 p-3 rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                    <p className="text-gray-600">With offices in 6 financial hubs worldwide, we identify and execute on opportunities across all major markets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">Journey</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto fade-in text-lg">
              From humble beginnings to becoming a leader in alternative investments
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#ff6700] to-[#f5d648] transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  year: "2008",
                  title: "Foundation",
                  description: "Founded during the financial crisis with a vision for alternative investment strategies",
                  side: "left"
                },
                {
                  year: "2012",
                  title: "First Fund",
                  description: "Launched our inaugural private equity fund, delivering 28% annualized returns",
                  side: "right"
                },
                {
                  year: "2016",
                  title: "Global Expansion",
                  description: "Opened offices in London and Singapore to access international markets",
                  side: "left"
                },
                {
                  year: "2020",
                  title: "ESG Integration",
                  description: "Fully incorporated environmental, social and governance factors across all investments",
                  side: "right"
                },
                {
                  year: "2023",
                  title: "$2.4B AUM",
                  description: "Crossed $2.4 billion in assets under management with 150+ successful investments",
                  side: "left"
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${item.side === "left" ? "md:justify-start" : "md:justify-end"} items-center slide-in`}>
                  <div className={`md:absolute md:w-5/12 p-6 rounded-xl ${item.side === "left" ? "md:left-0 md:text-right" : "md:right-0 md:text-left"} ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}`}>
                    <h3 className="text-2xl font-bold text-[#f5d648] mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-3">{item.description}</p>
                    <div className="text-[#ff6700] font-bold">{item.year}</div>
                  </div>
                  <div className={`hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff6700] to-[#f5d648] transform -translate-x-1/2 ${item.side === "left" ? "md:ml-6" : "md:mr-6"}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in text-lg">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description: "We maintain the highest ethical standards in all our dealings",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                bg: "bg-[#ff6700]/10",
                color: "text-[#ff6700]"
              },
              {
                title: "Excellence",
                description: "We pursue exceptional results through rigorous analysis and execution",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                bg: "bg-[#f5d648]/10",
                color: "text-[#f5d648]"
              },
              {
                title: "Innovation",
                description: "We constantly evolve our strategies to capitalize on emerging opportunities",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                bg: "bg-[#ff9248]/10",
                color: "text-[#ff9248]"
              },
              {
                title: "Transparency",
                description: "We provide clear, comprehensive reporting on all investments",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                bg: "bg-[#ff6700]/10",
                color: "text-[#ff6700]"
              },
              {
                title: "Partnership",
                description: "We build long-term relationships based on trust and mutual success",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                bg: "bg-[#f5d648]/10",
                color: "text-[#f5d648]"
              },
              {
                title: "Discipline",
                description: "We adhere to strict investment criteria and risk management protocols",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                bg: "bg-[#ff9248]/10",
                color: "text-[#ff9248]"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 slide-in transform transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <div className={`${value.bg} ${value.color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
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
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">Partner</span> With Us?
            </h2>
            <p className="text-xl text-gray-700 mb-8 fade-in">
              Discover how our approach can help you achieve your financial objectives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-[#ff6700] to-[#f5d648] hover:from-[#e65c00] hover:to-[#e6c642] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Our Team
              </button>
              <button 
                onClick={() => navigate('/investment-opportunities')}
                className="border-2 border-[#f5d648] hover:bg-[#f5d648]/10 text-gray-800 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
    
  );
};

export default AboutUs;