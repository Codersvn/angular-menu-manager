/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { MenuManager } from '@vicoders/react-menu-manager';
import { Component, ElementRef, Input } from '@angular/core';
export class AngularMenuManagerComponent {
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
if (false) {
    /** @type {?} */
    AngularMenuManagerComponent.prototype.menuId;
    /** @type {?} */
    AngularMenuManagerComponent.prototype.apiUrl;
    /** @type {?} */
    AngularMenuManagerComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tZW51LW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZpY29kZXJzL2FuZ3VsYXItbWVudS1tYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItbWVudS1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTTs7OztJQU1KLFlBQVksRUFBYztRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQy9COzs7O0lBQ0QsZUFBZTs7UUFDYixNQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1FBRS9ELElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2pEOzs7WUFwQkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsRUFBRTthQUViOzs7O1lBUGtDLFVBQVU7OztxQkFTMUMsS0FBSztxQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudU1hbmFnZXIgfSBmcm9tICdAdmljb2RlcnMvcmVhY3QtbWVudS1tYW5hZ2VyJztcbmltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLW1lbnUtbWFuYWdlcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyTWVudU1hbmFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgbWVudUlkOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGFwaVVybD86IGFueTtcbiAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxhbnk+O1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICBjb25zb2xlLmxvZyhlbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgbWVudV9pZDogdGhpcy5tZW51SWQsIGFwaV91cmw6IHRoaXMuYXBpVXJsIH07XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IE1lbnVNYW5hZ2VyKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==