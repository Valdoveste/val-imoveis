import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertieSearchbarComponent } from './propertie-searchbar.component';

describe('PropertieSearchbarComponent', () => {
  let component: PropertieSearchbarComponent;
  let fixture: ComponentFixture<PropertieSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertieSearchbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertieSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
