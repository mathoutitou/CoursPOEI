import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteCreateComponent } from './plante-create.component';

describe('PlanteCreateComponent', () => {
  let component: PlanteCreateComponent;
  let fixture: ComponentFixture<PlanteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
