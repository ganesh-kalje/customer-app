import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfigServiceService} from "../../config-service.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: []
})
export class CustomerListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private configService : ConfigServiceService) { }

  ngOnInit() {

    this.configService.getData()
        .subscribe(data => {
          console.log(data);
        });
  }

}
