import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersManagementsComponent } from './characters-managements.component';

describe('CharacteresManagementsComponent', () => {
  let component: CharactersManagementsComponent;
  let fixture: ComponentFixture<CharactersManagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersManagementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
