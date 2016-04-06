import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {OfferListComponent} from './offers/offer-list.component';
import {OfferDetailComponent} from './offers/offer-detail.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
   <nav>
    <a [routerLink]="['Offers']">Ofertas</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
  {path: '/offer/:id',    name: 'OfferDetail',   component: OfferDetailComponent},
  {path: '/offers',    name: 'Offers',   component: OfferListComponent}
])


export class AppComponent {
  title= 'Banca Prueba';
}



