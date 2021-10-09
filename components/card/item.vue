<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      tabindex="-1"
      aria-hidden="true"
      data-backdrop="false"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{{ name }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <img :src="image" class="img-fluid" alt="..." />
              </div>
              <div class="col-md-8">
                <button class="btn btn-primary">Deskripsi</button>
                <button class="btn btn-secondary">Jadwal</button>
                <p class="mt-5">{{ desc }}</p>
                <!-- this appear when jadwal clicked -->
                <div>
                  <p>Jadwal Mulai : {{ start }}</p>
                  <p>Jadwal Selesai : {{ end }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Tutup
            </button>
            <a href="/kelas-saya">
              <button type="button" class="btn btn-primary">Lihat Kelas</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img :src="image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <button
          :href="link"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {{ subName }} <i class="fas fa-arrow-alt-circle-right"></i>
        </button>
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
    image: {
      type: String,
      default:
        'https://shiftacademy.id/wp-content/uploads/2019/07/Logo-Shift-Academy-with-Circle.png',
    },
    name: {
      type: String,
      default: 'Shift Academy',
    },
    subName: {
      type: String,
      default: 'Lihat Kelas',
    },
    desc: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
    },
    link: {
      type: String,
      default: '#',
    },
    start: {
      type: String,
      default: '19 Agustus 2021',
    },
    end: {
      type: String,
      default: '19 Desember 2021',
    },
  },
}
</script>
