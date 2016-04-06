import {Injectable}     from 'angular2/core';

import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Offer}           from './offer';

@Injectable()
export class OfferService {
  constructor (private http: Http) {}

  private _offersUrl = 'app/json/offers.json';

  getOffers () {
    return this.http.get(this._offersUrl)
                    .map(res => <Offer[]> res.json().data)
                    .catch(this.handleError);
  }

  getOffer (id: string) {
    return this.http.get(this._offersUrl)
            .map(res => <Offer> res.json().data.filter(offer => offer.id === id)[0])
            .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
