import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlayComponent } from './play.component';

describe('PagePlayComponent', () => {
  let component: PagePlayComponent;
  let fixture: ComponentFixture<PagePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
