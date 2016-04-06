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
    var OfferDetailComponent;
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
            OfferDetailComponent = (function () {
                function OfferDetailComponent(_router, _routeParams, _offerService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._offerService = _offerService;
                    this.offer = null;
                }
                OfferDetailComponent.prototype.setOffer = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._offerService.getOffer(id).subscribe(function (offer) { return _this.offer = offer; });
                };
                OfferDetailComponent.prototype.ngOnInit = function () {
                    this.setOffer();
                };
                OfferDetailComponent.prototype.goBack = function () {
                    this._router.navigate(['Offers']);
                };
                OfferDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-offer-detail',
                        templateUrl: "app/views/offer-detail.component.html",
                        providers: [offer_service_1.OfferService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, offer_service_1.OfferService])
                ], OfferDetailComponent);
                return OfferDetailComponent;
            }());
            exports_1("OfferDetailComponent", OfferDetailComponent);
        }
    }
});

//# sourceMappingURL=offer-detail.component.js.map
