import { Injectable, NgModule, defineInjectable, Component, ElementRef, Input } from '@angular/core';
import { MenuManager } from '@vicoders/react-menu-manager';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularMenuManagerService = /** @class */ (function () {
    function AngularMenuManagerService() {
    }
    AngularMenuManagerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularMenuManagerService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularMenuManagerService.ngInjectableDef = defineInjectable({ factory: function AngularMenuManagerService_Factory() { return new AngularMenuManagerService(); }, token: AngularMenuManagerService, providedIn: "root" });
    return AngularMenuManagerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularMenuManagerComponent = /** @class */ (function () {
    function AngularMenuManagerComponent(el) {
        this.el = el;
        console.log(el.nativeElement);
    }
    /**
     * @return {?}
     */
    AngularMenuManagerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = { menu_id: this.menuId, api_url: this.apiUrl };
        // tslint:disable-next-line:no-unused-expression
        new MenuManager(this.el.nativeElement, options);
    };
    AngularMenuManagerComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'angular-menu-manager',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    AngularMenuManagerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AngularMenuManagerComponent.propDecorators = {
        menuId: [{ type: Input }],
        apiUrl: [{ type: Input }]
    };
    return AngularMenuManagerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularMenuManagerModule = /** @class */ (function () {
    function AngularMenuManagerModule() {
    }
    AngularMenuManagerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [AngularMenuManagerComponent],
                    exports: [AngularMenuManagerComponent]
                },] }
    ];
    return AngularMenuManagerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AngularMenuManagerService, AngularMenuManagerComponent, AngularMenuManagerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmljb2RlcnMtYW5ndWxhci1tZW51LW1hbmFnZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B2aWNvZGVycy9hbmd1bGFyLW1lbnUtbWFuYWdlci9saWIvYW5ndWxhci1tZW51LW1hbmFnZXIuc2VydmljZS50cyIsIm5nOi8vQHZpY29kZXJzL2FuZ3VsYXItbWVudS1tYW5hZ2VyL2xpYi9hbmd1bGFyLW1lbnUtbWFuYWdlci5jb21wb25lbnQudHMiLCJuZzovL0B2aWNvZGVycy9hbmd1bGFyLW1lbnUtbWFuYWdlci9saWIvYW5ndWxhci1tZW51LW1hbmFnZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhck1lbnVNYW5hZ2VyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IE1lbnVNYW5hZ2VyIH0gZnJvbSAnQHZpY29kZXJzL3JlYWN0LW1lbnUtbWFuYWdlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYW5ndWxhci1tZW51LW1hbmFnZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhck1lbnVNYW5hZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIG1lbnVJZDogYW55O1xuICBASW5wdXQoKVxuICBhcGlVcmw/OiBhbnk7XG4gIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgY29uc29sZS5sb2coZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IG1lbnVfaWQ6IHRoaXMubWVudUlkLCBhcGlfdXJsOiB0aGlzLmFwaVVybCB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBNZW51TWFuYWdlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhck1lbnVNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLW1lbnUtbWFuYWdlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhck1lbnVNYW5hZ2VyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FuZ3VsYXJNZW51TWFuYWdlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhck1lbnVNYW5hZ2VyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztvQ0FKRDs7Ozs7OztBQ0FBO0lBZUUscUNBQVksRUFBYztRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQy9COzs7O0lBQ0QscURBQWU7OztJQUFmOztRQUNFLElBQU0sT0FBTyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7UUFFL0QsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDakQ7O2dCQXBCRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxFQUFFO2lCQUViOzs7O2dCQVBrQyxVQUFVOzs7eUJBUzFDLEtBQUs7eUJBRUwsS0FBSzs7c0NBWlI7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQzNDLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN2Qzs7bUNBUEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==