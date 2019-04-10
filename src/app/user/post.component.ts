import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { PostModel } from './post.model';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit  {
  title = 'This is an Post Componemt!';
  posts: Array<PostModel>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPost().subscribe(
      data => {this.posts = data},
      error=>{
        console.log(error)
      });
  }

  add(): void {
    this.postService.addPost(
      {title: "myTitle", body:"asdsdfasd", userId: 1}
      ).subscribe();
  }

}
