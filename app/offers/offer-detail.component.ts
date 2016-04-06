import {Component, OnInit} from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import {Offer} from './offer';
import {OfferService}       from './offer.service';


@Component({
  selector: 'my-offer-detail',
  templateUrl: `app/views/offer-detail.component.html`,
  providers: [OfferService]
})

export class OfferDetailComponent  implements OnInit {
  constructor(private _router: Router, private _routeParams: RouteParams, private _offerService: OfferService) {}
  public offer: Offer = null;

  setOffer() {
    let id = this._routeParams.get('id');
    this._offerService.getOffer(id).subscribe(
      offer => this.offer = offer);
  }

  ngOnInit() {
    this.setOffer();

  }

  goBack() {
    this._router.navigate( ['Offers'] );
  }

}
