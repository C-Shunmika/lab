import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectronicsPage } from './electronics.page';

describe('ElectronicsPage', () => {
  let component: ElectronicsPage;
  let fixture: ComponentFixture<ElectronicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectronicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
