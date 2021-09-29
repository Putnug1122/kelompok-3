<template>
  <div class="card" style="width: 18rem">
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <a href="#" class="card-link"
        >{{ desc }} <i class="fas fa-arrow-alt-circle-right"></i
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
    },
    image: {
      type: String,
      default:
        'https://shiftacademy.id/wp-content/uploads/2019/07/Logo-Shift-Academy-with-Circle.png',
    },
    name: {
      type: String,
      default: 'Shift Academy',
    },
    desc: {
      type: String,
      default: 'Lihat Kelas',
    },
  },
}
</script>
