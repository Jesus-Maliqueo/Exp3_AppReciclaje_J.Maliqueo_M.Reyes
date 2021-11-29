import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaPage } from './mapa.page';

import {
  HttpBackend,
  HttpClient
} from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { inject } from '@angular/core/testing';




describe('MapaPage', () => {
  let component: MapaPage;
  let fixture: ComponentFixture<MapaPage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
 


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaPage ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule],

    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);


    //reponer//
    describe('MapaPage', () => {
      it('gets the location of the ISS now', () => {
        MapaPage.loadMap().subscribe(x => {
          expect(x).toEqual({ longitude: -138.1719, latitude: 44.4423 });
        });
        const req = httpTestingController.expectOne(
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyBAFKaWnkwkLbGZnT0cPW7laq0479iBBcY'
        );
        expect(req.request.method).toEqual('GET');
        req.flush({
          iss_position: { longitude: '-138.1719', latitude: '44.4423' },
          timestamp: 1525950644,
          message: 'success'
        });
        httpTestingController.verify();
      });
    });

    fixture = TestBed.createComponent(MapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  
});