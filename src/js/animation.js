import {
  gsap
} from 'gsap';
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

  },
  animateHero() {
    this.fadeFromBottom = (query) => gsap.from((query), {
      y: 150,
      opacity: 0,
      duration: 0.75,
      ease: 'power3'
    });

    this.scaleFromMiddle = (query) => gsap.from((query), {
      scale: 0,
      y: 150,
      duration: 0.75,
      opacity: 0,
      ease: 'rough'
    });

    this.scaleFromMiddle('.hero__shape');
    this.scaleFromMiddle('.hero__name');
    this.scaleFromMiddle('.hero__title');
    // scaleFromMiddle('.hero__footer');


  },
  animateAbout() {
    gsap.from('.about', {
      y: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.hero__footer',
        start: 'bottom 90%',
      }
    });

    gsap.to('.hero', {
      duration: 1,
      opacity: 0,
      ease: 'power2',
      scrollTrigger: {
        scrub: true,
        trigger: '.hero__footer',
        start: 'top 50%',
      }
    });
  },
  animateSkills() {
    gsap.set('.about', {
      opacity: 1
    });

    gsap.to('.about', {
      opacity: 0,
      ease: 'power2',
      scrollTrigger: {
        scrub: true,
        trigger: '.skills',
        start: 'top 50%',
        end: 'top 1%',
      }
    });


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 85%',
      }
    });

    tl
    .from('#skills-heading', {
      opacity: 0,
        duration: 1,
        y: 100,
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
      ease: 'power3',
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
        ease: 'power2'
      })
      .from('.project', {
        opacity: 0,
        stagger: 0.25,
        duration: 0.5,
        y: 100,
        ease: 'power2'
      });
  },
  animateFooter() {
    this.scaleFromMiddle('.footer__content');
  }
};

animations.init();