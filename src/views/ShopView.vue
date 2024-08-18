<template>
    <!-- breadcrumb start -->
    <breadcrumb-menu/>
    <!-- breadcrumb end -->
    <product-banner/>

    <div class="product-main-area pt-60 pb-100">
        <div class="container">
            <div class="row">

                <div class="col-lg-3">
                    <div class="product-sidebar-area">
                        <div class="product-sidebar-single">
                            <h3>shop by</h3>

                            <div class="sidebar-widget">
                                <h3 class="sidebar-widget">by categories</h3>
                                <div class="widget-categories">
                                    <ul>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Bags</a></li>
                                        <li><a href="#">Shoes</a></li>
                                        <li><a href="#">Jewelry</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Food / Drink Store</a></li>
                                        <li><a href="#">Gift Store</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Watch</a></li>
                                        <li><a href="#">Other</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h3 class="sidebar-widget">by price</h3>
                                <div class="price_filter">
                                    <div id="slider-range"></div>
                                    <div class="price_slider_amount">
                                        <div class="label-input">
                                            <label>price : </label>
                                            <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                        </div>
                                        <button type="button">Filter</button> 
                                    </div>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h3 class="sidebar-widget">by color</h3>
                                <div class="product-color">
                                    <ul>
                                        <li class="blue">b</li>
                                        <li class="yellow">y</li>
                                        <li class="gray">g</li>
                                        <li class="puce">pu</li>
                                        <li class="black">b</li>
                                        <li class="pink">p</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h3 class="sidebar-widget">by size</h3>
                                <div class="product-size">
                                    <ul>
                                        <li><a href="#">xs</a></li>
                                        <li><a href="#">s</a></li>
                                        <li><a href="#">m</a></li>
                                        <li><a href="#">l</a></li>
                                        <li><a href="#">xl</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h3 class="sidebar-widget">product tags</h3>
                                <div class="product-tags">
                                    <ul>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Bag</a></li>
                                        <li><a href="#">Women</a></li>
                                        <li><a href="#">Tie</a></li>
                                        <li><a href="#">Women</a></li>
                                        <li><a href="#">Dress</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <div class="product-sidebar-single">
                            <h3>best seller</h3>
                            <div class="best-seller">

                                <div class="single-best-seller" v-for="item in 3" :key="item">
                                    <div class="best-seller-img">
                                        <a href="#"><img src="assets/img/shop/small/1.jpg" alt=""></a>
                                    </div>
                                    <div class="best-seller-text">
                                        <h3><a href="#">Minimal White Shoes</a></h3>
                                        <span>$39.9</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-9">
                    <div class="product-top-area">
                        <div class="product-sorting">
                            <div class="sorting sorting-bg-1">
                                <form>
                                    <select class="select">
                                        <option value="">Default softing </option>
                                        <option value="">Sort by news</option>
                                        <option value="">Sort by price</option>
                                    </select>
                                </form>
                            </div>
                            <div class="sorting sorting-bg-2">
                                <form>
                                    <select class="select">
                                        <option value="">Show by </option>
                                        <option value="">900</option>
                                        <option value="">700</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div class="product-showing">
                            <p>Showing 1-12 of 1033 products</p>
                        </div>
                        <div class="product-tablist">
                            <ul class="tab-style nav" role="tablist">
                                <li>
                                    <a class="active" href="#bar1" data-bs-toggle="tab">
                                        <i class="fa fa-th" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#bar2" data-bs-toggle="tab">
                                        <i class="fa fa-th-list" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-bottom-area">
                        <div class="tab-content">
                            <div id="bar1" class="tab-pane active">
                                <div class="row">
                                    
                                    <div class="col-lg-4 col-md-6 col-sm-6"  v-for="item in 30" :key="item">
                                        <div class="single-product mb-10">
                                            <div class="product-img">
                                                <a href="single-product.html">
                                                    <img src="assets/img/shop/product/1.jpg" alt="">
                                                </a>
                                                <span class="brand-color2">-20%</span>
                                                <div class="product-icon text-center">
                                                    <a href="#">
                                                        <i class="fa fa-shopping-basket"></i>
                                                    </a>
                                                    <a href="#">
                                                        <i class="fa fa-heart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product-title text-center">
                                                <h3><a href="product-details.html">Oversize poplin shirt</a></h3>
                                                <span>$50.9</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="paginations pt-65 text-center">
                                <ul>
                                    <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#">19</a></li>
                                    <li class="active"><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    <brand-slider/>
    
</template>

<script>
import BreadcrumbMenu from '@/components/BreadcrumbMenu.vue';
import ProductBanner from '@/components/ProductBanner.vue';
import BrandSlider from '@/components/BrandSlider.vue';
export default {
    name: 'ShopView',
    components: {
        BreadcrumbMenu, ProductBanner, BrandSlider
    },
}
</script>

<style scoped>

</style>

