import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {QRCodeModule} from 'angularx-qrcode';

import {AppRoutes} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoaderDirective} from "./directives/loader.directive";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PagerService} from "./services/pager.service";
import {DatePipe, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {LoadingBarModule} from "@ngx-loading-bar/core";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {LightboxModule} from "ngx-lightbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CookieService} from "ngx-cookie-service";
import {CommonNavComponent} from "./components/common-nav/common-nav.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PurchaseListComponent} from "./components/purchases/purchase-list/purchase-list.component";
import {PurchaseInfoComponent} from "./components/purchases/purchase-info/purchase-info.component";
import {StockListComponent} from "./components/stock/stock-list/stock-list.component";
import {StockInfoComponent} from "./components/stock/stock-info/stock-info.component";
import {StockEditComponent} from "./components/stock/stock-edit/stock-edit.component";
import {StockDeleteComponent} from "./components/stock/stock-delete/stock-delete.component";
import {ItemCreateComponent} from "./components/items/item-create/item-create.component";
import {ItemListComponent} from "./components/items/item-list/item-list.component";
import {ItemEditComponent} from "./components/items/item-edit/item-edit.component";
import {ItemInfoComponent} from "./components/items/item-info/item-info.component";
import {ItemShopYahooEditComponent} from "./components/items/item-shop-edit/item-shop-edit.yahoo.component";
import {ItemShopBaseEditComponent} from "./components/items/item-shop-edit/item-shop-edit.base.component";
import {ItemShopRakutenEditComponent} from "./components/items/item-shop-edit/item-shop-edit.rakuten.component";
import {OrderListComponent} from "./components/orders/order-list/order-list.component";
import {OrderInfoComponent} from "./components/orders/order-info/order-info.component";
import {OrderCreateComponent} from "./components/orders/order-create/order-create.component";
import {OrderDeleteComponent} from "./components/orders/order-delete/order-delete.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {UserCreateComponent} from "./components/users/user-create/user-create.component";
import {UserInfoComponent} from "./components/users/user-info/user-info.component";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";
import {UserDeleteComponent} from "./components/users/user-delete/user-delete.component";
import {NoticeListComponent} from "./components/notices/notice-list/notice-list.component";
import {NoticeCreateComponent} from "./components/notices/notice-create/notice-create.component";
import {NoticeEditComponent} from "./components/notices/notice-edit/notice-edit.component";
import {NoticeDeleteComponent} from "./components/notices/notice-delete/notice-delete.component";
import {NoticeInfoComponent} from "./components/notices/notice-info/notice-info.component";
import {ItemCategoryEditComponent} from "./components/item-categories/item-category-edit/item-category-edit.component";
import {ItemCategoryListComponent} from "./components/item-categories/item-category-list/item-category-list.component";
import {ItemEventListComponent} from "./components/item-events/item-event-list/item-event-list.component";
import {ItemEventCreateComponent} from "./components/item-events/item-event-create/item-event-create.component";
import {ItemEventInfoComponent} from "./components/item-events/item-event-info/item-event-info.component";
import {ItemEventEditComponent} from "./components/item-events/item-event-edit/item-event-edit.component";
import {ItemEventDeleteComponent} from "./components/item-events/item-event-delete/item-event-delete.component";
import {SystemSettingsComponent} from "./components/system-settings/system-settings.component";
import {WarningComponent} from "./components/warning/warning.component";
import {ItemEventItemInfoComponent} from "./components/item-events/item-event-item-info/item-event-item-info.component";
import {CategoriesListComponent} from './components/categories/categories-list/categories-list.component';
import {CategoriesEditComponent} from './components/categories/categories-edit/categories-edit.component';
import {CategoriesInfoComponent} from './components/categories/categories-info/categories-info.component';
import {CategoriesCreateComponent} from './components/categories/categories-create/categories-create.component';

@NgModule({
    declarations: [
        AppComponent,

        // 共通（ヘッダー・サイドバー）
        CommonNavComponent,

        // Login
        LoginComponent,

        // Dashboard
        DashboardComponent,

        // Purchase management（仕入管理）
        PurchaseListComponent,
        PurchaseInfoComponent,

        // Inventory management（在庫管理）
        StockListComponent,
        StockInfoComponent,
        StockEditComponent,
        StockDeleteComponent,

        // Item Master（商品マスター）
        ItemCreateComponent,
        ItemListComponent,
        ItemEditComponent,
        ItemInfoComponent,
        ItemShopYahooEditComponent,
        ItemShopBaseEditComponent,
        ItemShopRakutenEditComponent,

        // Order management（注文管理）
        OrderListComponent,
        OrderInfoComponent,
        OrderCreateComponent,
        OrderDeleteComponent,

        // User management（ユーザー管理）
        UserListComponent,
        UserCreateComponent,
        UserInfoComponent,
        UserEditComponent,
        UserDeleteComponent,
        LoaderDirective,

        // Notice（お知らせ）
        NoticeListComponent,
        NoticeCreateComponent,
        NoticeEditComponent,
        NoticeDeleteComponent,
        NoticeInfoComponent,

        // Item Categories（楽天カテゴリ管理）
        ItemCategoryEditComponent,
        ItemCategoryListComponent,

        // Item Event（楽天イベント管理）
        ItemEventListComponent,
        ItemEventCreateComponent,
        ItemEventInfoComponent,
        ItemEventEditComponent,
        ItemEventDeleteComponent,

        // System Settings（システム設定）
        SystemSettingsComponent,

        WarningComponent,
        ItemEventItemInfoComponent,
        CategoriesListComponent,
        CategoriesEditComponent,
        CategoriesInfoComponent,
        CategoriesCreateComponent,
    ],
    imports: [QRCodeModule, BrowserModule, LoadingBarModule, LoadingBarHttpClientModule, BrowserAnimationsModule, MatNativeDateModule, AppRoutes, MatDialogModule, BrowserAnimationsModule, FormsModule, HttpClientModule, MatDialogModule, ReactiveFormsModule, LightboxModule, DragDropModule],
    providers: [
        PagerService,
        DatePipe,
        CookieService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
