import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprenoyazioniComponent } from './listaprenoyazioni.component';

describe('ListaprenoyazioniComponent', () => {
  let component: ListaprenoyazioniComponent;
  let fixture: ComponentFixture<ListaprenoyazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaprenoyazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaprenoyazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
