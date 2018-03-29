import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  datas : any;
  totalItems = 64;
  currentPage = 4;
 
  constructor(
    private auth: AuthService
  ) {
    
  }

  ngOnInit() {
    this.auth.getProducts().then((res)=>{
      this.data = res;
      this.datas  = this.data.results;
    })
  }
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

}
