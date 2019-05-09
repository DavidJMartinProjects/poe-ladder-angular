import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveLeaguePanelComponent } from './top-five-league-panel.component';

describe('TopFiveLeaguePanelComponent', () => {
  let component: TopFiveLeaguePanelComponent;
  let fixture: ComponentFixture<TopFiveLeaguePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFiveLeaguePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFiveLeaguePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
