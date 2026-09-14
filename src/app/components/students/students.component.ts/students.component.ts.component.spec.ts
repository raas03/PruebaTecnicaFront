import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponentTsComponent } from './students.component.ts.component';

describe('StudentsComponentTsComponent', () => {
  let component: StudentsComponentTsComponent;
  let fixture: ComponentFixture<StudentsComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsComponentTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
