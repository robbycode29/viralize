import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let home = document.querySelector('.home-btn-header');
    let contact = document.querySelector('.contact-btn-header');
    let contactSection = document.getElementById('contact-section');
    let buttonCTA = document.querySelector('.button-CTA');

    home?.addEventListener('click', (event) => {
      window.location.href = '/';
    });

    const scrollToContact = () => contactSection?.scrollIntoView({
      behavior: 'smooth',
    });

    contact?.addEventListener('click', (event) => scrollToContact());
    buttonCTA?.addEventListener('click', (event) => scrollToContact());

  }

}
