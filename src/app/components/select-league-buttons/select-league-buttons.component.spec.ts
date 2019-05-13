import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLeagueButtonsComponent } from './select-league-buttons.component';

describe('SelectLeagueButtonsComponent', () => {
  let component: SelectLeagueButtonsComponent;
  let fixture: ComponentFixture<SelectLeagueButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLeagueButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLeagueButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
