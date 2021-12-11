import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("@/views/index.vue"),
        meta: {title: "메인"}
    },
    {
        path: "/inq_ebz_sbs_0010_11010",
        name: "inq_ebz_sbs_0010_11010",
        component: () => import("@/views/inq/inq_ebz_sbs_0010_11010.vue"),
        meta: {title: "거래내역조회"}
    },
    {
        path: "/p_inq_ebz_sbs_0010_11010",
        name: "p_inq_ebz_sbs_0010_11010",
        component: () => import("@/views/inq/p_inq_ebz_sbs_0010_11010.vue"),
        meta: {title: "팝업"}
    },
    {
        path: "/pay_ebz_sbs_0010_11010",
        name: "pay_ebz_sbs_0010_11010",
        component: () => import("@/views/pay/pay_ebz_sbs_0010_11010.vue"),
        meta: {title: "이체"}
    }
];

export default new VueRouter({
    mode : "history",
    base : process.env.BASE_URL,
    routes
});