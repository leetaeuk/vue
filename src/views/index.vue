<template>
    <div id="app">
        <div class="my-2">
            <v-btn color="teal lighten-2" dark @click="$common().location('inq_ebz_sbs_0010_11010');">조회</v-btn>
        </div>
        <div class="my-2">
            <v-btn color="teal lighten-2" dark @click="$common().location('pay_ebz_sbs_0010_11010');">이체</v-btn>
        </div>
        <div class="my-2">
            <v-btn color="teal lighten-2" dark @click="$common().openPopup('p_inq_ebz_sbs_0010_11010')">팝업</v-btn>

            <component
                v-if="dialogComponent"
                :is="dialogComponent"
                :params="params"
                :isOpen="isOpen"
                @closeCallback="closePopup"
                @close="$common().closePopup()"
            />
        </div>

    </div>
</template>


<script>
export default {
    activated() {
    },
    data () {
        return {
            params          : null,
            isOpen          : false,
            dialogComponent : null
        }
    },
    methods: {
        closePopup(params)
        {
            this.isOpen = false;
            alert(JSON.stringify(params))
        }
    }
}
</script>