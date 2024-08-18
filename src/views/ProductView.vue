<template>
    <!-- breadcrumb start -->
    <div class="breadcrumb-area">
        <div class="container">
            <div class="breadcrumb-text">
                <ul>
                    <li><a href="#">home</a> <i class="fa fa-caret-right"></i></li>
                    <li>Products</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- breadcrumb end -->
    <div class="product-banner-area">
        <div class="container">
            <div class="product-banner-content">
                <img src="assets/img/banner/11.jpg" alt="">
                <div class="product-banner-text">
                    <h2>Men <br>Clothing</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="product-details-area pt-60">
        <div class="container">
            <div class="product-details-content">
                <div class="row">
                    <div class="col-lg-6">
                        <product-gallery/>
                    </div>
                    <div class="col-lg-6">
                        <div class="product-details-rightbar">
                            <div class="single-product-details">
                                <h2>Oversize poplin shirt</h2>
                                <div class="rating">
                                    <span>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="light-color"><i class="fa fa-star"></i></span>
                                    </span>
                                </div>
                                <h3>$95</h3>
                                <p>Lorem Khaled Ipsum is a major key to success. Stay focused. They never said winning was easy. Some people can’t handle success, I can. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key.</p>
                            </div>
                            <div class="single-product-details ptb-20">
                                <div class="details-stock">
                                    <h4>Availability: <span>In Stock</span></h4>
                                </div>
                                <div class="details-color-size">
                                    <div class="only-color-size">
                                        <div class="details-color">
                                            <h4>Color :</h4>
                                            <div class="color-meta">
                                                <ul>
                                                    <li class="blue">b</li>
                                                    <li class="yellow">y</li>
                                                    <li class="black">g</li>
                                                </ul>
                                            </div>
                                            <a href="#">more</a>
                                        </div>
                                        <div class="details-size">
                                            <span>Size : </span>
                                            <div class="details-size-select">
                                                <form>
                                                    <select class="select">
                                                        <option value="">s </option>
                                                        <option value="">xs</option>
                                                        <option value="">lm</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details-model">
                                        <h4>Model: <span>MNG001</span></h4>
                                    </div>
                                    <div class="details-three-btn">
                                        <a href="#">add to cart</a>
                                        <div class="details-compare-wishlist">
                                            <a href="#"><i class="fa fa-heart"></i></a>
                                            <a href="#"><i class="fa fa-retweet"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-product-details ptb-20">
                                <div class="pro-details-tag-categories">
                                    <div class="pro-details-tag pro-details-common">
                                        <h4>Categories: </h4>
                                        <ul>
                                            <li><a href="#">Fashion,</a></li>
                                            <li><a href="#">Accessories,</a></li>
                                            <li><a href="#">Women,</a></li>
                                            <li><a href="#">Men,</a></li>
                                            <li><a href="#">Kid,</a></li>
                                            <li><a href="#">Mobile & Computer,</a></li>
                                            <li><a href="#">Hair,</a></li>
                                            <li><a href="#">Clothing.</a></li>
                                        </ul>
                                    </div>
                                    <div class="pro-details-categories pro-details-common">
                                        <h4>Products Tag: </h4>
                                        <ul>
                                            <li><a href="#">Fashion,</a></li>
                                            <li><a href="#">Accessories,</a></li>
                                            <li><a href="#">Women,</a></li>
                                            <li><a href="#">Men,</a></li>
                                            <li><a href="#">Kid.</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="single-product-details ptb-20">
                                <h4>Shared this: </h4>
                                <div class="product-social-icon">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="description-review-shipping">
        <div class="container">
            <div class="review-shipping-topbar">
                <ul class="nav" role="tablist">
                    <li>
                        <a class="active" href="#description" data-bs-toggle="tab">
                            Description
                        </a>
                    </li>
                    <li>
                        <a href="#reviews" data-bs-toggle="tab">
                            Reviews
                        </a>
                    </li>
                    <li>
                        <a class="shipping-none" href="#shipping" data-bs-toggle="tab">
                            Shipping
                        </a>
                    </li>
                </ul>
            </div>
            <div class="review-shipping-bottom">
                <div class="tab-content">
                    <div id="description" class="tab-pane active">
                        <p class="description-mrg"></p>
                    </div>
                    <div id="reviews" class="tab-pane">
                        <div class="rattings-wrapper">

                            <comment-list/>

                        </div>
                        <div class="ratting-form-wrapper">
                            <h3>Add your Comments :</h3>
                            <div class="ratting-form">

                                <comment-form/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <product-related/>

    <load-scripts/>
</template>

<script>
//import BrandSlider from '@/components/BrandSlider.vue';
//import ProductRelatedCarousel from '@/components/ProductRelatedCarousel.vue';
import ProductGallery from '@/components/ProductGallery.vue';
import ProductRelated from '@/components/ProductRelated.vue';
import LoadScripts from '@/components/LoadScripts.vue';
import CommentList from '@/components/CommentList.vue';
import CommentForm from '@/components/CommentForm.vue';
export default {
    components: {
        ProductGallery, ProductRelated, LoadScripts, CommentList, CommentForm 
    },
    name: 'ProductView',
    mounted(){
    }
}
</script>

<style scoped>

</style>