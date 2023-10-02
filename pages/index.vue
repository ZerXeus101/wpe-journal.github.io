<template>
  <div class="page">
    <div class="background-animation">
      <div class="ripple-background">
        <div class="circle xxlarge shade1"></div>
        <div class="circle xlarge shade2"></div>
        <div class="circle large shade3"></div>
        <div class="circle medium shade4"></div>
        <div class="circle small shade5"></div>
      </div>
    </div>
    <div id="homepage">
      <div class="content-wrapper">
        <!-- 1st row 1st column -->
        <section class="text-intro-wrapper">
          <div class="border-box">
            <div class="intro">
              <div class="text-scroll">
                <div class="text-top">
                  <span class="block-top">BY</span>
                  <span class="block-top">FOR</span>
                </div>
                <div class="text-bottom">
                  <span class="block-bot">BY</span>
                  <span class="block-bot">FOR</span>
                </div>
              </div>
            </div>
          </div>
          <div class="ZerXeus words">
            <span>Z</span>
            <span>E</span>
            <span>R</span>
            <span>X</span>
            <span>E</span>
            <span>U</span>
            <span>S</span>
          </div>
        </section>
        <!-- 2nd row 2nd column -->
        <section class="self-intro-wrapper">
          <div class="box-container">
            <div class="picture-of-self"> this is an image</div>
            <div class="intro-heading">Joshua Briones</div>
            <div class="intro-subheading">BSCS 1 - GE10 A</div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-repeat: no-repeat;
  overflow: hidden;
}

#homepage {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;
  margin-top: 50px;
  width: 100%;
  overflow: hidden;
  padding-bottom: 20px;
}

.text-intro-wrapper {
  grid-row: 1;
  grid-column: 1;
  display: flex;
  align-items: center;
  padding-left: 70px;
  font-size: 30px;
  font-family: monospace;
  font-weight: bold;
  width: 100%;
}
.self-intro-wrapper {
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.picture-of-self {
  width: 250px;
  height: 250px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.box-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 3s wipe-in2 forwards;
  opacity: 0;
  background: #6499E9;
  color: #27374d;
  border-radius: 1rem;
  width: 500px;
  transition: scale 0.3s ease;
  gap: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.box-container:hover {
  scale: 1.05; /* Width of the card on hover */
}

.intro-heading {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 10px;
}

.intro-subheading {
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 30px;
}

.intro {
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  max-height: 50px;
  overflow: hidden;
}
.text-scroll {
  display: flex;
  flex-direction: column;
  color: #fff3da;
}

.block-top {
  display: flex;
  flex-direction: column;
  animation: spin_words 5s;
}

@keyframes spin_words {
  10% {
    transform: translateY(12%);
  }
  35% {
    transform: translateY(128.5%);
  }
  60% {
    transform: translateY(12%);
  }
  80% {
    transform: translateY(128.5%);
  }
  100% {
    transform: translateY(0%);
  }
}

.block-bot {
  display: flex;
  flex-direction: column;
  animation: spin_words2 5s;
}

@keyframes spin_words2 {
  10% {
    transform: translateY(-12%);
  }
  35% {
    transform: translateY(-98.5%);
  }
  60% {
    transform: translateY(-12%);
  }
  80% {
    transform: translateY(-98.5%);
  }
  100% {
    transform: translateY(-0%);
  }
}

.text-top {
  overflow: hidden;
  position: relative;
}
.text-bottom {
  overflow: hidden;
  position: relative;
}

.block {
  display: block;
}

.ZerXeus {
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-self: center;
  font-family: monospace;
  font-weight: bold;
  color: #8cabff;
  overflow: visible;
  padding-left: 5px;
}

.words {
  color: #27374d;
  font-size: 0;
  line-height: 1.5;
}

.words span {
  font-size: 5rem;
  display: inline-block;
  animation: move 3s ease-in-out forwards;
  transition: scale 0.3s ease;
}

.words span:hover {
  scale: 1.5;
}

@keyframes move {
  0% {
    transform: translate(30%, 0);
    color: #27374d;
    text-shadow: transparent;
  }
  50% {
    text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
  }
  100% {
    transform: translate(0%, 0);
    color: #ffd2d7;
    text-shadow: rgba(0, 0, 0, 0.25) 0px 27px 27.5px, rgba(0, 0, 0, 0.12) 0px -6px 15px, rgba(0, 0, 0, 0.12) 0px 2px 3px,
      rgba(0, 0, 0, 0.17) 0px 6px 7.5px, rgba(0, 0, 0, 0.09) 0px -1.5px 2.5px;
  }
}

.words span:nth-child(2) {
  animation-delay: 0.1s;
}

.words span:nth-child(3) {
  animation-delay: 0.3s;
}

.words span:nth-child(4) {
  animation-delay: 0.6s;
}

.words span:nth-child(5) {
  animation-delay: 0.9s;
}

.words span:nth-child(6) {
  animation-delay: 1.3s;
}

.words span:nth-child(7) {
  animation-delay: 1.5s;
}

.background-animation {
  animation: 3s wipe-in-first forwards;

  position: fixed;
  left: 0;
  bottom: 0;
}

@keyframes wipe-in-first {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.border-box {
  z-index: 2;
  width: 70px;
  height: 70px;
  border: 5px solid #ffb4b4;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 3s wipe-in forwards;
  opacity: 0;
  transform: translateX(-100%);
}

@keyframes wipe-in {
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


@keyframes wipe-in2 {
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.border-box {
  position: relative;
}

.border-box:before {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  z-index: -1;
  box-shadow: 0 0 12px #000000;
}

/* background-animation */
.circle {
  position: absolute;
  border-radius: 50%;
  background: rgb(68, 119, 206);
  animation: ripple 30s infinite;
  box-shadow: 0px 0px 1px 0px #512b81;
}

.small {
  width: 200px;
  height: 200px;
  left: -100px;
  bottom: -100px;
}

.medium {
  width: 400px;
  height: 400px;
  left: -200px;
  bottom: -200px;
}

.large {
  width: 600px;
  height: 600px;
  left: -300px;
  bottom: -300px;
}

.xlarge {
  width: 800px;
  height: 800px;
  left: -400px;
  bottom: -400px;
}

.xxlarge {
  width: 1000px;
  height: 1000px;
  left: -500px;
  bottom: -500px;
}

.shade1 {
  opacity: 0.2;
}
.shade2 {
  opacity: 0.5;
}

.shade3 {
  opacity: 0.7;
}

.shade4 {
  opacity: 0.8;
}

.shade5 {
  opacity: 0.9;
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.8);
  }
}
</style>
