<template>
    <select
        v-bind:value="modelValue"
        @change="chaneOptions"
    >
        <option value="0" disabled>Выберите из списка</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.name"
        >
        {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'test-select',
    props:{
        modelValue : {
            type: String,
        },
        options: {
            type: Array,
            default: () => {}
        }
    },
    methods:{
        chaneOptions (event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>