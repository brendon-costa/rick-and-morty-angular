import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharactersComponent } from './new-characters.component';

describe('NewCharactersComponent', () => {
  let component: NewCharactersComponent;
  let fixture: ComponentFixture<NewCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
