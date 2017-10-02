import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonPostsService } from '../../services/json-posts.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator } from '@angular/material';
import { Post } from '../../models/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [JsonPostsService]
})
export class TableComponent implements OnInit {

  posts: ExampleDataSource;
  displayedColumns: Array<any> = ['userId', 'id', 'title', 'body'];
  @ViewChild(MdPaginator) paginator: MdPaginator;
  postLength: number;

  constructor(private jsonPostsService: JsonPostsService) {  }

  async ngOnInit() {
    let posts: Post[] = await this.jsonPostsService.getAllPosts();
    this.postLength = posts.length;
    this.posts = new ExampleDataSource(posts, this.paginator);
  }

}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */

  constructor(private posts: Post[],  private _paginator: MdPaginator) {
    super();
  }

  connect(): Observable<Post[]> {
    const displayDataChanges = [
      this.posts,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.posts.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}