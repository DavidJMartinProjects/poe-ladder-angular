import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLeagueLadderComponent } from './custom-league-ladder.component';

describe('CustomLeagueLadderComponent', () => {
  let component: CustomLeagueLadderComponent;
  let fixture: ComponentFixture<CustomLeagueLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLeagueLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLeagueLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
