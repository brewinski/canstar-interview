import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DataPopulationComponent } from './data-population.component';
import { JsonPostsService } from '../../services/json-posts.service';

describe('DataPopulationComponent', () => {
  let component: DataPopulationComponent;
  let fixture: ComponentFixture<DataPopulationComponent>;
  let dataService: JsonPostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPopulationComponent ],
      providers: [JsonPostsService],
    })
    .compileComponents();
  }));

  beforeEach(inject([JsonPostsService], (service: JsonPostsService) => {
    fixture = TestBed.createComponent(DataPopulationComponent);
    component = fixture.componentInstance;
    dataService = service;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
