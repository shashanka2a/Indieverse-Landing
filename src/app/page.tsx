"use client";

import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Instagram, Mail, Play, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useState, useRef } from "react";

const behindScenesImages = [
  {
    url: "https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGJlaGluZCUyMHNjZW5lc3xlbnwxfHx8fDE3NTgyNDMwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Director reviewing the day's footage"
  },
  {
    url: "https://images.unsplash.com/photo-1638704409573-caa01fb03daa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb3ZpZSUyMGNhbWVyYSUyMGZpbG1pbmd8ZW58MXx8fHwxNzU4MjczMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Capturing the perfect shot"
  },
  {
    url: "https://images.unsplash.com/photo-1608663641667-f12fec60470a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2V0JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzU4MjczMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Setting the mood with lighting"
  }
];

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="font-serif text-xl tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Indieverse.art
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans">About</a>
            <a href="#films" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans">Films</a>
            <a href="#behind-scenes" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans">Behind the Scenes</a>
            <a href="#connect" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans">Connect</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-amber-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50">
            <div className="px-8 py-6 space-y-4">
              <a href="#about" className="block text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#films" className="block text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans" onClick={() => setIsMenuOpen(false)}>Films</a>
              <a href="#behind-scenes" className="block text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans" onClick={() => setIsMenuOpen(false)}>Behind the Scenes</a>
              <a href="#connect" className="block text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans" onClick={() => setIsMenuOpen(false)}>Connect</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 relative pt-20">
        <div className="text-center space-y-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-serif tracking-tight leading-tight md:leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              Indieverse.art
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl text-amber-500/90 font-serif italic max-w-3xl mx-auto leading-relaxed px-2" style={{ fontFamily: 'Georgia, serif' }}>
              Stories Beyond the Shoreline
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
              Experience our debut film — a contemplative journey along forgotten coasts
            </p>
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-500 text-black px-8 md:px-10 py-5 md:py-6 text-lg md:text-xl font-sans tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25 group"
            >
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Watch Shoreline
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
            <div className="w-1 h-3 bg-amber-500 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-20 text-center tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans">
                At Indieverse, we believe in the power of independent storytelling. Our mission is to create authentic, 
                thought-provoking films that challenge conventions.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-sans">
                Every frame we capture is a testament to our commitment to artistic integrity and narrative innovation, 
                bringing untold stories from the margins to the center stage.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-block p-8 border border-amber-600/30 rounded-lg bg-amber-600/5">
                <h3 className="text-3xl font-serif mb-4 text-amber-500" style={{ fontFamily: 'Georgia, serif' }}>Our Vision</h3>
                <p className="text-gray-300 font-sans">Cinema that transcends boundaries and touches the soul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-gray-800 to-transparent my-24" />

      {/* Films Section */}
      <section id="films" className="py-32 px-8 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-20 text-center tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Films
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Shoreline - Featured Film */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="space-y-6 group h-full">
                <div className="aspect-[16/9] lg:aspect-[3/2] bg-gray-900 border border-gray-800 overflow-hidden rounded-xl relative">
                  <ImageWithFallback
                    src="/images/shoreline-poster.jpg"
                    alt="Shoreline short film poster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="inline-block bg-amber-600 text-black text-sm px-4 py-2 rounded-full font-sans font-medium">
                      FEATURED FILM
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl lg:text-4xl font-serif mb-3 text-white" style={{ fontFamily: 'Georgia, serif' }}>Shoreline</h3>
                    <p className="text-gray-300 font-sans text-lg mb-4 max-w-md">A contemplative journey along forgotten coasts, exploring themes of memory and solitude</p>
                    <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Projects */}
            <div className="space-y-8">
              <div className="space-y-6 group">
                <div className="aspect-[2/3] bg-gray-900 border border-gray-800 overflow-hidden rounded-xl relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758232589376-9f3db5aa371d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGZpbG0lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTgyNzMwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Upcoming film poster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="inline-block bg-gray-700 text-white text-xs px-3 py-1 rounded-full font-sans">
                      IN PRODUCTION
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-serif mb-1 text-white" style={{ fontFamily: 'Georgia, serif' }}>Midnight Frequencies</h3>
                    <p className="text-gray-400 font-sans text-sm">Coming 2025</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 group">
                <div className="aspect-[2/3] bg-gray-900 border border-gray-800 overflow-hidden rounded-xl relative flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">+</span>
                    </div>
                    <div className="inline-block bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full mb-2 font-sans">
                      DEVELOPMENT
                    </div>
                    <h3 className="text-lg font-serif text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>Coming Soon</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-gray-800 to-transparent my-24" />

      {/* Behind the Scenes Section */}
      <section id="behind-scenes" className="py-32">
        <div className="px-8 md:px-16 lg:px-32 mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-center tracking-tight mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            Behind the Scenes
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto font-sans">
            Glimpses into our creative process and the stories behind the stories
          </p>
        </div>
        
        <div className="relative">
          {/* Scroll Navigation */}
          <button 
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
          >
            <div className="flex space-x-8 px-8 md:px-16 lg:px-32 pb-4">
              {behindScenesImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-96 space-y-6 group">
                  <div className="aspect-[4/3] bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300 font-sans text-lg italic leading-relaxed">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-gray-800 to-transparent my-24" />

      {/* Connect Section */}
      <section id="connect" className="py-32 px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-12 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Connect
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-16 font-sans leading-relaxed max-w-2xl mx-auto">
            Follow our journey and stay updated on upcoming projects and behind-the-scenes content
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <a 
              href="https://instagram.com/indieverse.art" 
              className="flex items-center space-x-4 text-gray-300 hover:text-amber-500 transition-all duration-300 group bg-gray-900/50 hover:bg-amber-600/10 px-8 py-4 rounded-full border border-gray-800 hover:border-amber-600/50"
            >
              <Instagram className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-sans text-lg">Follow on Instagram</span>
            </a>
            <a 
              href="mailto:hello@indieverse.art" 
              className="flex items-center space-x-4 text-gray-300 hover:text-amber-500 transition-all duration-300 group bg-gray-900/50 hover:bg-amber-600/10 px-8 py-4 rounded-full border border-gray-800 hover:border-amber-600/50"
            >
              <Mail className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-sans text-lg">Send us an Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 md:px-16 lg:px-32 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="font-serif text-2xl mb-2 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Indieverse.art
              </div>
              <p className="text-gray-500 font-sans">
                Independent storytelling since 2025
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-sans">
                © 2025 Indieverse.art. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

