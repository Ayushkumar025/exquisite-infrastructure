import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const OurCompanies = () => {
  const navigate = useNavigate();
  const [activeCompany, setActiveCompany] = useState(null);

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

  const companies = [
    {
      id: 1,
      name: "Exquisite Entertainment",
      tagline: "Award-winning content creation",
      category: "ENTERTAINMENT PRODUCTION",
      since: "2015",
      color: "#f5d648",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Exquisite Entertainment is a premier production house specializing in high-quality film, television, and digital content. We combine artistic vision with commercial viability to create compelling stories that resonate globally.",
      services: [
        "Feature Film Production",
        "Television Series Development",
        "Streaming Content Creation",
        "Commercial Production",
        "Post-Production Services"
      ],
      achievements: [
        "Produced 12 award-winning feature films",
        "Created 5 successful TV series",
        "Over 500 million digital views",
        "Partnerships with major streaming platforms"
      ],
      stats: [
        { label: "Projects Completed", value: "85+" },
        { label: "Industry Awards", value: "32" },
        { label: "Annual Revenue", value: "$120M" }
      ]
    },
    {
      id: 2,
      name: "Exquisite Construction",
      tagline: "Luxury property development",
      category: "REAL ESTATE & DESIGN",
      since: "2012",
      color: "#ff6700",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Exquisite Construction transforms visions into architectural masterpieces. We specialize in high-end residential and commercial properties, delivering exceptional quality and innovative design solutions.",
      services: [
        "Luxury Home Construction",
        "Commercial Development",
        "Interior Design",
        "Property Renovation",
        "Sustainable Building"
      ],
      achievements: [
        "Over 200 luxury properties developed",
        "LEED Certified projects",
        "Featured in Architectural Digest",
        "5-star client satisfaction rating"
      ],
      stats: [
        { label: "Projects Completed", value: "200+" },
        { label: "Design Awards", value: "18" },
        { label: "Annual Revenue", value: "$380M" }
      ]
    }
  ];

  const toggleCompanyDetails = (companyId) => {
    setActiveCompany(activeCompany === companyId ? null : companyId);
  };

  return (
    <div><Navbar/>
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ff6700]/10 to-[#f5d648]/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRjY3MDAiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
              Companies
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in text-gray-700 font-medium">
            Discover the diverse portfolio of businesses under the Exquisite Investments umbrella
          </p>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {companies.map((company) => (
              <div key={company.id} className="group relative overflow-hidden rounded-3xl shadow-2xl slide-in h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-1" style={{ backgroundColor: company.color }}></div>
                      <span className="text-sm font-bold tracking-widest" style={{ color: company.color }}>
                        {company.category}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {company.name}
                    </h3>
                    <p className="text-gray-200 mb-6 text-lg">
                      {company.tagline}
                    </p>
                    <div className="flex flex-wrap gap-3 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                      {company.services.slice(0, 3).map((service, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 rounded-full text-sm font-medium"
                          style={{ backgroundColor: `${company.color}20`, color: company.color }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div 
                  className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
                  style={{ 
                    backgroundColor: company.color,
                    color: company.color === "#f5d648" ? "rgb(17, 24, 39)" : "white"
                  }}
                >
                  Since {company.since}
                </div>
                <button 
                  onClick={() => toggleCompanyDetails(company.id)}
                  className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold py-3 px-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105"
                  style={{ 
                    backgroundColor: company.color,
                    color: company.color === "#f5d648" ? "rgb(17, 24, 39)" : "white"
                  }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Company Details */}
      {activeCompany && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setActiveCompany(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {companies.filter(c => c.id === activeCompany).map(company => (
              <div key={company.id} className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                  <div className="lg:w-1/2">
                    <img 
                      src={company.image} 
                      alt={company.name} 
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-1" style={{ backgroundColor: company.color }}></div>
                      <span className="text-sm font-bold tracking-widest" style={{ color: company.color }}>
                        {company.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{company.name}</h2>
                    <p className="text-xl text-gray-700 mb-6">{company.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {company.stats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <p className="text-3xl font-bold mb-1" style={{ color: company.color }}>{stat.value}</p>
                          <p className="text-gray-600 text-sm">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Services</h3>
                    <ul className="space-y-3">
                      {company.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <svg 
                            className="flex-shrink-0 h-5 w-5 mt-1 mr-2" 
                            style={{ color: company.color }} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
                    <ul className="space-y-3">
                      {company.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg 
                            className="flex-shrink-0 h-5 w-5 mt-1 mr-2" 
                            style={{ color: company.color }} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 text-center">Ready to Connect?</h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      className="py-3 px-8 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      style={{ 
                        backgroundColor: company.color,
                        color: company.color === "#f5d648" ? "rgb(17, 24, 39)" : "white"
                      }}
                    >
                      Contact {company.name.split(" ")[0]}
                    </button>
                    <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                      Request Case Studies
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
              By The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
                Numbers
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in">
              Our companies have made significant impacts in their respective industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200 slide-in transform transition-all hover:scale-[1.02] hover:border-[#f5d648]/50 shadow-sm hover:shadow-md">
              <h3 className="text-5xl font-bold text-[#ff6700] mb-2">150+</h3>
              <p className="text-gray-600">Projects Completed</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-[#ff6700] to-[#f5d648] rounded-full"></div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 slide-in transform transition-all hover:scale-[1.02] hover:border-[#ff6700]/50 shadow-sm hover:shadow-md">
              <h3 className="text-5xl font-bold text-[#f5d648] mb-2">24</h3>
              <p className="text-gray-600">Industry Awards</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-[#f5d648] to-[#ff6700] rounded-full"></div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 slide-in transform transition-all hover:scale-[1.02] hover:border-[#f5d648]/50 shadow-sm hover:shadow-md">
              <h3 className="text-5xl font-bold text-[#ff6700] mb-2">$500M</h3>
              <p className="text-gray-600">Combined Revenue</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-[#ff6700] via-[#ff9248] to-[#f5d648] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ff6700]/10 to-[#f5d648]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
              Want to Learn More About Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
                Companies
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 fade-in">
              Contact our team for detailed information about our business operations and investment opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in">
              <button 
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-[#ff6700] to-[#f5d648] hover:from-[#e65c00] hover:to-[#e6c642] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Our Team
              </button>
              <button className="border-2 border-[#f5d648] hover:bg-[#f5d648]/10 text-gray-800 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                Request Company Profiles
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default OurCompanies;