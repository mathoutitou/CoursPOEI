import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteThumbnailComponent } from './plante-thumbnail.component';

describe('PlanteThumbnailComponent', () => {
  let component: PlanteThumbnailComponent;
  let fixture: ComponentFixture<PlanteThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanteThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanteThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
