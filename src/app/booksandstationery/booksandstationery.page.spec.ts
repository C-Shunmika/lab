import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BooksandstationeryPage } from './booksandstationery.page';

describe('BooksandstationeryPage', () => {
  let component: BooksandstationeryPage;
  let fixture: ComponentFixture<BooksandstationeryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksandstationeryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksandstationeryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
