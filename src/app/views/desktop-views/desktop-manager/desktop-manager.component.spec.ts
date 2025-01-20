import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopManagerComponent } from './desktop-manager.component';

describe('DesktopManagerComponent', () => {
  let component: DesktopManagerComponent;
  let fixture: ComponentFixture<DesktopManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
