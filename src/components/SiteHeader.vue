<template>
  <header class="yco-header d-flex align-items-center">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-xl navbar-light justify-content-between">
          <div class="d-flex order-1 order-sm-1 order-md-1 order-lg-0 order-xl-0 py-0">
            <a class="navbar-brand d-flex justify-content-start align-items-center" href="/">
              <img class="img-fluid" src="@/assets/images/logo.png" alt="Télapúdium Meseszínház" />
            </a>
          </div>
          <ul id="menu-primary-navigation" class="navbar-nav ml-xl-auto">
            <li class="menu-item">
              <a href="/csapatunk/" class="nav-link">Csapatunk</a>
            </li>
            <li class="menu-item">
              <a href="/eseti-megbizas/" class="nav-link">Eseti megbízás</a>
            </li>
            <li class="menu-item">
              <a href="/tartos-megbizas/" class="nav-link">Tartós megbízás</a>
            </li>
            <li class="menu-item">
              <a href="/szakteruleteink/" class="nav-link">Szakterületeink</a>
            </li>
            <li class="menu-item">
              <a href="/elerhetosegeink/" class="nav-link">Elérhetőségeink</a>
            </li>
          </ul>
          <div class="yco-hamburger order-2">
            <span class="yco-header__burger"></span>
            <span class="yco-header__burger"></span>
            <span class="yco-header__burger"></span>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
