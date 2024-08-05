<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toogleMixin from '@/mixins/toogleMixin';

export default {
    name: 'test-dialog',
    components: {
    },
    mixins: [toogleMixin]
    /*props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideDialog(){
            this.$emit('update:show', false)
        }
    }*/
}
</script>

<style scoped>
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    position: fixed;
}
.dialog__content{
    margin: auto;
    border-radius: 10px;
    min-width: 300px;
    min-height: 50px;
    background: white;
    padding: 20px;
}
</style>