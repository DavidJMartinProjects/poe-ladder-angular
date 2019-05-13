import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top100leaderboardComponent } from './top100leaderboard.component';

describe('Top100leaderboardComponent', () => {
  let component: Top100leaderboardComponent;
  let fixture: ComponentFixture<Top100leaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top100leaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top100leaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
