import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CookwarePage } from './cookware.page';

describe('CookwarePage', () => {
  let component: CookwarePage;
  let fixture: ComponentFixture<CookwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookwarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CookwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
