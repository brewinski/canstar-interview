import { Component, OnInit } from '@angular/core';
import { JsonPostsService } from '../../services/json-posts.service';

@Component({
  selector: 'app-data-population',
  templateUrl: './data-population.component.html',
  styleUrls: ['./data-population.component.css']
})
export class DataPopulationComponent implements OnInit {

  constructor(private jsonPostsService: JsonPostsService) { }

  async ngOnInit() {
    
  }

}
