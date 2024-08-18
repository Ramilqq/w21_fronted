<template>
    <form action="#">
        <div class="star-box">
            <h2>Rating:</h2>
            <div class="ratting-star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="rating-form-style mb-20">
                    <input placeholder="Name" type="text">
                </div>
            </div>
            <div class="col-md-6">
                <div class="rating-form-style mb-20">
                    <input placeholder="Email" type="text">
                </div>
            </div>
            <div class="col-md-12">
                <div class="rating-form-style">
                    <textarea name="message" placeholder="Message"></textarea>
                    <button class="submit" type="submit">add review</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CommetnForm',
    components: {
    },
    props: {
    },
    methods: {
    }
}
</script>

<style scoped>

</style>