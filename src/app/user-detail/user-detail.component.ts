import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  userId: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.route.params.subscribe((data: Params) => {
      this.userId = data['id'];
    });

    console.log(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe((data: Params) => {
      console.log(data);
    });
  }
}
