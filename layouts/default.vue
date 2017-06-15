<template>
  <div class="container header">
    <div class="row">
      <div class="col-md-12">
        <div class="container header">
          <h1 class="h1">MATIAS NOVOA</h1>
          <h2 class="h2">Software Developer</h2>
          <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <router-link class="nav-link" to="/about">About me</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/skills">Skills</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/experience">Experience</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/education">Education</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="container header">
          <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>
<style media="screen">
  .bg-inverse {
    background-color: #2f4152 !important;
  }
</style>
