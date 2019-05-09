import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderGroupRaceComponent } from './ladder-group-race.component';

describe('LadderGroupRaceComponent', () => {
  let component: LadderGroupRaceComponent;
  let fixture: ComponentFixture<LadderGroupRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadderGroupRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadderGroupRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
