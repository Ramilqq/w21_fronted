<template>
    <input :value="modelValue" @input="updateInput" type="text" class="input_text" />
</template>

<script>
export default {
    name: 'test-input',
    props: {
        modelValue: [String, Number],
        //myValue: [String, Number],
    },
    methods: {
        updateInput(event){
            //console.log(event.target.value)
            this.$emit('update:modelValue', event.target.value);
            //this.$emit('update:myValue', event.target.value);
        }
    }
}
</script>

<style scoped>

</style>