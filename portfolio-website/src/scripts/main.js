// This file contains the JavaScript code for the portfolio website. 
// It includes functionality for smooth scrolling for navigation links.

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});