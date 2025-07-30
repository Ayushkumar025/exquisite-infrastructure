import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Calendar, Clock, Eye, Share2, ThumbsUp, MessageSquare, Download, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Entertainment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample movie data - you can replace with real data
  const movies = [
    {
      id: 1,
      title: "Oppenheimer",
      rating: "16+",
      releaseDate: "19.3.26",
      status: "UPCOMING",
      genre: "Biography, Drama, History",
      duration: "3h 0min",
      rating_score: 8.3,
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop",
      description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
    },
    {
      id: 2,
      title: "Dune: Part Two",
      rating: "12+",
      releaseDate: "15.3.24",
      status: "RELEASED",
      genre: "Sci-Fi, Adventure, Drama",
      duration: "2h 46min",
      rating_score: 8.7,
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
      description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators."
    },
    {
      id: 3,
      title: "The Batman",
      rating: "15+",
      releaseDate: "4.3.22",
      status: "RELEASED",
      genre: "Action, Crime, Drama",
      duration: "2h 56min",
      rating_score: 7.8,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind cryptic messages."
    },
    {
      id: 4,
      title: "Avatar: The Way of Water",
      rating: "12+",
      releaseDate: "16.12.22",
      status: "RELEASED",
      genre: "Action, Adventure, Fantasy",
      duration: "3h 12min",
      rating_score: 7.6,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [movies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentMovie = movies[currentSlide];

  return (
    <div className="relative w-full bg-black">
      {/* Hero Slider Section */}
      <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url(${currentMovie.image})`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-2xl">
            {/* Age Rating */}
            <div className="mb-4">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded text-sm font-semibold">
                {currentMovie.rating} FOR GROWN-UPS
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              {currentMovie.title}
            </h1>

            {/* Movie Details */}
            <div className="flex items-center space-x-6 mb-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-[#F5D648] fill-current" />
                <span className="font-semibold">{currentMovie.rating_score}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#FF6700]" />
                <span>{currentMovie.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-[#F5D648]" />
                <span>{currentMovie.releaseDate}</span>
              </div>
            </div>

            {/* Genre */}
            <p className="text-white/70 text-lg mb-6">{currentMovie.genre}</p>

            {/* Description */}
            <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-xl">
              {currentMovie.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <button className="bg-gradient-to-r from-[#FF6700] to-[#F5D648] hover:from-[#e55a00] hover:to-[#e8c73d] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg">
                <Play className="w-5 h-5 fill-current" />
                <span>WATCH TRAILER</span>
              </button>
              
              <div className="flex items-center space-x-4">
                <button 
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    currentMovie.status === 'RELEASED' 
                      ? 'bg-white/20 text-white hover:bg-white/30 border border-[#FF6700]/30' 
                      : 'bg-[#FF6700] text-white hover:bg-[#e55a00] shadow-lg shadow-[#FF6700]/30'
                  }`}
                >
                  {currentMovie.status}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Release Date Display */}
        <div className="absolute top-8 right-8 text-right">
          <p className="text-white/60 text-sm font-light tracking-wider mb-2">IN CINEMAS</p>
          <p className="text-white text-6xl font-bold tracking-wider">
            {currentMovie.releaseDate}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-gradient-to-r hover:from-[#FF6700]/20 hover:to-[#F5D648]/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-[#FF6700]/30 hover:border-[#F5D648]/50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-gradient-to-r hover:from-[#FF6700]/20 hover:to-[#F5D648]/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-[#FF6700]/30 hover:border-[#F5D648]/50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-[#FF6700] to-[#F5D648] shadow-lg shadow-[#FF6700]/40' 
                : 'bg-white/30 hover:bg-white/60 border border-[#FF6700]/20'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-[#FF6700] to-[#F5D648] transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / movies.length) * 100}%` }}
        />
      </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 left-8 text-white/60 text-sm">
          {String(currentSlide + 1).padStart(2, '0')} / {String(movies.length).padStart(2, '0')}
        </div>
      </div>

      {/* Released Movies Section */}
      <div className="bg-black py-16 px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              RELEASED MOVIES
            </h2>
            <button className="bg-transparent border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>VIEW ALL</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {[
              {
                title: "UI",
                image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
                isNew: true
              },
              {
                title: "DEVARA PART - 1",
                image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=450&fit=crop",
                isNew: false
              },
              {
                title: "KANGUVA",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
                isNew: false
              },
              {
                title: "KALKI 2898 AD",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
                isNew: false
              },
              {
                title: "THANGALAAN",
                image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
                isNew: false
              },
              {
                title: "ALIEN",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
                isNew: false
              }
            ].map((movie, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Movie Poster */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-[#FF6700] hover:bg-[#F5D648] text-white p-4 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-current" />
                    </button>
                  </div>

                  {/* New Badge */}
                  {movie.isNew && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-[#FF6700] to-[#F5D648] text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </div>
                  )}
                </div>

                {/* Movie Title */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm lg:text-base text-center group-hover:text-[#F5D648] transition-colors duration-300">
                    {movie.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="bg-black py-16 px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Videos Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#FF6700] mb-8">
              VIDEOS
            </h2>


      {/* Video Player Section */}
     <div className="mb-16">
  <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl">
    {/* Video Player */}
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    
    {/* Video Info Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-2">
          Settagella Lyrical | KD Kannada | KVN | Mika Singh | Prem's | Arjun Janya | Dhruva Sarja
        </h3>
        <div className="flex items-center space-x-6 text-white/80">
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-[#F5D648]" />
            <span>41M Views</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-[#FF6700]" />
            <span>Released: 15 June 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-[#FF6700]" />
            <span>3:45 mins</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          
          {/* Share Button */}
          <button className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-[#FF6700]/30 hover:border-[#F5D648]/50">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
        
        {/* Video Actions */}
        <div className="flex justify-between items-center mt-6 px-4">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-white hover:text-[#F5D648] transition-colors">
              <ThumbsUp className="w-5 h-5" />
              <span>12.5K</span>
            </button>
            <button className="flex items-center space-x-2 text-white hover:text-[#FF6700] transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>1.2K Comments</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 bg-[#FF6700] hover:bg-[#F5D648] text-white px-6 py-2 rounded-full transition-colors">
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Video Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Search video..."
            className="w-full bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg border border-gray-700 focus:border-[#FF6700] focus:outline-none"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="relative">
          <select className="bg-gray-800 text-white px-6 py-3 rounded-lg border border-gray-700 focus:border-[#FF6700] focus:outline-none appearance-none pr-10">
            <option>All Categories</option>
            <option>Music Videos</option>
            <option>Trailers</option>
            <option>Behind the Scenes</option>
          </select>
          <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {[
          {
            title: "Settagella Lyrical | KD Kannada | KVN | Mika Singh | Prem's | Arjun Janya | Dhruva Sarja...",
            views: "41M",
            image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=250&fit=crop"
          },
          {
            title: "The First Roar - Jana Nayagan | Thalapathy Vijay | H Vinoth | Anirudh | Pooja Hegde | KVN...",
            views: "31M+",
            image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=250&fit=crop"
          },
          {
            title: "The Beast roars, Bengaluru scores | 20000+ pre-registrations in 24 hours 🔥 | KVN...",
            views: "2.5M+",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
          }
        ].map((video, index) => (
          <div 
            key={index}
            className="group bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={video.image} 
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-[#FF6700] hover:bg-[#F5D648] text-white p-4 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-8 h-8 fill-current" />
                </button>
              </div>

              {/* Views Badge */}
              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.views} VIEWS
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="text-white text-sm font-medium line-clamp-2 group-hover:text-[#F5D648] transition-colors duration-300">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="text-center">
        <button className="bg-[#FF6700] hover:bg-[#F5D648] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto">
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Let's Connect Section */}
      <div className="bg-black py-16 px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#FF6700] mb-4">LET'S CONNECT</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We'd love to hear from you! Reach out to us for collaborations, inquiries, or just to say hello.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-[#FF6700] to-[#F5D648] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                  <p className="text-white/80">
                    123 Cinema Street, Hollywood<br />
                    Los Angeles, CA 90028<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-[#FF6700] to-[#F5D648] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-white/80">
                    info@entertainmenthub.com<br />
                    support@entertainmenthub.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-[#FF6700] to-[#F5D648] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-white/80">
                    +1 (555) 123-4567<br />
                    Mon-Fri: 9AM - 6PM
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 hover:bg-[#4267B2] text-white p-3 rounded-full transition-colors duration-300">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-[#1DA1F2] text-white p-3 rounded-full transition-colors duration-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-[#E1306C] text-white p-3 rounded-full transition-colors duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-[#FF0000] text-white p-3 rounded-full transition-colors duration-300">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FF6700]/30">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.453105466597!2d-118.32684292453191!3d34.10088007313969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf20e4c82873%3A0x14015754d926dadb!2sHollywood%20Walk%20of%20Fame!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                className="w-full h-full" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
              
              {/* Map Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Entertainment;