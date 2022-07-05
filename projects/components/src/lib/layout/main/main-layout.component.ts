import {ChangeDetectionStrategy, Component} from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {AppBarAction} from '../../model/bars/app-bar-action';

@Component({
  selector: 'labs-main-layout',
  templateUrl: 'main-layout.component.html',
  styleUrls: ['main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainLayoutComponent {
  actions: AppBarAction[] = [
    {id: 'search', icon: faSearch, title: 'Search'},
  ];

  fabAction: AppBarAction = {id: 'fab', icon: faPlus, title: 'Add new item'};
}
