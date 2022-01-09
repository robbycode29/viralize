import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let contact = document.querySelector('.contact-btn-header');
    let contactSection = document.getElementById('contact-section');
    let buttonCTA = document.querySelector('.button-CTA');

    const scrollToContact = () => contactSection?.scrollIntoView({
      behavior: 'smooth',
    });

    contact?.addEventListener('click', (event) => scrollToContact());
    buttonCTA?.addEventListener('click', (event) => scrollToContact());

  }

}
