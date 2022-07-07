import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutModule} from "../../../components/src/lib/layout/main/main-layout.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {faDashboard} from "@fortawesome/free-solid-svg-icons/faDashboard";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import {NavigationItem} from "../../../components/src/lib/navigation-drawer/navigation-item";
import {faNewspaper, faPersonChalkboard, faRightFromBracket, faVideo} from "@fortawesome/free-solid-svg-icons";

const EXAMPLE_NAVIGATION_ITEMS: NavigationItem[] = [
  {icon: faDashboard, title: 'Dashboard', route: ['dashboard']},
  {icon: faNewspaper, title: 'Artikel', route: ['articles']},
  {icon: faPersonChalkboard, title: 'Talks', route: ['talks']},
  {icon: faVideo, title: 'Webinare', route: ['webinars']},
  {icon: faCog, title: 'Einstellungen', route: ['settings']},
  {icon: faRightFromBracket, title: 'Logout', route: ['logout']},
];

export const NAVIGATION_ITEMS = new InjectionToken<NavigationItem[]>("navigation items for navigation drawer")

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainLayoutModule
  ],
  providers: [
    {
      provide: NAVIGATION_ITEMS, useValue: EXAMPLE_NAVIGATION_ITEMS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
