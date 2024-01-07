import { animate, animateChild, group, keyframes, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, afterRender } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf, CommonModule,NgFor, FormsModule,UpperCasePipe    ],
  animations: [
    trigger('query', [
      transition(':enter', [
        style({ height: 0 }),
        group([
          animate(500, style({ height: '*' })),
          query(':enter', [
            style({ opacity: 0, transform: 'scale(0)' }),
            animate(2000, style({ opacity: 1, transform: 'scale(1)' }))
          ]),
          query('.hero', [
            style({ transform: 'translateX(-100%)' }),
            animate('.7s 500ms ease-in', style({ transform: 'translateX(0)' }))
          ]),
        ]),
        query('@animateMe', animateChild()),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        query('@animateMe', animateChild()),
        group([
          animate('500ms 500ms', style({ height: '0', padding: '0' })),
          query(':leave', [
            style({ opacity: 1, transform: 'scale(1)' }),
            animate('1s', style({ opacity: 0, transform: 'scale(0)' }))
          ]),
          query('.hero', [
            style({ transform: 'translateX(0)' }),
            animate('.7s ease-out', style({ transform: 'translateX(-100%)' }))
          ]),
        ]),
      ]),
    ]),
    trigger('animateMe', [
      transition('* <=> *', animate('500ms cubic-bezier(.68,-0.73,.26,1.65)', keyframes([
        style({ backgroundColor: 'transparent', color: '*', offset: 0 }),
        style({ backgroundColor: 'blue', color: 'white', offset: 0.2 }),
        style({ backgroundColor: 'transparent', color: '*', offset: 1 })
      ])))
    ]),
  ],

  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
customers: any;
message = '';

birthday = new Date(2023, 3, 2);
onMouseOver() {
  this.message = 'Way to go 🚀';
}

username = 'youngTech';
favoriteFramework = '';

frameworks = ['AngularJS', 'React', 'Vue'];
showDetails(customer: any): void {
  customer.showDetails = !customer.showDetails;
  }


fontSizePx = 16;









onkeyup($event: KeyboardEvent) {
  console.log('gyred')
}




  isUnchanged = true;
  isCollapsed:string='jsjruiww'


ifu(){
  this.isCollapsed.toLocaleLowerCase().repeat(3)
}

currentCustomer = 'Maria';
title = 'Featured product:';
itemImageUrl = 'favicon.ico ';
recommended = 'You might also like:';
itemImageUrl2 = 'favicon.ico';
getVal(): number {
  return 2;
}



isLoggedIn = true;


  toggleDisabled = false;
  show = true;
  hero = HEROES[0];

  currentStyles: Record<string, string> = {};
  canSave: true | undefined;
  isSpecial: true | undefined;
  /* . . . */
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }
}
