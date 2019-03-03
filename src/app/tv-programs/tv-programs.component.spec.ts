import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvProgramsComponent } from './tv-programs.component';

describe('TvProgramsComponent', () => {
  let component: TvProgramsComponent;
  let fixture: ComponentFixture<TvProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
