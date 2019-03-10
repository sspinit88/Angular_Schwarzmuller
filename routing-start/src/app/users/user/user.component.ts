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

  // через ActivatedRoute получаем доступ к загруженному маршруту.

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    // c помощью this.activatedRoute.snapshot.params[] - можно дотянуться до передаваемого параметра в строке
    // запроса (см. настройки роутера), в текущем случае это ID;
    // activatedRoute.snapshot.params - используется тогда, когда точно известно, что данные не будут обновляться из
    // текущей компоненты, в противном случае нужно использовать this.activatedRoute.params.subscribe();

    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name'],
    };
    this.paramsSubscription = this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

}
