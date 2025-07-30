import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const ContactUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
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
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">
              Contact
            </span>{" "}
            Our Team
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto fade-in text-gray-200 font-medium">
            Let's discuss how we can help you achieve your financial goals
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">Touch</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our team is ready to answer your questions and discuss investment opportunities tailored to your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#ff6700]/10 to-[#f5d648]/10 p-3 rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#ff6700]/10 to-[#f5d648]/10 p-3 rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f5d648]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-gray-600">investments@exquisite.com</p>
                    <p className="text-gray-500 text-sm">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#ff6700]/10 to-[#f5d648]/10 p-3 rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                    <p className="text-gray-600">450 Park Avenue, 20th Floor</p>
                    <p className="text-gray-600">New York, NY 10022</p>
                    <p className="text-gray-500 text-sm">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 slide-in">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5d648] focus:border-[#ff6700] outline-none transition-all"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5d648] focus:border-[#ff6700] outline-none transition-all"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5d648] focus:border-[#ff6700] outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5d648] focus:border-[#ff6700] outline-none transition-all"
                      placeholder="+1 (___) ___-____"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5d648] focus:border-[#ff6700] outline-none transition-all bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="media">Media Inquiry</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5d648] focus:border-[#ff6700] outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="consent"
                      type="checkbox"
                      className="h-4 w-4 text-[#ff6700] focus:ring-[#f5d648] border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-[#ff6700] hover:underline">privacy policy</a> and terms
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ff6700] to-[#f5d648] hover:from-[#e65c00] hover:to-[#e6c642] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">Global</span> Offices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in">
              With locations in major financial hubs worldwide, we're always close to our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                address: "450 Park Avenue, 20th Floor\nNew York, NY 10022",
                phone: "+1 (212) 555-1000",
                image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              },
              {
                city: "London",
                address: "20 Berkeley Square\nMayfair, London W1J 6EQ",
                phone: "+44 20 5555 2000",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              },
              {
                city: "Singapore",
                address: "6 Battery Road\n#10-01, Singapore 049909",
                phone: "+65 6555 3000",
                image: "https://images.unsplash.com/photo-1532222235009-ff348a8e36a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              }
            ].map((office, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 slide-in transform transition-all hover:scale-[1.02] hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.city} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                  <div className="flex items-start gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff6700] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600 whitespace-pre-line">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f5d648]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                </div>
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
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6700] to-[#f5d648]">Invest</span> With Us?
            </h2>
            <p className="text-xl text-gray-700 mb-8 fade-in">
              Schedule a consultation with one of our investment specialists today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in">
              <button 
                onClick={() => navigate('/investment-opportunities')}
                className="bg-gradient-to-r from-[#ff6700] to-[#f5d648] hover:from-[#e65c00] hover:to-[#e6c642] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Opportunities
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="border-2 border-[#f5d648] hover:bg-[#f5d648]/10 text-gray-800 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Learn About Us
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

export default ContactUs;