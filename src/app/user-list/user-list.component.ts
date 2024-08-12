import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  constructor(private router: Router) {}
  users = [
    {
      id: 1,
      name: 'Tengo',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Nino',
      role: 'admin',
    },
    {
      id: 3,
      name: 'Vaja',
      role: 'user',
    },
    {
      id: 4,
      name: 'Rezo',
      role: 'admin',
    },
    {
      id: 5,
      name: 'Tea',
      role: 'user',
    },
  ];

  getThirdUserDetails() {
    this.router.navigate(['/user', 2], { queryParams: { role: 'admin' } });
  }
}
