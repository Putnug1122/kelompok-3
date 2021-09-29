<template>
  <div id="app">
    <div class="main-wrapper">
      <div class="navbar-bg"></div>
      <partials-navbar />
      <partials-sidebar />

      <!-- Main Content -->
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <Nuxt />
          </div>

          <div class="section-body"></div>
        </section>
      </div>
      <partials-footer />
    </div>
  </div>
</template>
