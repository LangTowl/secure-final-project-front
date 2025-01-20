import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileManagerComponent } from './mobile-manager.component';

describe('MobileManagerComponent', () => {
  let component: MobileManagerComponent;
  let fixture: ComponentFixture<MobileManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
