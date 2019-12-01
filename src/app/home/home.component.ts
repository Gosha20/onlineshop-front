import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../infrastructure/http-service.service';
import { Response } from '../infrastructure/Repsonse';
import { Product } from '../infrastructure/Product';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Iterable<Product> = [];
  constructor(private httpService: HttpServiceService, private authService: AuthService, private router: Router) { }

  isAuth() {return this.authService.isAuth;}
  
  ngOnInit() {
    this.httpService.getAllProducts().subscribe((resp: Iterable<Product>) => {
      console.log(resp);
      this.products = resp;
    } );
  }
}
