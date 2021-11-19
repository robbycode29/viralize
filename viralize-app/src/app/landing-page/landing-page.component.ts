import { Component, OnInit } from '@angular/core';
import { smootherstep } from 'three/src/math/MathUtils';

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

    home?.addEventListener('click', (event) => {
      window.location.href = '/';
    });

    contact?.addEventListener('click', (event) => {
      contactSection?.scrollIntoView({
        behavior: 'smooth',
      })
    });


  }

}
