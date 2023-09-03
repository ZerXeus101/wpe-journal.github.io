<template> 
  <div>
    <slot />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

body {
  background: #27374d;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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

/*animation */

</style>
