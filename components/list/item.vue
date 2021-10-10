<template>
  <div class="card mb-3 w-100">
    <div class="row no-gutters">
      <div class="col-md-4 d-flex align-items-center justify-content-center">
        <img :src="image" alt="..." class="img-fluid" />
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">
            {{ date }}
          </p>
        </div>
      </div>
      <div class="col-md d-flex align-items-center justify-content-center">
        <div class="dropdown">
          <a href="#" id="dropdownMenuLink" data-toggle="dropdown">
            <i class="fas fa-ellipsis-v"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" :href="link">Sunting</a>
            <a class="dropdown-item" href="#">Hapus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Fullstack Academy',
    },
    image: {
      type: String,
      default: 'https://nuxtjs.org/design-kit/colored-logo.png',
    },
    date: {
      type: String,
      default: '19 Desember 2021',
    },
    link: {
      type: String,
      default: '/kelas-saya/sunting',
    },
  },
}
</script>
