import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterOutlet,NavBarComponent],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
