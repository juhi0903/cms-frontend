import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import { ActivatedRoute , Router , NavigationEnd , RoutesRecognized} from '@angular/router';


import { PortalService } from '../../../shared/services/portal/portal.service'



@Component({
  selector: 'offer-edit-url',
  template: '<a title="{{url}}" [routerLink]="url">{{portalId}}</a>'
})

export class PortalEditUrl implements ICellRendererAngularComp {
  params: any;
  url: string;
  portalId ;

  constructor(private route: ActivatedRoute) {
    this.route.parent.paramMap.subscribe(params => {
    });
  }
  agInit(params: any): void {
    this.params = params;
    this.setUrl(params);
  }

  refresh(params: any): boolean {
    this.params = params;
    this.setUrl(params);
    return true;
  }

  private setUrl(params) {
    this.portalId = params.node.data.pm_id;
    this.url = "/portal/edit/"  + params.node.data.pm_id;
  }
}


@Component({
  selector: 'app-view-portal',
  templateUrl: './view-portal.component.html',
  styleUrls: ['./view-portal.component.scss']
})
export class ViewPortalComponent implements OnInit {

  rowdata : any = [];
  columnDefs =[];
  frameworkComponents : any;
  

  constructor(private _portalService : PortalService) {
    this.getAllPortals();
    this.frameworkComponents = {
      editPortal : PortalEditUrl
    };
   }

  ngOnInit() {
    this.setColumnDefs();
  }

  setColumnDefs(){
    this.columnDefs = [
      {headerName : "Id", field:'pm_id' ,width: 130, cellRenderer: "editPortal" , suppressSizeToFit: true},
      {headerName: "Name", field: 'pm_name',  width: 180, suppressSizeToFit: true},
      {headerName: "Title", field: 'pm_title', width: 180, suppressSizeToFit: true},
      {headerName: "Footer", field: 'pm_footer', width: 180, suppressSizeToFit: true},
      {headerName: "Status", field: 'pm_status', width: 180, suppressSizeToFit: true},
    ];
  }

  getAllPortals = async () => {
    this.rowdata = await this._portalService.getAllPortals();
    
  }


}
