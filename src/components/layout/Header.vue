<template>
    <div>
        <v-app-bar
            fixed
            app
            color="teal lighten-2"
            elevation="4"
            dark
        >
            <v-btn icon>
                <v-icon @click="$common().locationBack()">mdi-chevron-left</v-icon>
            </v-btn>
            <v-toolbar-title></v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-app-bar-nav-icon @click="toggle=!toggle"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="toggle" right color="teal lighten-2" app dark>
            <v-list nav>
                <v-list-item v-for="(item, i) of ['조회', '이체']" :key="i">
                    {{ item }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        toggle: null
    }),
}
</script>