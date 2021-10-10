<template>
  <div>
    <div class="d-flex justify-content-center ml-5">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Nama Kelas</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
    <div v-for="(item, i) in listItem" :key="i">
      <list-item :name="item.name" :date="item.date" :link="item.link" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listItem: [
        {
          name: 'Mastery 1',
          date: '19 Agustus 2021',
        },
        {
          name: 'Mastery 2',
          date: '19 Agustus 2021',
        },
        {
          name: 'Mastery 3',
          date: '19 Agustus 2021',
        },
        {
          name: 'Mastery 4',
          date: '19 Agustus 2021',
        },
        {
          name: 'Mastery 5',
          date: '19 Agustus 2021',
        },
      ],
      link: '/kelas-saya/sunting',
    }
  },
  methods: {
    suntingKelas() {
      this.$router.push('/kelas-saya/sunting')
    },
  },
}
</script>
