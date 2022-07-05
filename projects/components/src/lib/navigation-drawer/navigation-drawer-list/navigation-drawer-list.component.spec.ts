import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDrawerListComponent } from './navigation-drawer-list.component';

describe('NavigationDrawerListComponent', () => {
  let component: NavigationDrawerListComponent;
  let fixture: ComponentFixture<NavigationDrawerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationDrawerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationDrawerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
