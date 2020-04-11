import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
fData;
fTechData;

date=Date.now()
  constructor(private blogser:BlogService) { }

  ngOnInit() {

    this.blogser.getTechData()
    .subscribe(res=>{
      console.log(res)
      this.fData=res;
      this.fTechData=this.fData.articles
    })
  }

}
