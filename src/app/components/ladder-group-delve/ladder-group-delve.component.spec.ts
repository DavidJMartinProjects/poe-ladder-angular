import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderGroupDelveComponent } from './ladder-group-delve.component';

describe('LadderGroupDelveComponent', () => {
  let component: LadderGroupDelveComponent;
  let fixture: ComponentFixture<LadderGroupDelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadderGroupDelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadderGroupDelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
