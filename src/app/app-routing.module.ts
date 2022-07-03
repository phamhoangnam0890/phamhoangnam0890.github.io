import {Routes, RouterModule} from "@angular/router";
import {paths} from "./app-paths";
import {AuthGuard} from "./guards/auth.guard";
import {WarningComponent} from "./components/warning/warning.component";
import {WarningGuard} from "./guards/warning.guard";

// Login
import {LoginComponent} from "./components/login/login.component";

// Dashboard
import {DashboardComponent} from "./components/dashboard/dashboard.component";

// 仕入管理
import {PurchaseListComponent} from "./components/purchases/purchase-list/purchase-list.component";
import {PurchaseInfoComponent} from "./components/purchases/purchase-info/purchase-info.component";

// 在庫管理
import {StockListComponent} from "./components/stock/stock-list/stock-list.component";
import {StockInfoComponent} from "./components/stock/stock-info/stock-info.component";
import {StockEditComponent} from "./components/stock/stock-edit/stock-edit.component";
import {StockDeleteComponent} from "./components/stock/stock-delete/stock-delete.component";

// 商品マスター
import {ItemListComponent} from "./components/items/item-list/item-list.component";
import {ItemCreateComponent} from "./components/items/item-create/item-create.component";
import {ItemEditComponent} from "./components/items/item-edit/item-edit.component";
import {ItemInfoComponent} from "./components/items/item-info/item-info.component";
import {ItemShopYahooEditComponent} from "./components/items/item-shop-edit/item-shop-edit.yahoo.component";
import {ItemShopBaseEditComponent} from "./components/items/item-shop-edit/item-shop-edit.base.component";
import {ItemShopRakutenEditComponent} from "./components/items/item-shop-edit/item-shop-edit.rakuten.component";

// 注文管理
import {OrderListComponent} from "./components/orders/order-list/order-list.component";
import {OrderInfoComponent} from "./components/orders/order-info/order-info.component";
import {OrderCreateComponent} from "./components/orders/order-create/order-create.component";
import {OrderDeleteComponent} from "./components/orders/order-delete/order-delete.component";

// ユーザー管理
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {UserCreateComponent} from "./components/users/user-create/user-create.component";
import {UserInfoComponent} from "./components/users/user-info/user-info.component";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";
import {UserDeleteComponent} from "./components/users/user-delete/user-delete.component";

// お知らせ
import {NoticeListComponent} from "./components/notices/notice-list/notice-list.component";
import {NoticeInfoComponent} from "./components/notices/notice-info/notice-info.component";
import {NoticeCreateComponent} from "./components/notices/notice-create/notice-create.component";
import {NoticeEditComponent} from "./components/notices/notice-edit/notice-edit.component";
import {NoticeDeleteComponent} from "./components/notices/notice-delete/notice-delete.component";

// 楽天カテゴリ管理
import {ItemCategoryEditComponent} from "./components/item-categories/item-category-edit/item-category-edit.component";
import {ItemCategoryListComponent} from "./components/item-categories/item-category-list/item-category-list.component";

// システム設定
import {SystemSettingsComponent} from "./components/system-settings/system-settings.component";

// 楽天イベント
import {ItemEventListComponent} from "./components/item-events/item-event-list/item-event-list.component";
import {ItemEventInfoComponent} from "./components/item-events/item-event-info/item-event-info.component";
import {ItemEventCreateComponent} from "./components/item-events/item-event-create/item-event-create.component";
import {ItemEventEditComponent} from "./components/item-events/item-event-edit/item-event-edit.component";
import {ItemEventDeleteComponent} from "./components/item-events/item-event-delete/item-event-delete.component";
import {ItemEventItemInfoComponent} from "./components/item-events/item-event-item-info/item-event-item-info.component";
import {CategoriesListComponent} from "./components/categories/categories-list/categories-list.component";
import {CategoriesInfoComponent} from "./components/categories/categories-info/categories-info.component";
import {CategoriesEditComponent} from "./components/categories/categories-edit/categories-edit.component";
import {CategoriesCreateComponent} from "./components/categories/categories-create/categories-create.component";

