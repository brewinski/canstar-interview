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
  private users: User[];
  private columns: number = 3;

  constructor(private jsonPostsService: JsonPostsService) { }

  async ngOnInit() {
    const users = await this.jsonPostsService.getAllUsers();
    this.users = users;
    window.dispatchEvent(new Event('resize'));
  }

  private onResize(event): void {
    console.log(event);
    if(event.currentTarget.innerWidth > 1384) {
     this.columns = 3 
    }
    if(event.currentTarget.innerWidth < 1384) {
      this.columns = 2
    }

    if(event.currentTarget.innerWidth < 960) {
      this.columns = 1
    }
  } 

}
