<template>
  <div class="nav-container">
    <nav class="navMenu">
          <NuxtLink to ="/">Home</NuxtLink>
          <NuxtLink to ="/entries">Journal Entries</NuxtLink>
          <NuxtLink to ="/about">About</NuxtLink>
      <div class="dot"></div>
    </nav>
    <slot />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

body {
    background: #27374D;
  font-family: "Montserrat", sans-serif;
}


.navMenu {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.navMenu a {
  color: #f6f4e6;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  width: fit-content;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 10px;
}

.navMenu a:hover {
  color: #fddb3a;
}

</style>