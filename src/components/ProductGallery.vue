<template>
    <div class="product-details-leftbar">
      <div class="tab-content product-details-images">
          <div class="tab-pane active" id="tab1">
              <img src="assets/img/shop/product-details/1.jpg" alt="" />
          </div>
          <div class="tab-pane" id="tab2">
              <img src="assets/img/shop/product-details/2.jpg" alt="" />	
          </div>
          <div class="tab-pane" id="tab3">
              <img src="assets/img/shop/product-details/3.jpg" alt="" />			
          </div>
      </div>
      <div class="product-tab-details nav">
          <a href="#tab1" data-bs-toggle="tab" class="active">
              <img src="assets/img/shop/product-details/s1.jpg" alt="" />
          </a>
          <a href="#tab2" data-bs-toggle="tab">
              <img src="assets/img/shop/product-details/s2.jpg" alt="" />
          </a>
          <a href="#tab3" data-bs-toggle="tab">
              <img src="assets/img/shop/product-details/s3.jpg" alt="" />
          </a>
      </div>
  </div>
</template>
  
<script>

export default {
  name: 'ProductGallery',
  components: {
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
