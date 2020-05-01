import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface PostsState extends EntityState<Post> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'posts' })
export class PostsStore extends EntityStore<PostsState> {

  constructor() {
    super();
  }

}

