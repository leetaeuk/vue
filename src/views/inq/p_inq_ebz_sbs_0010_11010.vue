<template>
    <v-dialog
        v-model="isOpen"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
    >
        <v-card tile>
            <v-toolbar
                flat
                dark
                color="teal lighten-2"
            >
                <v-btn
                    icon
                    dark
                    @click="close()"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Settings</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                        dark
                        text
                        @click="closeDialog()"
                    >
                        Save
                    </v-btn>
                </v-toolbar-items>
                <v-menu
                    bottom
                    right
                    offset-y
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            dark
                            icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            @click="() => {}"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar>
            <v-card-text>
                <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="ma-2"
                            v-bind="attrs"
                            v-on="on"
                        >
                            Tool Tip Activator
                        </v-btn>
                    </template>
                    Tool Tip
                </v-tooltip>
                <v-list
                    three-line
                    subheader
                >
                    <v-subheader>User Controls</v-subheader>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Content filtering</v-list-item-title>
                            <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Password</v-list-item-title>
                            <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                    three-line
                    subheader
                >
                    <v-subheader>General</v-subheader>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="notifications"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="sound"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Sound</v-list-item-title>
                            <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="widgets"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Auto-add widgets</v-list-item-title>
                            <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>

            <div style="flex: 1 1 auto;"></div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "p_inq_ebz_sbs_0010_11010",
    props: {
        isOpen: { type: Boolean, default: false },
    },
    data () {
        return {
            notifications: false,
            sound: true,
            widgets: false,
            items: [
                {
                    title: 'Click Me',
                },
                {
                    title: 'Click Me',
                },
                {
                    title: 'Click Me',
                },
                {
                    title: 'Click Me 2',
                },
            ],
            select: [
                { text: 'State 1' },
                { text: 'State 2' },
                { text: 'State 3' },
                { text: 'State 4' },
                { text: 'State 5' },
                { text: 'State 6' },
                { text: 'State 7' },
            ],
        }
    },
    methods : {
        closeDialog() {
            let param = {A:"1"}
            this.$common().closePopup(param);
        },
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>

</style>