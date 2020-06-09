import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WomenclothingPage } from './womenclothing.page';

describe('WomenclothingPage', () => {
  let component: WomenclothingPage;
  let fixture: ComponentFixture<WomenclothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenclothingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WomenclothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
