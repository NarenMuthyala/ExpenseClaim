import { Component, OnInit, Input } from '@angular/core';
import { Claim } from '../models/claim';
import { ClaimService } from  '../services/claim.service';


@Component({
  selector: 'app-e-claim',
  templateUrl: './e-claim.component.html',
  styleUrls: ['./e-claim.component.css']
})
export class EClaimComponent implements OnInit {
  claim: Claim;
  private claimData : {};

  constructor(private claimservice: ClaimService) {
    this.claim = new Claim();    
   }

  ngOnInit() {
   
  }

  submitClaim(){   
   this.claimservice.saveData(this.claim)
      .subscribe(result => {
        if (result) {          
         console.log('data saved successful');
        } else {         
         console.log('data save failed');
        }
      }, error => {
       console.log('data save -error');        
      });

  }

}
