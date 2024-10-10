import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMontreComponent } from './add-montre.component';

describe('AddMontreComponent', () => {
  let component: AddMontreComponent;
  let fixture: ComponentFixture<AddMontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMontreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
