import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterJsonComponent } from './submeter-json.component';

describe('SubmeterJsonComponent', () => {
  let component: SubmeterJsonComponent;
  let fixture: ComponentFixture<SubmeterJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmeterJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmeterJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
