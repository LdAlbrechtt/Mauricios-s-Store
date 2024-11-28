import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = {
    name: 'Lucas Albrecht',
    email: 'Lucas@gmail.com',
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    orders: [
      { id: 1, date: '2024-01-15', total: 99.99, status: 'Delivered' },
      { id: 2, date: '2024-02-01', total: 149.99, status: 'Processing' },
      { id: 3, date: '2024-02-15', total: 79.99, status: 'Shipped' }
    ]
  };

  constructor() {}

  ngOnInit() {}
}