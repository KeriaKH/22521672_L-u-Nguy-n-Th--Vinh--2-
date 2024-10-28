import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { globalEnvironment } from '../environments/environment';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent  implements OnInit {
  totalOfProduct:number=0;
  constructor(private http: HttpClient)
  {}
  ngOnInit(): void {
    this.http.get(globalEnvironment.baseUrl +'Product/getCount').subscribe((data:any) => {
      this.totalOfProduct= data;
  });
  }

}
