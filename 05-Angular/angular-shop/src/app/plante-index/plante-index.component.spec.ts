import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteIndexComponent } from './plante-index.component';

describe('PlanteIndexComponent', () => {
  let component: PlanteIndexComponent;
  let fixture: ComponentFixture<PlanteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanteIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
