import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverId: number = 10;
  serverStatus: string = 'offline';
  allNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {this.allNewServer = true}, 2000);
  }

  getServerStatus() {
    return this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(e: any) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'red' : 'green';
  }

}
