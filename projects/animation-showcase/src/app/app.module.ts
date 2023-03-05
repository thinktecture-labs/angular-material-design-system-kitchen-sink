import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BarComponent} from './components/bar/bar.component';
import {DrawerComponent} from './components/drawer/drawer.component';
import {LogoModule} from '../../../components/src/lib/logo/logo.module';
import {ListModule} from '../../../components/src/lib/list/list.module';
import {HomeComponent} from './components/home/home.component';
import {DrawerToggleComponent} from './components/drawer/toggle/drawer-toggle.component';
import {ChipModule} from '../../../components/src/lib/chip/chip.module';
import {CardComponent} from './components/card/card.component';
import {ChipComponent} from './components/chip/chip.component';
import {FormsModule} from '@angular/forms';
import {FunctionsComponent} from './components/functions/functions.component';
import {PlayerComponent} from './components/player/player.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    DrawerComponent,
    HomeComponent,
    DrawerToggleComponent,
    CardComponent,
    ChipComponent,
    FunctionsComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LogoModule,
    ListModule,
    ChipModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
