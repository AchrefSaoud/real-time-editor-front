import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumenteditorComponent } from './documenteditor.component';

describe('DocumenteditorComponent', () => {
  let component: DocumenteditorComponent;
  let fixture: ComponentFixture<DocumenteditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumenteditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumenteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
