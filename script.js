document.addEventListener('DOMContentLoaded', function() {
  // Preloader
  const preloader = document.querySelector('.preloader');
  
  window.addEventListener('load', function() {
    setTimeout(function() {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }, 1000);
  });

  // Scroll Progress
  window.addEventListener('scroll', function() {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    scrollProgress.style.width = scrollPercentage + '%';
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('#mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  // Create floating particles
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 5 + 2;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 20 + 10;
    const opacity = Math.random() * 0.5 + 0.1;
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.opacity = opacity;
    
    // Random gradient background
    const gradients = [
      'rgba(106, 17, 203, 0.5)',
      'rgba(37, 117, 252, 0.5)',
      'rgba(0, 210, 255, 0.5)',
      'rgba(255, 45, 123, 0.5)',
      'rgba(17, 153, 142, 0.5)'
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    particle.style.background = randomGradient;
    
    particlesContainer.appendChild(particle);
  }

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Hero section animation
  gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
  
  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  });
  
  gsap.from('.hero-buttons', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.6,
    ease: 'power3.out'
  });
  
  gsap.from('.science-card', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'back.out(1.7)'
  });
  
  gsap.from('.quiz-card', {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: 'back.out(1.7)'
  });
  
  gsap.from('.blog-card', {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.9,
    ease: 'back.out(1.7)'
  });

  // Features animation
  gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
