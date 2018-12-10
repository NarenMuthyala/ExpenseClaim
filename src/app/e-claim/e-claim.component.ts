import { Component, OnInit, Input } from '@angular/core';
import { Claim } from '../models/claim';
import { ClaimService } from  '../services/claim.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-e-claim',
  templateUrl: './e-claim.component.html',
  styleUrls: ['./e-claim.component.css']
})
export class EClaimComponent implements OnInit {
  claim: Claim;  

  constructor(private claimservice: ClaimService, private router: Router) {
    this.claim = new Claim();    
   }

  ngOnInit() {
   
  }

  submitClaim(){   
   this.claimservice.saveData(this.claim)
      .subscribe(result => {
        if (result) {          
         console.log('data saved successful');
         this.router.navigate(['claimsuccess'],
         {queryParams: {isTrue: true}});
        } else {         
         console.log('data save failed');
         this.router.navigate(['claimsuccess'],
         {queryParams: {isTrue: false}});
        }
      }, error => {
       console.log('data save -error'); 
       this.router.navigate(['claimsuccess'],
         {queryParams: {isTrue: false}});       
      });

  }

}
