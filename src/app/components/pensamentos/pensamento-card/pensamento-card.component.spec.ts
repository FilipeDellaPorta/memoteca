import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentoCardComponent } from './pensamento-card.component';

describe('PensamentoCardComponent', () => {
  let component: PensamentoCardComponent;
  let fixture: ComponentFixture<PensamentoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PensamentoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PensamentoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
