import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(
      private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // через this.activatedRoute.snapshot.params['__'] - получаем доступ к передаваемому параметру
    // (только при переходе с других страниц), не сработает,
    // если задавать данные с текущей страница,
    // так как сошлется на текущий snapshot.
    // На обновленные данные с текущей страницы не действует.
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name'],
    };

    // эту проблему можно обойти используя "this.activatedRoute.params"
    // будет отслеживать и обновлять параметры при каждом изменении
    // эта подписка останется, поэтому от нее важно отписаться.
    this.paramsSubscription = this.activatedRoute.params
        .subscribe(
            (params: Params) => {
              this.user.id = params['id'];
              this.user.name = params['name'];
            }
        );
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

}
