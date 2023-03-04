import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButiranPembayaranPage } from './butiran-pembayaran.page';

describe('ButiranPembayaranPage', () => {
  let component: ButiranPembayaranPage;
  let fixture: ComponentFixture<ButiranPembayaranPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButiranPembayaranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButiranPembayaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
