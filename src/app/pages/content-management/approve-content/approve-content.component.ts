import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../../shared/services/portal/portal.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {urls,status,contentType,content_url} from '../../../../app/app.config';
import {CategoryService} from '../../../shared/services/category/category.service';
import { ShowImageComponent } from '../../full-layout-page/show-image/show-image.component';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-approve-content',
  templateUrl: './approve-content.component.html',
  styleUrls: ['./approve-content.component.scss']
})
export class ApproveContentComponent implements OnInit {

  contentForm : FormGroup;
  contentType : any;
  categoryList : any;
  status :  any;
  rowdata : any ;
  content_url : any;
  showTable : any = false;


  constructor(private _portalService : PortalService,private _CategoryService : CategoryService ,
    private _formBuilder :FormBuilder , private modalService : NgbModal ) {
    this.content_url = content_url;
   }

  ngOnInit() {
    this._initForm();
    this.contentType = contentType;
    this.status = status;
  }

  selectCategory = async()=>{
    let content = this.contentForm.value.contentInformation.contentType;
    this.contentForm.get('contentInformation.category').enable();
    this.categoryList = await this._CategoryService.getCategoryList(content);
  }

  _initForm = ():void => {
    this.contentForm = this._formBuilder.group({
      contentInformation : this._formBuilder.group({
        contentType : new FormControl('',[Validators.required]),
        category : new FormControl({value:'',disabled:true}),
        status :  new FormControl('',[Validators.required]),
      }),
    })

  }

  getContentList = async () => {
     let data = {
      cdm_ct_id : this.contentForm.value.contentInformation.contentType,
      cdm_cm_id : this.contentForm.value.contentInformation.category,
      cdm_status : this.contentForm.value.contentInformation.status
     }
     console.log(data);

       this._CategoryService.getContentList(data).then(data => {
        this.rowdata = data;
        if(this.rowdata.length>0)
          this.showTable = true;
        else
          this.showTable = false;
     });
  }

  approve = async (id) => {
    console.log(id);
    const data = this._CategoryService.approveContent(id);
    console.log(data);
  }

  reject = async (id) => {
    console.log(id);
    const data = this._CategoryService.rejectContent(id);
    console.log(data);

  }

  expandImage(obj){
    let link = this.content_url + obj['cdm_content_path'];
    console.log(link);
    // console.log("game link" +obj['cdm_url'])
    const modalRef = this.modalService.open(ShowImageComponent, {size: 'lg'});
    modalRef.componentInstance.imageUrl = link;
    modalRef.componentInstance.gameUrl = obj['cdm_url'];
  }

  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("summaryTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  checkAll(ev) {
    this.rowdata.forEach(x => {
      x.state = ev.target.checked;
      console.log(x.state);

    });
  }

  isAllChecked() {
    return this.rowdata.every(_ => _.state);
  }

  approveInBulk(){
    this.rowdata.forEach(x => {
      if(x.state == true)
      this.approve(x.cdm_id);
      else
      this.reject(x.cdm_id);
    });
  }

   sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("summaryTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  

}
