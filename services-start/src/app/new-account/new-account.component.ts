import { Component } from '@angular/core';
import { LoggingService } from "../logging.service";
import { AccountService } from "../account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService,
  ) {
    this.accountService.statusUpdate.subscribe(
      ((status: string) => alert('new Status: ' + status)),
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
