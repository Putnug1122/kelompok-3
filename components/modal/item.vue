<template>
  <div>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="row">
          <div class="col-md-4">
            <img :src="image" class="img-fluid" />
          </div>
          <div class="col-md-8">
            <h3>{{ name }}</h3>
            <button type="button" class="btn btn-primary">Deskripsi</button>
            <button type="button" class="btn btn-primary">Jadwal</button>
            <p>{{ desc }}</p>
            <button type="button" class="btn btn-primary">Lihat Kelas</button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: 'Mastery 1',
    },
    desc: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.',
    },
    image: {
      type: String,
      default:
        'https://shiftacademy.id/wp-content/uploads/2019/07/Logo-Shift-Academy-with-Circle.png',
    },
  },
}
</script>
