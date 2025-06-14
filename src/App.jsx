import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Sparkles,
  Star,
  Languages,
  Camera,
  Users,
  Gift,
  LocateIcon
} from 'lucide-react';
import image1 from './assets/i2.jpg'
import image2 from './assets/main_image.jpg'

// Floating Animation Component
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Sparkles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 opacity-60" />
        </div>
      ))}
      
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 1.5}s`
          }}
        >
          <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-pink-400 opacity-50" />
        </div>
      ))}
      
      {/* Floating Stars */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        >
          <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-purple-400 opacity-40" />
        </div>
      ))}
    </div>
  );
};

// Gradient Blur Orbs
const GradientOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse blur-3xl"></div>
      <div className="absolute top-1/2 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-15 animate-pulse blur-3xl animation-delay-2s"></div>
      <div className="absolute bottom-10 left-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-rose-600 to-orange-600 rounded-full opacity-10 animate-pulse blur-3xl animation-delay-4s"></div>
    </div>
  );
};

// Language Toggle Component
const LanguageToggle = ({ isKannada, setIsKannada }) => {
  return (
    <button
      onClick={() => setIsKannada(!isKannada)}
      className="fixed top-4 right-4 z-50 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 sm:px-4 sm:py-2 flex items-center gap-2 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
    >
      <Languages className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="text-xs sm:text-sm font-medium">
        {isKannada ? 'English' : 'ಕನ್ನಡ'}
      </span>
    </button>
  );
};

// Hero Section
const HeroSection = ({ isKannada }) => {
  const content = {
    english: {
      title: "Engagement Ceremony",
      subtitle: "Two Hearts, One Soul",
      groomName: "Ramesh reddy",
      brideName: "Vijayalakshmi",
      quote: "Love is not just looking at each other, it's looking in the same direction",
      date: "15th June  Sunday"
    },
    kannada: {
      title: "ನಿಶ್ಚಿತಾರ್ಥ ಸಮಾರಂಭ",
      subtitle: "ಎರಡು ಹೃದಯಗಳು, ಒಂದು ಆತ್ಮ",
      groomName: "ರಮೇಶ್ ರೆಡ್ಡಿ",
      brideName: "ವಿಜಯಲಕ್ಷ್ಮಿ",
      quote: "ಪ್ರೀತಿ ಎಂದರೆ ಒಬ್ಬರನ್ನೊಬ್ಬರು ನೋಡುವುದು ಮಾತ್ರವಲ್ಲ, ಒಂದೇ ದಿಕ್ಕಿನಲ್ಲಿ ನೋಡುವುದು",
      date: "೧೫ ಜೂನ್, ಭಾನುವಾರ"
    }
  };

  const currentContent = isKannada ? content.kannada : content.english;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8">
      {/* Background with blur effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-4 animate-pulse-slow leading-tight">
            {currentContent.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light tracking-wide px-2">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Couple Names with Animation */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
            <div className="animate-slide-in-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-glow">
                {currentContent.groomName}
              </h2>
            </div>
            
            <div className="flex items-center gap-2 animate-pulse">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" />
              
              <span className="text-white/60 text-sm sm:text-base">&</span>
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400" />
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent animate-glow animation-delay-1s">
                {currentContent.brideName}
              </h2>
            </div>
          </div>
        </div>

        {/* Couple Images Placeholder */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="relative group">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-gray-800 flex flex-col items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                <img src={image1} alt="" className='w-full h-full sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full  text-white/60 mb-2' />
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-pink-400 animate-pulse hidden sm:block" />

          <div className="relative group">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-1 animate-pulse-slow animation-delay-1s">
              <div className="w-full h-full rounded-full bg-gray-800 flex flex-col items-center justify-center border-4 border-white/20 backdrop-blur-sm">
                {/* <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-white/60 mb-2" /> */}
                <img src={image2} alt="" className='w-full h-full sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full  text-white/60 mb-2' />
                {/* <span className="text-white/80 text-xs sm:text-sm text-center px-2">Bride Photo</span> */}
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 mx-2 sm:mx-0">
          <p className="text-base sm:text-lg md:text-xl text-white/90 italic font-light leading-relaxed">
            "{currentContent.quote}"
          </p>
        </div>

        {/* Date */}
        <div className="flex items-center justify-center gap-2 text-amber-400">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-lg sm:text-xl font-semibold">{currentContent.date}</span>
        </div>
      </div>
    </section>
  );
};

// Family Section
const FamilySection = ({ isKannada }) => {
  const content = {
    english: {
      title: "Our Families",
      subtitle: "Blessed by the love and support of our families",
      groomFamily: "Groom's Family",
      brideFamily: "Bride's Family",
      father: "Father",
      mother: "Mother"
    },
    kannada: {
      title: "ನಮ್ಮ ಕುಟುಂಬಗಳು",
      subtitle: "ನಮ್ಮ ಕುಟುಂಬಗಳ ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದದಿಂದ ಧನ್ಯರಾಗಿದ್ದೇವೆ",
      groomFamily: "ವರನ ಕುಟುಂಬ",
      brideFamily: "ವಧುವಿನ ಕುಟುಂಬ",
      father: "ತಂದೆ",
      mother: "ತಾಯಿ"
    }
  };

  const currentContent = isKannada ? content.kannada : content.english;

  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight">
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Groom's Family */}
          <div className="group">
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
              <div className="text-center mb-6 sm:mb-8">
                <Users className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentContent.groomFamily}</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">F</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/60 text-xs sm:text-sm">{currentContent.father}</p>
                    <p className="text-white font-semibold text-base sm:text-lg truncate">Subbireddy</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">M</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/60 text-xs sm:text-sm">{currentContent.mother}</p>
                    <p className="text-white font-semibold text-base sm:text-lg truncate">Shivamma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bride's Family */}
          <div className="group">
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
              <div className="text-center mb-6 sm:mb-8">
                <Users className="w-12 h-12 sm:w-16 sm:h-16 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentContent.brideFamily}</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">F</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/60 text-xs sm:text-sm">{currentContent.father}</p>
                    <p className="text-white font-semibold text-base sm:text-lg truncate">Srinivasulureddy</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">M</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/60 text-xs sm:text-sm">{currentContent.mother}</p>
                    <p className="text-white font-semibold text-base sm:text-lg truncate">Shyamalamma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Timeline Section
const TimelineSection = ({ isKannada }) => {
  const content = {
    english: {
      title: "Ceremony Timeline",
      subtitle: "Join us in celebrating our special moments",
      events: [
        { time: "1:30 PM", event: "Lunch ", description: "Traditional feast and festivities" },

        { time: "3:00 PM", event: "Welcome & Blessings", description: "Traditional welcome ceremony" },
        { time: "3:45 PM", event: "Ring Exchange", description: "Exchange of engagement rings" },
        { time: "3:30 PM", event: "Photography", description: "Couple and family photos" },
      ]
    },
    kannada: {
      title: "ಸಮಾರಂಭದ ವೇಳಾಪಟ್ಟಿ",
      subtitle: "ನಮ್ಮ ವಿಶೇಷ ಕ್ಷಣಗಳನ್ನು ಆಚರಿಸಲು ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ",
      events: [
        { time: "1:30 PM", event: "ಊಟ ಮತ್ತು ಆಚರಣೆ", description: "ಸಾಂಪ್ರದಾಯಿಕ ದಾವತ್ತು ಮತ್ತು ಹಬ್ಬಾಚರಣೆ" }
,
        { time: "೩:೦೦ PM", event: "ಸ್ವಾಗತ ಮತ್ತು ಆಶೀರ್ವಾದ", description: "ಸಾಂಪ್ರದಾಯಿಕ ಸ್ವಾಗತ ಸಮಾರಂಭ" },
        { time: "3:45 PM", event: "ಉಂಗುರ ವಿನಿಮಯ", description: "ನಿಶ್ಚಿತಾರ್ಥದ ಉಂಗುರಗಳ ವಿನಿಮಯ" },
        { time: "೩:೩೦ PM", event: "ಛಾಯಾಗ್ರಹಣ", description: "ದಂಪತಿ ಮತ್ತು ಕುಟುಂಬದ ಫೋಟೋಗಳು" },
      ]
    }
  };

  const currentContent = isKannada ? content.kannada : content.english;

  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-tight">
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 px-4">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-60"></div>
          
          <div className="space-y-6 sm:space-y-8">
            {currentContent.events.map((item, index) => (
              <div key={index} className="relative flex items-center gap-6 sm:gap-8 group">
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-105 min-w-0">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 break-words">{item.event}</h3>
                        <p className="text-white/70 text-sm sm:text-base break-words">{item.description}</p>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-amber-400 flex-shrink-0">{item.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Venue Section
const VenueSection = ({ isKannada }) => {
  const content = {
    english: {
      title: "Venue Details",
      subtitle: "Where our hearts unite in celebration",
      // venue: "Grand Celebration Hall",
      address: "Bidarahalli, Bangalore Karnataka",
      facilities: [ "Parking Available", "Traditional Decorations", "Professional Photography"]
    },
    kannada: {
      title: "ಸ್ಥಳದ ವಿವರಗಳು",
      subtitle: "ನಮ್ಮ ಹೃದಯಗಳು ಆಚರಣೆಯಲ್ಲಿ ಒಂದಾಗುವ ಸ್ಥಳ",
      venue: "ಗ್ರಾಂಡ್ ಸೆಲೆಬ್ರೇಷನ್ ಹಾಲ್",
      address: "ಬಿದರಹಳ್ಳಿ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ",
      facilities: ["ಪಾರ್ಕಿಂಗ್ ಲಭ್ಯ", "ಸಾಂಪ್ರದಾಯಿಕ ಅಲಂಕಾರಗಳು", "ವೃತ್ತಿಪರ ಛಾಯಾಗ್ರಹಣ"]
    }
  };

  const currentContent = isKannada ? content.kannada : content.english;

  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight">
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 px-4">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center mb-6 sm:mb-8">
            <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-rose-400 mx-auto mb-4 animate-pulse" />
            {/* <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 break-words">{currentContent.venue}</h3> */}
            <p className="text-lg sm:text-xl text-white/80 break-words px-2">{currentContent.address}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {currentContent.facilities.map((facility, index) => (
              <div key={index} className="flex items-center gap-3 p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                <span className="text-white/90 text-sm sm:text-base break-words">{facility}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-rose-500/20 to-amber-500/20 rounded-2xl border border-rose-500/30">
            <p className="text-center text-white/90 italic text-sm sm:text-base break-words">
              {isKannada 
                ? "ದಯವಿಟ್ಟು ಸಮಯಕ್ಕೆ ಬನ್ನಿ ಮತ್ತು ನಮ್ಮ ಸಂತೋಷದ ಕ್ಷಣಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ"
                : "Please join us on time and share our moments of joy"
              }
            </p>
          </div>
          <br />
           <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.5862166877887!2d77.711925475078!3d13.06198978726173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzQzLjIiTiA3N8KwNDInNTIuMiJF!5e0!3m2!1sen!2sin!4v1749891889299!5m2!1sen!2sin" width="100%" height={400}  className="border-0 m-auto rounded-md" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           <br />
            <a href='https://maps.app.goo.gl/pWxsAKp9WTQCWfM47' target='_blank' className=" bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform duration-300 m-auto">
                    <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    <span>View Location</span>

                  </a>
            
        </div>

        
      </div>
      
    </section>
  );
};

// Contact Section
const ContactSection = ({ isKannada }) => {
  const content = {
    english: {
      title: "Get In Touch",
      subtitle: "For any queries or directions, feel free to contact us",
      phone: "Phone",
      email: "Email",
      location: "Location"
    },
    kannada: {
      title: "ಸಂಪರ್ಕಿಸಿ",
      subtitle: "ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ದಿಕ್ಕುಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
      phone: "ದೂರವಾಣಿ",
      email: "ಇಮೇಲ್",
      location: "ಸ್ಥಳ"
    }
  };

  const currentContent = isKannada ? content.kannada : content.english;

  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight">
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 px-4 break-words">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="group">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center">
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{currentContent.phone}</h3>
              <p className="text-white/70 text-sm sm:text-base break-all">+91 99001 97160</p>
             
            </div>
          </div>

          <div className="group">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center">
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{currentContent.email}</h3>
              <p className="text-white/70 text-sm sm:text-base break-all">ramesh@gmail.com</p>
            </div>
          </div>

          <div className="group sm:col-span-2 lg:col-span-1">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-rose-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{currentContent.location}</h3>
              <p className="text-white/70 text-sm sm:text-base break-words">Bidarahalli</p>
            </div>
          </div>
        </div>
      </div>
      <br />
     
    </section>
  );
};

// Quotes Section
const QuotesSection = ({ isKannada }) => {
  const content = {
    english: {
      title: "Blessings & Quotes",
      quotes: [
        {
          text: "Two souls with but a single thought, two hearts that beat as one",
          author: "Traditional"
        },
        {
          text: "In all the world, there is no heart for me like yours",
          author: "Maya Angelou"
        },
        {
          text: "The best thing to hold onto in life is each other",
          author: "Audrey Hepburn"
        }
      ]
    },
    kannada: {
      title: "ಆಶೀರ್ವಾದಗಳು ಮತ್ತು ಉಲ್ಲೇಖಗಳು",
      quotes: [
        {
          text: "ಒಂದೇ ಆಲೋಚನೆಯ ಎರಡು ಆತ್ಮಗಳು, ಒಂದಾಗಿ ಬಡಿಯುವ ಎರಡು ಹೃದಯಗಳು",
          author: "ಸಾಂಪ್ರದಾಯಿಕ"
        },
        {
          text: "ಇಡೀ ಜಗತ್ತಿನಲ್ಲಿ, ನಿಮ್ಮ ಹೃದಯದಂತಹ ಹೃದಯ ನನಗೆ ಇಲ್ಲ",
          author: "ಮಾಯಾ ಏಂಜೆಲೋ"
        },
        {
          text: "ಜೀವನದಲ್ಲಿ ಹಿಡಿದುಕೊಳ್ಳಬೇಕಾದ ಅತ್ಯುತ್ತಮ ವಸ್ತು ಒಬ್ಬರನ್ನೊಬ್ಬರು",
          author: "ಆಡ್ರೆ ಹೆಪ್ಬರ್ನ್"
        }
      ]
    }
  };

  const currentContent = isKannada ? content.kannada : content.english;

  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight">
            {currentContent.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentContent.quotes.map((quote, index) => (
            <div key={index} className="group">
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center h-full flex flex-col justify-between">
                <div>
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-300" />
                  <blockquote className="text-base sm:text-lg md:text-xl text-white/90 italic mb-4 sm:mb-6 leading-relaxed break-words">
                    "{quote.text}"
                  </blockquote>
                </div>
                <cite className="text-amber-400 font-semibold not-italic text-sm sm:text-base">
                  — {quote.author}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = ({ isKannada }) => {
  const content = {
    english: {
      text: "With love and blessings, we invite you to be part of our special day",
      copyright: "Made with ❤️ for our Engagement Ceremony"
    },
    kannada: {
      text: "ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ನಮ್ಮ ವಿಶೇಷ ದಿನದ ಭಾಗವಾಗಲು ನಿಮ್ಮನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ",
      copyright: "ನಮ್ಮ ನಿಶ್ಚಿತಾರ್ಥ ಸಮಾರಂಭಕ್ಕಾಗಿ ❤️ ನೊಂದಿಗೆ ತಯಾರಿಸಲಾಗಿದೆ"
    }
  };

  const currentContent = isKannada ? content.kannada : content.english;

  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/20 to-transparent"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light mb-6 sm:mb-8 leading-relaxed break-words px-2">
          {currentContent.text}
        </p>
        
        <div className="flex justify-center gap-4 mb-6 sm:mb-8">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 animate-pulse" />
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 animate-pulse animation-delay-1s" />
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400 animate-pulse animation-delay-2s" />
        </div>
        
        <p className="text-white/60 text-sm sm:text-base break-words">
          {currentContent.copyright}
        </p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [isKannada, setIsKannada] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Background Elements */}
      <FloatingElements />
      <GradientOrbs />
      
      {/* Language Toggle */}
      <LanguageToggle isKannada={isKannada} setIsKannada={setIsKannada} />
      
      {/* Main Content */}
      <main>
        <HeroSection isKannada={isKannada} />
        <FamilySection isKannada={isKannada} />
        <TimelineSection isKannada={isKannada} />
        <VenueSection isKannada={isKannada} />
        <ContactSection isKannada={isKannada} />
        <QuotesSection isKannada={isKannada} />
        <Footer isKannada={isKannada} />
      </main>
    </div>
  );
}

export default App;