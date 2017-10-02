import { TestBed, inject } from '@angular/core/testing';
import { JsonPostsService } from './json-posts.service';
import { Post } from '../models/models';

describe('JsonDataserviceService', () => {
  let postService: JsonPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPostsService]
    });
  });

  beforeEach(inject([JsonPostsService], (service: JsonPostsService) => {
    this.postService = service;
  }));

  it('should be created', inject([JsonPostsService], (service: JsonPostsService) => {
    expect(service).toBeTruthy();
  }));

  it('#getAllPosts should return 100 items from database', async () => {
    const posts = await this.postService.getAllPosts();
    
    expect(posts.length).toBeGreaterThan(0);
    expect(posts.length).toBeLessThanOrEqual(100);
    expect(posts).toBeTruthy();
  });

  it('#getPostsByUSerId should return all posts for the specified user', inject([JsonPostsService], async (service: JsonPostsService) => {
    const userPosts = await this.postService.getPostsByUserId(1);

    expect(userPosts).toBeTruthy();
    expect(userPosts.length).toBeGreaterThan(0);
    userPosts.array.forEach(element => {
      expect(element.userId).toEqual(1);
    });
  }));
});
