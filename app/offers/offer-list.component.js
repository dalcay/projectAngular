System.register(['angular2/core', 'angular2/router', './offer.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, offer_service_1;
    var OfferListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (offer_service_1_1) {
                offer_service_1 = offer_service_1_1;
            }],
        execute: function() {
            OfferListComponent = (function () {
                function OfferListComponent(_offerService, _router) {
                    this._offerService = _offerService;
                    this._router = _router;
                }
                OfferListComponent.prototype.ngOnInit = function () {
                    this.getOffers();
                };
                /* Obtiene los datos guardados en el json */
                OfferListComponent.prototype.getOffers = function () {
                    var _this = this;
                    this._offerService.getOffers()
                        .subscribe(function (offers) { return _this.offers = offers; }, function (error) { return _this.errorMessage = error; });
                };
                OfferListComponent.prototype.onSelect = function (offer) {
                    this._router.navigate(['OfferDetail', { id: offer.id }]);
                };
                OfferListComponent = __decorate([
                    core_1.Component({
                        selector: 'offer-list',
                        template: "\n      <h3>Ofertas :</h3>\n      <ul>\n        <li *ngFor=\"#offer of offers\" (click)=\"onSelect(offer)\">\n          {{ offer.description }}\n        </li>\n      </ul>\n      <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      ",
                        styles: ['.error {color:red;}'],
                        providers: [offer_service_1.OfferService]
                    }), 
                    __metadata('design:paramtypes', [offer_service_1.OfferService, router_1.Router])
                ], OfferListComponent);
                return OfferListComponent;
            }());
            exports_1("OfferListComponent", OfferListComponent);
        }
    }
});

//# sourceMappingURL=offer-list.component.js.map
