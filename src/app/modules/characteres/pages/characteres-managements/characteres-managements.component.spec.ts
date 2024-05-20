import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteresManagementsComponent } from './characteres-managements.component';

describe('CharacteresManagementsComponent', () => {
  let component: CharacteresManagementsComponent;
  let fixture: ComponentFixture<CharacteresManagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacteresManagementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacteresManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
