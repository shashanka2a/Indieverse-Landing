"use client";

import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Instagram, Mail, Play, Menu } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="#films" className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans">Films</a>
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
              <a href="#films" className="block text-gray-300 hover:text-amber-500 transition-colors duration-300 font-sans" onClick={() => setIsMenuOpen(false)}>Films</a>
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
              Experience our films — contemplative journeys exploring themes of memory, solitude, and human connection
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
            <div className="w-1 h-3 bg-amber-500 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>


      {/* Films Section */}
      <section id="films" className="py-32 px-8 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-20 text-center tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Films
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Shoreline - Featured Film */}
            <div className="space-y-6 group h-full w-full">
              <div className="aspect-square w-full bg-gray-900 border border-gray-800 overflow-hidden rounded-xl relative cursor-pointer">
                <ImageWithFallback
                  src="/shoreline-poster.png"
                  alt="Shoreline short film poster"
                  className="w-full h-full object-cover object-center bg-black group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="inline-block bg-amber-600 text-black text-sm px-4 py-2 rounded-full font-sans font-medium">
                    FEATURED FILM
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 ease-out group-hover:translate-y-[-20px]">
                  <h3 className="text-2xl font-sans font-bold mb-2 text-white">Shoreline</h3>
                  <p className="text-gray-400 font-sans text-xs mb-3">Short Film • 20 mins • Drama</p>
                  <p className="text-gray-300 font-sans text-sm mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 line-clamp-2">Jason joins friends on a spontaneous road trip to Miami. At dawn on the shoreline, a confrontation with an alligator forces him to question: Are we living, or just existing?</p>
                  <Button 
                    className="bg-transparent backdrop-blur-sm hover:bg-white/10 border border-white text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 translate-y-4 group-hover:translate-y-0"
                    onClick={() => window.open('https://gemini.google.com/share/a7e181b83672', '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Read Story
                  </Button>
                </div>
              </div>
            </div>

            {/* The Beautiful Distance - Second Film */}
            <div className="space-y-6 group h-full w-full">
              <div className="aspect-square w-full bg-gray-900 border border-gray-800 overflow-hidden rounded-xl relative cursor-pointer">
                <ImageWithFallback
                  src="/image.png"
                  alt="The Beautiful Distance film poster"
                  className="w-full h-full object-cover object-center bg-black group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="inline-block bg-amber-600 text-black text-sm px-4 py-2 rounded-full font-sans font-medium">
                    FEATURED FILM
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 ease-out group-hover:translate-y-[-20px]">
                  <h3 className="text-2xl font-sans font-bold mb-2 text-white">The Beautiful Distance</h3>
                  <p className="text-gray-400 font-sans text-xs mb-3">Feature Film • Drama • Romance</p>
                  <p className="text-gray-300 font-sans text-sm mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 line-clamp-2">A romantic drama set in the US tech industry. Arjun, an F-1 student pursuing VC funding, and Anjali, an H-1B Program Manager, face an impossible choice between love and the security of the American Dream.</p>
                  <Button 
                    className="bg-transparent backdrop-blur-sm hover:bg-white/10 border border-white text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 translate-y-4 group-hover:translate-y-0"
                    onClick={() => window.open('https://gemini.google.com/share/faf79ef1ee0e', '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Read Story
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


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

