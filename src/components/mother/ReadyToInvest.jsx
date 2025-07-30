import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const ReadyToInvest = ({ 
  // Content props
  title = "Ready to Invest With Us?", 
  titleHighlight = "Invest",
  subtitle = "Schedule a consultation with one of our investment specialists today",
  primaryButtonText = "View Opportunities",
  secondaryButtonText = "Learn About Us",
  primaryButtonLink = "/investment-opportunities",
  secondaryButtonLink = "/about-us",
  stats = null,
  features = [
    "Diversified Portfolio Options",
    "Personalized Investment Strategies",
    "Transparent Fee Structure",
    "24/7 Portfolio Access",
    "Tax Optimization Strategies"
  ],
  testimonials = [
    {
      name: "Michael Chen",
      role: "Wealth Manager",
      quote: "Our clients have seen an average 22% ROI since partnering with Exquisite Capital.",
      avatar: ""
    },
    {
      name: "Sarah Johnson",
      role: "Portfolio Manager",
      quote: "Working with Exquisite has transformed our investment strategy. Their insights consistently outperform the market.",
      avatar: ""
    }
  ],
  
  // Style props
  gradientFrom = "#ff6700",
  gradientTo = "#f5d648",
  backgroundImage = null,
  overlayOpacity = 0.1,
  textColor = "gray-800",
  
  // Layout props
  align = "center",
  buttonLayout = "row",
  padding = "py-28",
  
  // Feature toggles
  showPattern = true,
  showStats = true,
  showTestimonial = true,
  showTrustBadges = true,
  showFeatures = true,
  showForm = true
}) => {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    interests: []
  });

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".fade-in, .slide-in, .pop-in");
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

  useEffect(() => {
    if (showTestimonial && testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showTestimonial, testimonials.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          interests: [...prev.interests, value]
        };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter(item => item !== value)
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your submission! We'll contact you shortly.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      investmentAmount: '',
      interests: []
    });
  };

  const alignmentClasses = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start mr-auto",
    right: "text-right items-end ml-auto"
  };

  const investmentOptions = [
    "Real Estate",
    "Stocks & ETFs",
    "Private Equity",
    "Cryptocurrency",
    "Commodities",
    "Startups",
    "Fixed Income"
  ];

  return (
    <>
      <Navbar/>
      <section className={`relative overflow-hidden ${padding}`}
        style={backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}>
        
        {/* Background overlay */}
        <div className="absolute inset-0 z-0" 
             style={{
               background: `linear-gradient(to right, ${gradientFrom}${Math.round(overlayOpacity * 255).toString(16).padStart(2, '0')}, ${gradientTo}${Math.round(overlayOpacity * 255).toString(16).padStart(2, '0')})`,
             }}></div>
        
        {/* Pattern background */}
        {showPattern && (
          <div className="absolute inset-0 opacity-10 z-0">
            <div 
              className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRjY3MDAiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"
              style={{ 
                maskImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,1), rgba(0,0,0,0.3))`,
                WebkitMaskImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,1), rgba(0,0,0,0.3))`
              }}
            ></div>
          </div>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-6xl ${alignmentClasses[align]} flex flex-col`}>
            {/* Title with highlighted word */}
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in text-${textColor}`}>
              {title.split(titleHighlight)[0]}
              <span className="text-transparent bg-clip-text" style={{backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`}}>
                {titleHighlight}
              </span>
              {title.split(titleHighlight)[1]}
            </h2>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl mb-8 fade-in text-${textColor}/90 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
              {subtitle}
            </p>
            
            {/* Stats row */}
            {showStats && stats && (
              <div className="flex flex-wrap justify-center gap-8 mb-12 slide-in">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-4 pop-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="text-4xl font-bold" style={{color: gradientFrom}}>{stat.value}</div>
                    <div className={`text-lg text-${textColor}/80`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Features */}
            {showFeatures && features && (
              <div className="mb-12 w-full slide-in">
                <h3 className={`text-2xl font-semibold mb-6 text-${textColor}`}>Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30 flex items-start">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`}}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-${textColor}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Testimonial */}
            {showTestimonial && testimonials && (
              <div className="w-full mb-12 max-w-4xl mx-auto">
                <h3 className={`text-2xl font-semibold mb-6 text-${textColor} ${align === 'center' ? 'text-center' : ''}`}>What Our Partners Say</h3>
                <div className="relative h-64">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl p-8 transition-all duration-500 ${index === activeTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 rounded-full bg-gray-200 mr-4 overflow-hidden flex items-center justify-center">
                          {testimonial.avatar ? (
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="text-2xl font-bold" style={{color: gradientFrom}}>
                              {testimonial.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-lg">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                      <p className="italic text-gray-700 text-lg">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  ))}
                  {testimonials.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all ${index === activeTestimonial ? 'bg-orange-500 w-6' : 'bg-gray-300'}`}
                          aria-label={`View testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Trust badges */}
            {showTrustBadges && (
              <div className="flex flex-wrap justify-center gap-6 mb-8 slide-in">
                {['Forbes', 'Bloomberg', 'Financial Times', 'WSJ', 'CNBC'].map((badge, index) => (
                  <div key={index} className="bg-white/80 px-6 py-2 rounded-full text-sm font-medium shadow-sm flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Featured in {badge}
                  </div>
                ))}
              </div>
            )}
            
            {/* Contact Form */}
            {showForm && (
              <div className="w-full max-w-4xl mx-auto mb-12 slide-in">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2 p-8" style={{background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`}}>
                      <h3 className="text-2xl font-bold text-white mb-4">Get Started</h3>
                      <p className="text-white/90 mb-6">Fill out this form and one of our investment specialists will contact you within 24 hours.</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs text-white/70">Call us directly</div>
                            <div className="font-medium text-white">+1 (555) 123-4567</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs text-white/70">Email us</div>
                            <div className="font-medium text-white">invest@exquisitecapital.com</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 p-8">
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-1">Investment Amount</label>
                            <select
                              id="investmentAmount"
                              name="investmentAmount"
                              value={formData.investmentAmount}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            >
                              <option value="">Select an amount</option>
                              <option value="10k-50k">$10,000 - $50,000</option>
                              <option value="50k-100k">$50,000 - $100,000</option>
                              <option value="100k-250k">$100,000 - $250,000</option>
                              <option value="250k-500k">$250,000 - $500,000</option>
                              <option value="500k+">$500,000+</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Investment Interests</label>
                            <div className="grid grid-cols-2 gap-2">
                              {investmentOptions.map((option, index) => (
                                <div key={index} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id={`interest-${index}`}
                                    name="interests"
                                    value={option}
                                    checked={formData.interests.includes(option)}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                  />
                                  <label htmlFor={`interest-${index}`} className="ml-2 block text-sm text-gray-700">
                                    {option}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <button
                            type="submit"
                            className="w-full mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                          >
                            Schedule Consultation
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Buttons */}
            <div className={`flex gap-4 justify-${align === 'center' ? 'center' : align} flex-${buttonLayout}`}>
              <button 
                onClick={() => navigate(primaryButtonLink)}
                className={`bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] hover:from-[${gradientFrom}]/90 hover:to-[${gradientTo}]/90 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[${gradientFrom}]/30 group`}
                style={{
                  boxShadow: `0 10px 20px -5px ${gradientFrom}30`
                }}
              >
                {primaryButtonText}
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <button 
                onClick={() => navigate(secondaryButtonLink)}
                className={`border-2 border-[${gradientTo}] hover:bg-[${gradientTo}]/10 text-${textColor} font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 group`}
              >
                {secondaryButtonText}
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

// Default props for the stats
ReadyToInvest.defaultProps = {
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "$2.5B", label: "Assets Managed" },
    { value: "98%", label: "Client Satisfaction" }
  ]
};

export default ReadyToInvest;