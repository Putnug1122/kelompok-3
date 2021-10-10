<template>
  <div class="row">
    <div v-for="(kelas, i) in listKelas" :key="i" class="m-4">
      <card-item
        class="shadow"
        :id="kelas.id"
        :name="kelas.name"
        :start="kelas.start_date"
        :end="kelas.end_date"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listKelas: [
        {
          id: 1,
          name: 'Front End',
          start_date: '19 Agustus 2021',
          end_date: '19 Desember 2021',
        },
        {
          id: 2,
          name: 'Back End',
          start_date: '19 Agustus 2021',
          end_date: '19 Desember 2021',
        },
        {
          id: 3,
          name: 'Full Stack',
          start_date: '19 Agustus 2021',
          end_date: '19 Desember 2021',
        },
      ],
    }
  },
}
</script>
