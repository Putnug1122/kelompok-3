<template>
  <div>
    <h5>Sesi 1</h5>
    <hr />
    <form action="">
      <div class="form-group">
        <label for="">Judul</label>
        <input type="text" class="form-control" v-model="judul" />
      </div>
      <div class="form-group">
        <label for="">Tipe</label>
        <select class="form-control" v-model="tipe">
          <option value="">Pilih Tipe</option>
          <option value="1">Video</option>
          <option value="2">Materi</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">File</label>
        <input type="file" class="form-control" />
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary mr-2">Simpan</button>
        <button type="button" class="btn btn-secondary">Batal</button>
      </div>
    </form>
  </div>
</template>
