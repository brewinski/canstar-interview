import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ObservableInput } from 'rxjs/Observable';
import { Post, User } from '../models/models';

@Injectable()
export class JsonPostsService {

  endPoint: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http:Http) { }

  async getAllPosts(): Promise<Post[]> {
    const response = await this.http.get(this.endPoint+'/posts').toPromise();
    return response.json();
  }

  async getPostsByUserId(userId: number): Promise<Post[]> {
    const response = await this.http.get(this.endPoint+'/posts/'+userId).toPromise();
    return response.json();
  }

  async getAllUsers(): Promise<User[]> {
    const response = await this.http.get(this.endPoint+'/users').toPromise();
    return response.json();
  }

  private handleErrors(reason: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console

    console.log(reason);
  }
}
