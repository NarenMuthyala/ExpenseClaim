import { Component, OnInit, Input } from '@angular/core';
import { Claim } from '../models/claim';

@Component({
  selector: 'app-e-claim',
  templateUrl: './e-claim.component.html',
  styleUrls: ['./e-claim.component.css']
})
export class EClaimComponent implements OnInit {
  claim: Claim;
  private claimData : {};

  constructor() {
    this.claim = new Claim();    
   }

  ngOnInit() {
   
  }

  submitClaim(){
   this.claimData = JSON.stringify(this.claim)
   console.log( this.claim);
  }

}
