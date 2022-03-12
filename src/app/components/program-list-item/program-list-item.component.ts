import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-list-item',
  templateUrl: './program-list-item.component.html',
  styleUrls: ['./program-list-item.component.scss']
})
export class ProgramListItemComponent implements OnInit {
@Input()
public status='';
  constructor() { }

  ngOnInit(): void {
  }

}
