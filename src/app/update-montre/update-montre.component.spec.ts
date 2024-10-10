import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMontreComponent } from './update-montre.component';

describe('UpdateMontreComponent', () => {
  let component: UpdateMontreComponent;
  let fixture: ComponentFixture<UpdateMontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMontreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
