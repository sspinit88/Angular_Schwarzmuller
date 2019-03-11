import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(
      private serversService: ServersService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
  ) {
  }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.activatedRoute.params
        .subscribe(
            (params: Params) => {
              this.server = this.serversService.getServer(+params['id']);
            }
        )
  }

  onEdit() {
    this.router.navigate(['edit'], {
      // через relativeTo указываем относительно какого роута нужно проводить навигацию
      // (в нашем случае - относительно текущего)
      relativeTo: this.activatedRoute,
      // queryParamsHandling - принимает строку, которая переопределяет поведение по умолчанию.
      // 'preserve' - обновляет данные на вновь пришедшие.
      // таким образом будем менять
      queryParamsHandling: 'preserve',
    });
  }

}
