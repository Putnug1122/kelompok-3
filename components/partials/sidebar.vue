<template>
  <div>
    <div class="main-sidebar">
      <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
          <a href="/">Fullstack Academy</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
          <a href="/">Fs</a>
        </div>
        <ul class="sidebar-menu">
          <li class="menu-header">Menu</li>
          <li class="nav-item" v-for="(menu, i) in listClass" :key="i">
            <nuxt-link class="nav-link" :to="menu.link"
              ><i :class="menu.icon"></i> <span>{{ menu.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listClass: [
        {
          name: 'Semua Kelas',
          icon: 'fas fa-users',
          link: '/semua-kelas',
        },
        {
          name: 'Kelas Saya',
          icon: 'fas fa-user-graduate',
          link: '/kelas-saya',
        },
        {
          name: 'Presensi',
          icon: 'fas fa-user-clock',
          link: '/presensi',
        },
      ],
    }
  },
}
</script>
