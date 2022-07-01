import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceService } from '../service/service.service';
import { HomeComponent } from './home.component';

const mockService = {
  subNumber: (a, b) => {
    const c = a - b;
    return c;
  },
  multipleNumber: (a, b) => {
    const c = a * b;
    return c;
  }
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ {provide: ServiceService, useValue: mockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    service = TestBed.get(ServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addNumbers should call', () => {
    spyOn(component, 'addNumbers').and.callThrough();
    component.addNumbers(2, 3);
    expect(component.c).toEqual(5);
  });

  it('subNumbers should call', () => {
    spyOn(component, 'subNumbers').and.callThrough();
    spyOn(service, 'subNumber').and.callFake(() => {
      return 1;
    });
    component.subNumbers(3, 2);
  });

  it('#multipleNumbers should call when isnetwork is true', () => {
    spyOn(component, 'multipleNumbers').and.callThrough();
    spyOn(service, 'multipleNumber').and.callFake(() => {
      return 1;
    });
    component.multipleNumbers(2, 3);
    expect(component.c).toEqual(6);
  });

  it('#multipleNumbers should call when isnetwork is false', () => {
    spyOn(component, 'multipleNumbers').and.callThrough();
    spyOn(service, 'multipleNumber').and.callFake(() => {
      return {
        network : false
      };
    });
    component.multipleNumbers(2, 3);
    expect(component.c).toEqual(6);
  });

});
