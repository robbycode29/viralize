import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let closeButton = document.querySelector('#close-btn');
    let overlay = document.getElementById('overlay');
    let container = document.getElementById('container');

    let mainMenuLegalBtn = document.querySelector('.main-btn-legal');
    let formTermsBtn = document.querySelector('.terms-btn');
    let footerMenuLegalBtn = document.querySelector('.footer-btn-legal');

    const showLegal = ()=> {
      overlay!.style.display = 'flex';
      container!.style.display = 'flex';
    }

    const hideLegal = () => {
      overlay!.style.display = 'none';
      container!.style.display = 'none';
    }

    mainMenuLegalBtn?.addEventListener('click', (event) => showLegal());

    formTermsBtn?.addEventListener('click', (event) => showLegal());

    footerMenuLegalBtn?.addEventListener('click', (event) => showLegal());

    closeButton?.addEventListener('click', (event) => hideLegal());

  }

}
