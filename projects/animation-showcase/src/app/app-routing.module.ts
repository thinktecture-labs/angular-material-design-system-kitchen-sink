import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FunctionsComponent} from './components/functions/functions.component';
import {PlayerComponent} from './components/player/player.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {animation: 'home'}},
  {path: 'functions', component: FunctionsComponent, data: {animation: 'functions'}},
  {path: 'player', component: PlayerComponent, data: {animation: 'player'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
