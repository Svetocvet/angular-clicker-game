import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetPlayerNameComponent} from './set-player-name/set-player-name.component';
import {RecordsComponent} from './records/records.component';
import {GameComponent} from './game/game.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'records',
    component: RecordsComponent
  },
  {
    path: '**',
    component: SetPlayerNameComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
