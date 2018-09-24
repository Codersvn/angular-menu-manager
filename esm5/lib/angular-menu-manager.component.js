/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { MenuManager } from '@vicoders/react-menu-manager';
import { Component, ElementRef, Input } from '@angular/core';
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
export { AngularMenuManagerComponent };
if (false) {
    /** @type {?} */
    AngularMenuManagerComponent.prototype.menuId;
    /** @type {?} */
    AngularMenuManagerComponent.prototype.apiUrl;
    /** @type {?} */
    AngularMenuManagerComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tZW51LW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZpY29kZXJzL2FuZ3VsYXItbWVudS1tYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItbWVudS1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBYzFFLHFDQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUMvQjs7OztJQUNELHFEQUFlOzs7SUFBZjs7UUFDRSxJQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1FBRS9ELElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2pEOztnQkFwQkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsRUFBRTtpQkFFYjs7OztnQkFQa0MsVUFBVTs7O3lCQVMxQyxLQUFLO3lCQUVMLEtBQUs7O3NDQVpSOztTQVNhLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnVNYW5hZ2VyIH0gZnJvbSAnQHZpY29kZXJzL3JlYWN0LW1lbnUtbWFuYWdlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYW5ndWxhci1tZW51LW1hbmFnZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhck1lbnVNYW5hZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIG1lbnVJZDogYW55O1xuICBASW5wdXQoKVxuICBhcGlVcmw/OiBhbnk7XG4gIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgY29uc29sZS5sb2coZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IG1lbnVfaWQ6IHRoaXMubWVudUlkLCBhcGlfdXJsOiB0aGlzLmFwaVVybCB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBNZW51TWFuYWdlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=