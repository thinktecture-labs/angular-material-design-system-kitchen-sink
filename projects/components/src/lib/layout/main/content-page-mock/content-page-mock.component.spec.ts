import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPageMockComponent } from './content-page-mock.component';

describe('ContentPageMockComponent', () => {
  let component: ContentPageMockComponent;
  let fixture: ComponentFixture<ContentPageMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPageMockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPageMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
