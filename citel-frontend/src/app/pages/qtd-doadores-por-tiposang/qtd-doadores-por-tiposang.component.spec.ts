import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtdDoadoresPorTiposangComponent } from './qtd-doadores-por-tiposang.component';

describe('QtdDoadoresPorTiposangComponent', () => {
  let component: QtdDoadoresPorTiposangComponent;
  let fixture: ComponentFixture<QtdDoadoresPorTiposangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QtdDoadoresPorTiposangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QtdDoadoresPorTiposangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
