import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinRommComponent } from './join-romm.component';

describe('JoinRommComponent', () => {
  let component: JoinRommComponent;
  let fixture: ComponentFixture<JoinRommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinRommComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinRommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
