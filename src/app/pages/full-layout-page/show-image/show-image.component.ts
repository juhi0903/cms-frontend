import { Component, OnInit ,Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-image',
  // templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss'],
  template: `
  <div class="modal-header" style="background-color: #484848 ; color: white; font-weight: bold">
    <h5 class="modal-title">Image </h5>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">

   <div >
   <img alt="image" src="{{imageUrl}}" height="100%" width="100%" >
    </div> 
  
 </div>
  <div class="modal-footer">
   <div class="form-actions">
   <button type="button" class="btn btn-warning btn-raised" (click)="activeModal.close('Close click')">Close</button>
   </div>
  </div>
`
})
export class ShowImageComponent implements OnInit {

  @Input() imageUrl;

  constructor(public activeModal: NgbActiveModal) { 
  }

  ngOnInit() {
    console.log("in Show image " +this.imageUrl);

  }

}
