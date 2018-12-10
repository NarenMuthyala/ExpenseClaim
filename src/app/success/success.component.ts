import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
isSuccess: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {    

    this.isSuccess = JSON.parse(this.route.snapshot.queryParamMap.get('isTrue'));    
    
  }

}
