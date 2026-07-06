window.particlesJS('particles-js', {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 1200
      }
    },
    color: {
      value: '#4dd3a8'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: false
      }
    },
    size: {
      value: 2,
      random: true
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      },
      resize: true
    }
  },
  retina_detect: true
});
