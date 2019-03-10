import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private  activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    // динамическое получение данных внесенных в queryParams и fragment
    this.activatedRoute.queryParams
      .subscribe(
        response => {
          console.log('queryParams', response);
        }
      );
    this.activatedRoute.fragment
      .subscribe(
        response => {
          console.log('fragment: ', response);
        }
      );

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
