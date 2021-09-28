<template>
  <div>
    <div class="main-sidebar">
      <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
          <a href="index.html">Stisla</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
          <a href="index.html">St</a>
        </div>
        <ul class="sidebar-menu">
          <li class="menu-header">Tugas</li>
          <li class="nav-item" v-for="(menu, i) in listClass" :key="i">
            <nuxt-link class="nav-link" :to="menu.link"
              ><i :class="menu.icon"></i> <span>{{ menu.name }}</span>
            </nuxt-link>
          </li>
        </ul>
        <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
          <a
            href="https://getstisla.com/docs"
            class="btn btn-primary btn-lg btn-block btn-icon-split"
          >
            <i class="fas fa-rocket"></i> Documentation
          </a>
        </div>
      </aside>
    </div>
  </div>
</template>
