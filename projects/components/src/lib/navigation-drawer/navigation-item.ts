import {UrlSegment} from '@angular/router';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

export interface NavigationItem {
  icon: IconDefinition;
  title: string;
  route: string[];
}
