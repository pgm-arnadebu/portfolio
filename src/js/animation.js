import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const animations = {
  init() {
    this.generateUI();
  },
  generateUI() {
    this.animateHeader();
    this.animateHero();
    this.animateAbout();
    this.animateSkills();
    this.animateTools();
    this.animateQuote();
    this.animateProjects();
    this.animateFooter();
  },
  animateHeader() {
    const $navItems = document.querySelector('.header__nav-items');
    const $navContainer = document.querySelector('.header__nav');

    $navContainer.addEventListener('mouseover', (ev) => {
      ev.preventDefault(); 
      $navItems.classList.remove('hide');
      tl.play();
    });
    
    $navContainer.addEventListener('mouseout', (ev) => {
      ev.preventDefault(); 
      tl.reverse();
    });

    let tl = gsap.timeline({
      paused: true,
      defaults: {ease: 'Power4.easeOut'}
    });
    
    tl
    .from(('.header__nav-item'), {
      x: -100,
      stagger: 0.1,
      opacity: 0,
      onStart: () => $navItems.classList.remove('hide'),
      onReverseComplete: () => $navItems.classList.add('hide')
    })
    .to(('.header__seperation-line'), {
      height: '10rem',  
    }, '<0.25');
  },
  animateHero() {
    let tl = gsap.timeline({
      defaults: {
        ease: 'power4.out'   
    }});

    tl
    .from('.d-1', {duration: 1, x: -500, opacity: 0, y: -200, rotate: -100})
    .from('.d-2', {duration: 1, opacity: 0, y: -500, rotate: -100}, '<0.075')
    .from('.d-3', {duration: 1, x: 500, opacity: 0, y: -200, rotate: -100, }, '<0.05')
    .from('.hero__name', {y: -100, opacity: 0}, '<0.2')
    .from('.hero__title', {scale: 0}, '<0.1')
    .from('header' , {y: -100, opacity: 0, duration: 1}, '<0.15')
    .from('.hero__footer', {y: 200, opacity: 0, duration: 1 }, '<0.45');

    this.animateHeroFooter();
  },
  animateHeroFooter() {
    gsap.to('.cursor', {
      opacity: 0, 
      ease: 'Power4.easeOut', 
      repeat: -1,
      onComplete: () => this.animateScrollEl()
    });
    
    let tl = gsap.timeline();
    tl.to('.text', {text: {value: 'Creatieve duizendpoot, begeesterd door code met een vurige passie voor design <3'}, duration: 5, delay: 1, ease: 'none'});
  },
  animateAbout() {    
    gsap.from('#about', {
      y: 400,
      opacity: 0,
      duration: 1,
      ease: 'Power4.easeOut',
      scrollTrigger: {
        trigger: '.hero__footer',
        start: 'bottom 90%',
      }
    });

    gsap.from('.about__shape', {
      scale: 0,
      duration: 1,
      ease: 'Power4.easeOut',
      scrollTrigger: {
        trigger: '.about__content',
        start: '-400 60%',
      }
    });

    gsap.to('#hero', {
      opacity: 0,
      scrollTrigger: {
        trigger: '#hero',
        scrub: true,
        start: 'bottom 60%',
      }
    });
  },
  animateSkills() {
    let tl = gsap.timeline({
      ease: 'Power4.easeOut',
        scrollTrigger: {
        trigger: '.skills',
        start: 'top 75%',
        }
    });

    tl
    .from('#skills-heading', {
        opacity: 0,
        y: 200,
        ease: 'power2'
    })
    .from('.skill', {
        opacity: 0,
        stagger: 0.25,
        duration: 0.5,
        y: 100,
        ease: 'power2'
      });
  },
  animateTools() {
    gsap.from('.tools__content', {
      opacity: 0,
      duration: 2,
      stagger: 0.3,
      y: 100,
      ease: 'Power4.easeOut',
      scrollTrigger: {
        trigger: '.tools__content',
        start: '-100 85%',
      }
    });
  },
  animateQuote() {
    gsap.from('.quote', {
      opacity: 0,
      duration: 2,
      stagger: 0.3,
      y: 200,
      ease: 'power3',
      scrollTrigger: {
        trigger: '.quote span',
        start: '-100 85%',
      }
    });
  },
  animateProjects() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 85%',
      }
    });

    tl
    .from('#projects-heading', {
      opacity: 0,
        duration: 1,
        y: 100,
        ease: 'Power4.easeOut'
      })
      .from('.project', {
        opacity: 0,
        stagger: 0.25,
        duration: 0.5,
        y: 50,
        ease: 'Power4.easeOut'
      });
  },
  animateFooter() {
    gsap.from('.footer__content', {
      opacity: 0,
      duration: 1,
      y: 100,
      ease: 'Power4.easeOut',
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 50%',
      }
    } );
  }
};

animations.init();