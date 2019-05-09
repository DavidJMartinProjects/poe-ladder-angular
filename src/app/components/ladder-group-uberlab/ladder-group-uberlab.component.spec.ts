import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderGroupUberlabComponent } from './ladder-group-uberlab.component';

describe('LadderGroupUberlabComponent', () => {
  let component: LadderGroupUberlabComponent;
  let fixture: ComponentFixture<LadderGroupUberlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadderGroupUberlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadderGroupUberlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
