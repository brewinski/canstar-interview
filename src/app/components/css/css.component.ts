import { Component, OnInit } from '@angular/core';
import { JsonPostsService } from '../../services/json-posts.service';
import { User } from '../../models/models';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css'],
  providers: [JsonPostsService]
})
export class CssComponent implements OnInit {
  users: User[];
  columns: number = 3;

  constructor(private jsonPostsService: JsonPostsService) { }

  async ngOnInit() {
    const users = await this.jsonPostsService.getAllUsers();
    this.users = users;
    this.onResize(null);
  }

  onResize(event): void {
    console.log(event);
    
    if(window.innerWidth > 1384) {
     this.columns = 3 
    }
    if(window.innerWidth < 1384) {
      this.columns = 2
    }

    if(window.innerWidth < 960) {
      this.columns = 1
    }
  } 

}
