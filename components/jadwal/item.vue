<template>
  <div>
    <h5>Kelas Cek</h5>
    <hr />
    <form action="">
      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <label for="namaJadwal">Nama Jadwal</label>
          </div>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              id="namaJadwal"
              v-model="name"
              placeholder="Nama Jadwal"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <label for="tanggal">Tanggal Mulai</label>
          </div>
          <div class="col-md-9">
            <input
              type="date"
              class="form-control"
              id="tanggal"
              v-model="date"
              placeholder="Tanggal"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <label for="tanggal">Tanggal Selesai</label>
          </div>
          <div class="col-md-9">
            <input
              type="date"
              class="form-control"
              id="tanggal"
              v-model="date"
              placeholder="Tanggal"
            />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary mr-2">Simpan</button>
        <button type="button" class="btn btn-secondary">Batal</button>
      </div>
    </form>
  </div>
</template>
