<template>
    <v-app>
        <Header></Header>

        <v-main>
            <keep-alive>
                <transition
                    name="slide"
                    mode="out-in"
                >
                    <router-view class="pa-3"></router-view>
                </transition>
            </keep-alive>
        </v-main>

        <Bottom></Bottom>
    </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
import Bottom from "@/components/layout/Bottom";

export default {
    name: 'App',
    components: {Bottom, Header},
};
</script>

<style>

/*slide transition*/
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.2s ease-out;
}
.slide-enter {
    transform: translateX(80%);
}
.slide-leave-to {
    transform: translateX(-80%);
}
</style>