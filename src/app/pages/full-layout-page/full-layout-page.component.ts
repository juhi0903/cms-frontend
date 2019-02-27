import { Component , OnInit, Inject} from '@angular/core';
import { TicketService} from "../../shared/services/ticket.service";
import { SESSION_STORAGE, StorageService  } from 'angular-webstorage-service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-full-layout-page',
  templateUrl: './full-layout-page.component.html',
  styleUrls: ['./full-layout-page.component.scss']
})
export class FullLayoutPageComponent implements OnInit {
  
  token : any;
  totalTickets: number = 0;
  pendingTickets: number = 0;
  completedTickets: number = 0;
  // totalProfit: number = 0;

  constructor(private _ticketService : TicketService,@Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.login();
  }
  login = async () =>{
  //  await this._ticketService.login().then(data => {
  //    this.token = data;
  //     const helper = new JwtHelperService();
  //     const decodedToken = helper.decodeToken(this.token);
  //     this.storage.set('token', decodedToken['jti']);
  //     console.log(this.storage.get('token'));
  //   });
  }
}
