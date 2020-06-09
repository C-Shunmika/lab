import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenclothingPage } from './menclothing.page';

describe('MenclothingPage', () => {
  let component: MenclothingPage;
  let fixture: ComponentFixture<MenclothingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenclothingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenclothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
