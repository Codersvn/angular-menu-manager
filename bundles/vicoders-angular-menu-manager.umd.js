(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@vicoders/react-menu-manager')) :
    typeof define === 'function' && define.amd ? define('@vicoders/angular-menu-manager', ['exports', '@angular/core', '@vicoders/react-menu-manager'], factory) :
    (factory((global.vicoders = global.vicoders || {}, global.vicoders['angular-menu-manager'] = {}),global.ng.core,global.reactMenuManager));
}(this, (function (exports,i0,reactMenuManager) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AngularMenuManagerService = /** @class */ (function () {
        function AngularMenuManagerService() {
        }
        AngularMenuManagerService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularMenuManagerService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularMenuManagerService.ngInjectableDef = i0.defineInjectable({ factory: function AngularMenuManagerService_Factory() { return new AngularMenuManagerService(); }, token: AngularMenuManagerService, providedIn: "root" });
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
                new reactMenuManager.MenuManager(this.el.nativeElement, options);
            };
        AngularMenuManagerComponent.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'angular-menu-manager',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        AngularMenuManagerComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        AngularMenuManagerComponent.propDecorators = {
            menuId: [{ type: i0.Input }],
            apiUrl: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
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

    exports.AngularMenuManagerService = AngularMenuManagerService;
    exports.AngularMenuManagerComponent = AngularMenuManagerComponent;
    exports.AngularMenuManagerModule = AngularMenuManagerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmljb2RlcnMtYW5ndWxhci1tZW51LW1hbmFnZXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Admljb2RlcnMvYW5ndWxhci1tZW51LW1hbmFnZXIvbGliL2FuZ3VsYXItbWVudS1tYW5hZ2VyLnNlcnZpY2UudHMiLCJuZzovL0B2aWNvZGVycy9hbmd1bGFyLW1lbnUtbWFuYWdlci9saWIvYW5ndWxhci1tZW51LW1hbmFnZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Admljb2RlcnMvYW5ndWxhci1tZW51LW1hbmFnZXIvbGliL2FuZ3VsYXItbWVudS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJNZW51TWFuYWdlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBNZW51TWFuYWdlciB9IGZyb20gJ0B2aWNvZGVycy9yZWFjdC1tZW51LW1hbmFnZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2FuZ3VsYXItbWVudS1tYW5hZ2VyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJNZW51TWFuYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBtZW51SWQ6IGFueTtcbiAgQElucHV0KClcbiAgYXBpVXJsPzogYW55O1xuICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPGFueT47XG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIGNvbnNvbGUubG9nKGVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBtZW51X2lkOiB0aGlzLm1lbnVJZCwgYXBpX3VybDogdGhpcy5hcGlVcmwgfTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgTWVudU1hbmFnZXIodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJNZW51TWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1tZW51LW1hbmFnZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJNZW51TWFuYWdlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbmd1bGFyTWVudU1hbmFnZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJNZW51TWFuYWdlck1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJNZW51TWFuYWdlciIsIkNvbXBvbmVudCIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3Q0FKRDs7Ozs7OztBQ0FBO1FBZUUscUNBQVksRUFBYztZQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQy9COzs7O1FBQ0QscURBQWU7OztZQUFmOztnQkFDRSxJQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O2dCQUUvRCxJQUFJQyw0QkFBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2pEOztvQkFwQkZDLFlBQVMsU0FBQzs7d0JBRVQsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsUUFBUSxFQUFFLEVBQUU7cUJBRWI7Ozs7O3dCQVBrQ0MsYUFBVTs7Ozs2QkFTMUNDLFFBQUs7NkJBRUxBLFFBQUs7OzBDQVpSOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFBRTt3QkFDWCxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzt3QkFDM0MsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7cUJBQ3ZDOzt1Q0FQRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==