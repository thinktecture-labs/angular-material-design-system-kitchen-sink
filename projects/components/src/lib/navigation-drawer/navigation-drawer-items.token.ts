import {InjectionToken} from "@angular/core";
import {NavigationItem} from "./navigation-item";

export const NAVIGATION_ITEMS = new InjectionToken<NavigationItem[]>("navigation items for navigation drawer")
