import { Injectable, NgModule, defineInjectable, Component, ElementRef, Input } from '@angular/core';
import { MenuManager } from '@vicoders/react-menu-manager';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AngularMenuManagerService {
    constructor() { }
}
AngularMenuManagerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularMenuManagerService.ctorParameters = () => [];
/** @nocollapse */ AngularMenuManagerService.ngInjectableDef = defineInjectable({ factory: function AngularMenuManagerService_Factory() { return new AngularMenuManagerService(); }, token: AngularMenuManagerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AngularMenuManagerComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        console.log(el.nativeElement);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const options = { menu_id: this.menuId, api_url: this.apiUrl };
        // tslint:disable-next-line:no-unused-expression
        new MenuManager(this.el.nativeElement, options);
    }
}
AngularMenuManagerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'angular-menu-manager',
                template: ''
            }] }
];
/** @nocollapse */
AngularMenuManagerComponent.ctorParameters = () => [
    { type: ElementRef }
];
AngularMenuManagerComponent.propDecorators = {
    menuId: [{ type: Input }],
    apiUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AngularMenuManagerModule {
}
AngularMenuManagerModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [AngularMenuManagerComponent],
                exports: [AngularMenuManagerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AngularMenuManagerService, AngularMenuManagerComponent, AngularMenuManagerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmljb2RlcnMtYW5ndWxhci1tZW51LW1hbmFnZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B2aWNvZGVycy9hbmd1bGFyLW1lbnUtbWFuYWdlci9saWIvYW5ndWxhci1tZW51LW1hbmFnZXIuc2VydmljZS50cyIsIm5nOi8vQHZpY29kZXJzL2FuZ3VsYXItbWVudS1tYW5hZ2VyL2xpYi9hbmd1bGFyLW1lbnUtbWFuYWdlci5jb21wb25lbnQudHMiLCJuZzovL0B2aWNvZGVycy9hbmd1bGFyLW1lbnUtbWFuYWdlci9saWIvYW5ndWxhci1tZW51LW1hbmFnZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhck1lbnVNYW5hZ2VyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IE1lbnVNYW5hZ2VyIH0gZnJvbSAnQHZpY29kZXJzL3JlYWN0LW1lbnUtbWFuYWdlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYW5ndWxhci1tZW51LW1hbmFnZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhck1lbnVNYW5hZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIG1lbnVJZDogYW55O1xuICBASW5wdXQoKVxuICBhcGlVcmw/OiBhbnk7XG4gIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgY29uc29sZS5sb2coZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IG1lbnVfaWQ6IHRoaXMubWVudUlkLCBhcGlfdXJsOiB0aGlzLmFwaVVybCB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBNZW51TWFuYWdlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhck1lbnVNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLW1lbnUtbWFuYWdlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhck1lbnVNYW5hZ2VyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FuZ3VsYXJNZW51TWFuYWdlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhck1lbnVNYW5hZ2VyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7Ozs7SUFlRSxZQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUMvQjs7OztJQUNELGVBQWU7O1FBQ2IsTUFBTSxPQUFPLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztRQUUvRCxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNqRDs7O1lBcEJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLEVBQUU7YUFFYjs7OztZQVBrQyxVQUFVOzs7cUJBUzFDLEtBQUs7cUJBRUwsS0FBSzs7Ozs7OztBQ1pSOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7In0=