const routes: Routes = [
    // Login
    {path: paths.login, component: LoginComponent},

    // Dashboard
    {path: paths.dashboard, component: DashboardComponent, canActivate: [AuthGuard]},

    // Purchase management（仕入管理）
    {path: paths.purchase_list, component: PurchaseListComponent, canActivate: [AuthGuard]},
    {path: paths.purchase_info, component: PurchaseInfoComponent, canActivate: [AuthGuard]},

    // Inventory management（在庫管理）
    {path: paths.stock_list, component: StockListComponent, canActivate: [AuthGuard]},
    {path: paths.stock_info, component: StockInfoComponent, canActivate: [AuthGuard]},
    {path: paths.stock_edit, component: StockEditComponent, canActivate: [AuthGuard]},
    {path: paths.stock_delete, component: StockDeleteComponent, canActivate: [AuthGuard]},

    // Categories
    {path: paths.categories_list, component: CategoriesListComponent, canActivate: [AuthGuard]},
    {path: paths.categories_info, component: CategoriesInfoComponent, canActivate: [AuthGuard]},
    {path: paths.categories_edit, component: CategoriesEditComponent, canActivate: [AuthGuard]},
    {path: paths.categories_create, component: CategoriesCreateComponent, canActivate: [AuthGuard]},

    // Item Register（商品登録）
    {path: paths.item_list, component: ItemListComponent, canActivate: [AuthGuard]},
    {path: paths.item_create, component: ItemCreateComponent, canActivate: [AuthGuard]},
    {path: paths.item_create_copy, component: ItemCreateComponent, canActivate: [AuthGuard]},
    {path: paths.item_edit, component: ItemEditComponent, canActivate: [AuthGuard]},
    {path: paths.item_info, component: ItemInfoComponent, canActivate: [AuthGuard]},
    {path: paths.item_shop_edit_yahoo, component: ItemShopYahooEditComponent, canActivate: [AuthGuard]},
    {path: paths.item_shop_edit_base, component: ItemShopBaseEditComponent, canActivate: [AuthGuard]},
    {path: paths.item_shop_edit_rakuten, component: ItemShopRakutenEditComponent, canActivate: [AuthGuard]},

    // Order management（注文管理）
    {path: paths.order_list, component: OrderListComponent, canActivate: [AuthGuard]},
    {path: paths.order_info, component: OrderInfoComponent, canActivate: [AuthGuard]},
    {path: paths.order_create, component: OrderCreateComponent, canActivate: [AuthGuard]},
    {path: paths.order_delete, component: OrderDeleteComponent, canActivate: [AuthGuard]},

    // User management（ユーザー管理）
    {path: paths.user_list, component: UserListComponent, canActivate: [AuthGuard]},
    {path: paths.user_info, component: UserInfoComponent, canActivate: [AuthGuard]},
    {path: paths.user_create, component: UserCreateComponent, canActivate: [AuthGuard]},
    {path: paths.user_edit, component: UserEditComponent, canActivate: [AuthGuard]},
    {path: paths.user_delete, component: UserDeleteComponent, canActivate: [AuthGuard]},

    // Notice（お知らせ）
    {path: paths.notice_list, component: NoticeListComponent, canActivate: [AuthGuard]},
    {path: paths.notice_info, component: NoticeInfoComponent, canActivate: [AuthGuard]},
    {path: paths.notice_create, component: NoticeCreateComponent, canActivate: [AuthGuard]},
    {path: paths.notice_edit, component: NoticeEditComponent, canActivate: [AuthGuard]},
    {path: paths.notice_delete, component: NoticeDeleteComponent, canActivate: [AuthGuard]},

    // Item Categories（楽天カテゴリ管理）
    {path: paths.item_category_list_rakuten, component: ItemCategoryListComponent, canActivate: [AuthGuard]},
    {path: paths.item_category_edit_rakuten, component: ItemCategoryEditComponent, canActivate: [AuthGuard]},

    // Item events（楽天イベント管理）
    {path: paths.item_event_list_rakuten, component: ItemEventListComponent, canActivate: [AuthGuard]},
    {path: paths.item_event_info_rakuten, component: ItemEventInfoComponent, canActivate: [AuthGuard]},
    {path: paths.item_event_create_rakuten, component: ItemEventCreateComponent, canActivate: [AuthGuard]},
    {path: paths.item_event_edit_rakuten, component: ItemEventEditComponent, canActivate: [AuthGuard]},
    {path: paths.item_event_delete_rakuten, component: ItemEventDeleteComponent, canActivate: [AuthGuard]},
    {path: paths.item_event_info_item_rakuten, component: ItemEventItemInfoComponent, canActivate: [AuthGuard]},

    // System Settings（システム設定）
    {path: paths.system_setting_list, component: SystemSettingsComponent, canActivate: [AuthGuard]},

    // warning
    {path: paths.warning, component: WarningComponent, canActivate: [AuthGuard]},
];

export const AppRoutes = RouterModule.forRoot(routes, {
    scrollPositionRestoration: "top",
    relativeLinkResolution: "legacy",
});
