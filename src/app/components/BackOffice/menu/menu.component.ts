import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Dashboard',
      url: 'dashboard/',
      
    },
    {
      id: '2',
      titre: 'Programs',
      url: 'dashboard/programs',
      
    },
    {
      id: '3',
      titre: 'Clients',
      url: 'dashboard/clients',
      
    },
    {
      id: '4',
      titre: 'Subscriptions',
      url: 'dashboard/subscription',
      
    },
    {
      id: '5',
      titre: 'Statistics',
      url: 'dashboard/statistics',
      
    },
    
  ];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  navigate(menu : Menu):void {  
    
    menu.active = true;

    this.router.navigate([menu.url]);
  }

}
