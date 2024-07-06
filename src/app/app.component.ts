import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {










  
  title = 'datatable';

  dtOptions: Config = {};
  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'data/data.json',
      columns: [
        {
          title: 'ID',
          data: 'id',
        },
        {
          title: 'First name',
          data: 'firstName',
        },
        {
          title: 'Last name',
          data: 'lastName',
        },
      ],
    };
  }

  item = [
    {
      name: 'vikash',
      age: '30',
      
      
    },
    {
      name: 'vikash',
      age: '30',
    },
    {
      name: 'vikash',
      age: '30',
    },
  ];
}
