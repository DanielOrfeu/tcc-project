import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyDialogComponent } from './difficulty-dialog.component';

describe('DifficultyDialogComponent', () => {
  let component: DifficultyDialogComponent;
  let fixture: ComponentFixture<DifficultyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
