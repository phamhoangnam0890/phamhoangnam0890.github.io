export const paths = {
    // Dashboard ============================================
    dashboard: "",

    // Login ================================================
    login: "login",

    // Purchase management（仕入管理） =====================
    purchase_list: "purchases",
    purchase_info: "purchases/info/:purchaseId",

    // Inventory management（在庫管理） =====================
    stock_list: "stock",
    stock_info: "stock/info/:itemId",
    stock_edit: "stock/edit/:itemId",
    stock_delete: "stock/delete/:itemId",

    categories_list: "categories",
    categories_create: "categories/create",
    categories_edit: "categories/edit/:categoryId",
    categories_info: "categories/info/:categoryId",

    // Item Register（商品登録） ============================
    item_list: "items",
    item_create: "items/create",
    item_create_copy: "items/create/copy/:copyType/:itemId",
    item_edit: "items/edit/:itemId",
    item_info: "items/info/:itemId",
    item_shop_edit_yahoo: "items/edit/yahoo/:itemId",
    item_shop_edit_base: "items/edit/base/:itemId",
    item_shop_edit_rakuten: "items/edit/rakuten/:itemId",

    // Order management（注文管理） =========================
    order_list: "orders",
    order_info: "orders/info/:orderId",
    order_create: "orders/create",
    order_delete: "orders/delete/:orderId",

    // User management（ユーザー管理） ======================
    user_list: "users",
    user_info: "users/info/:userId",
    user_create: "users/create",
    user_edit: "users/edit/:userId",
    user_delete: "users/delete/:userId",

    // Notice（お知らせ） =========================
    notice_list: "notices",
    notice_info: "notices/info/:noticeId",
    notice_create: "notices/create",
    notice_edit: "notices/edit/:noticeId",
    notice_delete: "notices/delete/:noticeId",

    // Item categories（楽天カテゴリ管理） =========================
    item_category_list_rakuten: "item-categories/rakuten",
    item_category_edit_rakuten: "item-categories/rakuten/edit/:itemCategoryId",

    // Item events（楽天イベント管理） =========================
    item_event_list_rakuten: "item-events/rakuten",
    item_event_info_rakuten: "item-events/rakuten/info/:itemEventId",
    item_event_create_rakuten: "item-events/rakuten/create",
    item_event_edit_rakuten: "item-events/rakuten/edit/:itemEventId",
    item_event_delete_rakuten: "item-events/rakuten/delete/:itemEventId",
    item_event_info_item_rakuten: "item-events/rakuten/info/:itemEventId/item/:itemId",

    //  System Setting（システム設定） =========================
    system_setting_list: "settings",

    // Warning ================================================
    warning: "warning",
};
