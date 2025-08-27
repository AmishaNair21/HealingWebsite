"use client"
import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const Card = ({ children, className = "", style = {} }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-lg ${className}`} style={style}>
    {children}
  </div>
);

// Fallback confetti function if canvas-confetti is not available
const throwConfetti = () => {
  if (typeof window !== 'undefined' && window.confetti) {
    window.confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    // Simple fallback animation
    console.log('🎉 Confetti!');
  }
};
  
const HealingHero = () => {
  const [showSmile, setShowSmile] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [audioElement, setAudioElement] = useState(null);

  const messages = [
    {
      text: "Rest well my dear 💜 Take all the time you need to heal",
      image: "/assets/catsleep.jpeg",
      alt: "Cute cat sleeping peacefully"
    },
    {
      text: "Sending you the biggest, warmest hugs 🤗💕",
      image: "/assets/cathug.jpeg", 
      alt: "Cat giving warm hugs"
    }
  ];

  const clickMessages = [
    "Meray taraf seh yeh phool raklo💐"
  ];

  const handleSmileClick = () => {
    setShowSmile(true);
    setMessageIndex((prev) => (prev + 1) % clickMessages.length);
    setTimeout(() => setShowSmile(false), 3000);
    throwConfetti();
  };

  // Auto-play background music on page load
  useEffect(() => {
    const audio = new Audio('/assets/falllove.mp3');
    audio.loop = true;
    audio.volume = 0.2; // Set to 20% volume for background music
    
    // Auto-play with user interaction fallback
    const playAudio = () => {
      audio.play().catch(() => {
        console.log('Auto-play prevented, waiting for user interaction');
        // If auto-play fails, we&apos;ll try again on first user interaction
        const playOnInteraction = () => {
          audio.play();
          document.removeEventListener('click', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
      });
    };

    setAudioElement(audio);
    playAudio();

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioElement) {
      if (isMuted) {
        audioElement.volume = 0.2;
        setIsMuted(false);
      } else {
        audioElement.volume = 0;
        setIsMuted(true);
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fce7f3 0%, #fdf2f8 25%, #fef7ff 50%, #f3e8ff 75%, #fce7f3 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Segoe UI', Arial, Helvetica, sans-serif"
    }}>
      {/* Floating background elements */}
      <div style={{ position: 'absolute', inset: '0', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '40px',
          width: '16px',
          height: '16px',
          backgroundColor: '#f472b6',
          borderRadius: '50%',
          animation: 'floatGentle 6s ease-in-out infinite',
          opacity: 0.6
        }}></div>
        <div style={{
          position: 'absolute',
          top: '160px',
          right: '80px',
          width: '12px',
          height: '12px',
          backgroundColor: '#d8b4fe',
          borderRadius: '50%',
          animation: 'floatDelay 7s ease-in-out infinite',
          opacity: 0.4
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '128px',
          left: '80px',
          width: '20px',
          height: '20px',
          backgroundColor: '#fbbf24',
          borderRadius: '50%',
          animation: 'floatGentle 6s ease-in-out infinite',
          opacity: 0.5
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '40px',
          width: '8px',
          height: '8px',
          backgroundColor: '#ec4899',
          borderRadius: '50%',
          animation: 'floatDelay 7s ease-in-out infinite',
          opacity: 0.7
        }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px', animation: 'fadeInUp 1.2s ease forwards' }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '32px' }}>
            <img 
              src="/assets/catheal.jpeg" 
              alt="Gentle healing illustration with flowers and warm colors"
              style={{
                width: '100%',
                maxWidth: '512px',
                margin: '0 auto',
                borderRadius: '24px',
                boxShadow: '0 0 30px rgba(255, 182, 193, 0.6), 0 0 60px rgba(186, 225, 255, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 0 40px rgba(255, 182, 193, 0.8), 0 0 70px rgba(186, 225, 255, 0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 30px rgba(255, 182, 193, 0.6), 0 0 60px rgba(186, 225, 255, 0.4)';
              }}
            />
          </div>
          
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '24px',
            background: 'linear-gradient(to right, #f472b6, #ec4899, #d8b4fe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
           Meri Pyari Prachi💕
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#6b7280',
            marginBottom: '32px',
            maxWidth: '512px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
          }}>
            bhimari ate jahegi tumhara smile mat khona, tumhara smile bohath kimti hein 
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '48px', animation: 'fadeInUp 1.2s ease forwards' }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '32px' }}>
            <img 
              src="/assets/catsick2.png" 
              alt="Cute cat getting better"
              style={{
                width: '100%',
                maxWidth: '512px',
                margin: '0 auto',
                borderRadius: '24px',
                boxShadow: '0 0 30px rgba(255, 182, 193, 0.6), 0 0 60px rgba(186, 225, 255, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 0 40px rgba(255, 182, 193, 0.8), 0 0 70px rgba(186, 225, 255, 0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 30px rgba(255, 182, 193, 0.6), 0 0 60px rgba(186, 225, 255, 0.4)';
              }}
            />
                <p style={{
            fontSize: '1.5rem',
            color: '#6b7280',
            marginBottom: '3px',
            maxWidth: '512px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
          }}>
            Dawai vagera kakay teekh hojana jaldi , tumhara energetic side wapas chaiyay mujay
          </p>
          </div>
        </div>

        {/* Messages Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {messages.map((message, index) => (
            <Card 
              key={index}
              style={{
                padding: '32px',
                boxShadow: '0 0 30px rgba(255, 182, 193, 0.6), 0 0 60px rgba(186, 225, 255, 0.4)',
                animation: `fadeInUp 1.2s ease forwards`,
                animationDelay: `${index * 0.3}s`,
                border: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 182, 193, 0.8), 0 0 70px rgba(186, 225, 255, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 182, 193, 0.6), 0 0 60px rgba(186, 225, 255, 0.4)';
              }}
            >
              <img 
                src={message.image}
                alt={message.alt}
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  margin: '0 auto 20px auto',
                  display: 'block',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }}
              />
              <p style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#374151',
                margin: 0,
                lineHeight: '1.5'
              }}>
                {message.text}
              </p>
            </Card>
          ))}
        </div>

        {/* Interactive Smile Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button 
              onClick={handleSmileClick}
              style={{
                fontSize: '1.25rem',
                padding: '24px 32px',
                borderRadius: '16px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
                border: '2px solid #f472b6',
                color: '#be185d',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(244, 114, 182, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 20px rgba(244, 114, 182, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(244, 114, 182, 0.3)';
              }}
            >
              Click here for a smile ✨
            </button>
            
            {showSmile && (
              <div 
                className="popup-container"
                style={{
                  position: 'absolute',
                  top: '-140px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  animation: 'fadeInUp 0.5s ease forwards',
                  zIndex: 1000
                }}>
                <div style={{
                  background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 10px 30px rgba(244, 114, 182, 0.3)',
                  border: '1px solid rgba(244, 114, 182, 0.2)',
                  minWidth: '280px',
                  maxWidth: '90vw',
                  position: 'relative'
                }}>
                  <img 
                    src="/assets/catbouque.jpeg"
                    alt="Cat with beautiful bouquet of flowers"
                    style={{
                      width: '120px',
                      height: '120px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      margin: '0 auto 16px auto',
                      display: 'block',
                      animation: 'pulseSoft 2s ease-in-out infinite',
                      boxShadow: '0 4px 15px rgba(244, 114, 182, 0.3)'
                    }}
                  />
                  <p style={{
                    color: '#be185d',
                    fontWeight: '500',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    {clickMessages[messageIndex]}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Closing Message */}
        <div style={{ textAlign: 'center' }}>
          <Card style={{
            padding: '32px',
            maxWidth: '768px',
            margin: '0 auto',
            border: 'none',
            boxShadow: '0 0 30px rgba(255, 182, 193, 0.6), 0 0 60px rgba(186, 225, 255, 0.4)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#ec4899'
            }}>
              You&apos;re Not Alone 🌷
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              lineHeight: '1.6',
              margin: 0
            }}>
              I&apos;m here, thinking of you, sending you all the love and positive energy in the world. 
              Take your time to rest and heal. Your body knows what it needs, and you&apos;re doing 
              everything right. Wishing you the speediest and gentlest recovery. 💜
            </p>
          </Card>
        </div>
      </div>

      {/* Floating Audio Control */}
      <button
        onClick={toggleMute}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: isMuted 
            ? 'linear-gradient(135deg, #fee2e2, #fecaca)' 
            : 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
          border: isMuted ? '2px solid #ef4444' : '2px solid #10b981',
          color: isMuted ? '#dc2626' : '#059669',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        }}
      >
        {isMuted ? (
          <VolumeX size={24} />
        ) : (
          <Volume2 size={24} />
        )}
      </button>

      <style jsx>{`
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes floatDelay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          p { font-size: 1.25rem !important; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 2rem !important; }
          p { font-size: 1.125rem !important; }
          .popup-container {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            z-index: 1000 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HealingHero;