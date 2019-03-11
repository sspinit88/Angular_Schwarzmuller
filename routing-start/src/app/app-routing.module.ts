import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { ServerComponent } from "./servers/server/server.component";
import { HomeComponent } from "./home/home.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServersComponent } from "./servers/servers.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth.guard";

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
      },
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: ServerComponent,
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
      },
    ],
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,

  },
  /*
  В нашем примере мы не столкнулись с какими-либо проблемами при попытке перенаправить пользователя. Но это не всегда так при добавлении перенаправлений.

  По умолчанию Angular сопоставляет пути по префиксу. Это означает, что следующий маршрут будет соответствовать как /recipes  и просто/

  { path: '', redirectTo: '/somewhere-else' }

  На самом деле, Angular выдаст вам ошибку здесь, потому что это распространенная ошибка: теперь этот маршрут ВСЕГДА будет  перенаправлять вас! Зачем?

  Поскольку по умолчанию используется стратегия сопоставления "prefix" , Angular проверяет, начинается ли путь, введенный вами в URL, с пути, указанного в маршруте. Конечно, каждый путь начинается с ''  (Важно: это не пробел, это просто «ничто»).

  Чтобы исправить это поведение, вам нужно изменить подходящую стратегию на "full" :

  { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }

  Теперь вы будете перенаправлены только в том случае, если полный путь равен ''  (так, только если вы не получили никакого другого контента в своем пути в этом примере).
  */
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {

}