import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  @Input()
  coverTitle="";
  href="";
  constructor(public router : Router) { }

  ngOnInit(): void {
    
    this.href=this.router.url.substring(1);
    while (this.href.indexOf('/') > 0){
      this.href=this.href.substring(this.href.indexOf('/')+1);
    }
    console.log(this.href);
  }

}
