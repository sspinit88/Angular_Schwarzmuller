import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

// todo Тут пояснения.
/*
 в RouterModule регистирируем роуты (appRoutes);
*/

/*
 в app.component.html рассмотрен варианты работ с routerLink и routerLinkActive,
 [routerLinkActiveOptions]="{exact: true}" - активирует routerLinkActive, только когда путь соответствует указанному.
*/

/*
  в home.component - работа с his.router.navigate();
  реализация передачи параметров (queryParams и fragment).
*/

/*
 в edit-server.component - получение данных из queryParams и fragment.
*/

/*
 ?!? servers.component.ts - работа с activatedRoute.
*/

/*
 в user.component работаем с this.activatedRoute.snapshot.params, который взаимосвязан с записью типа "path:
  'users/:id/:name'", this.activatedRoute.params.subscribe();
 - OnDestroy;
*/

/*
  OnDestroy
*/

/*
 в servers.component реализация передачи параметров (queryParams и fragment).
*/


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServersComponent,
        pathMatch: 'full'
      },
      {
        path: ':id/:edit',
        component: EditServerComponent,
        pathMatch: 'full'
      },
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
