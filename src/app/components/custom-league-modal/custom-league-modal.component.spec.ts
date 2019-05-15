import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLeagueModalComponent } from './custom-league-modal.component';

describe('CustomLeagueModalComponent', () => {
  let component: CustomLeagueModalComponent;
  let fixture: ComponentFixture<CustomLeagueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLeagueModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLeagueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
