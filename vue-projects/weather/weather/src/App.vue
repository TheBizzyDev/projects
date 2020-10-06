<template>
  <div id="app">
    <div class="test">
      <div class="card-home">
        <div class="hero">
          <div class="hero-city">
            <h5 class="hero-city-location">London, England</h5>
          </div>
          <div class="hero-content">
            <h1 class="hero-content-deg">23</h1>
            <p class="hero-content-weather">Los Angeles</p>
          </div>
        </div>

        <div class="content">
          <div class="search">
            <input class="search-input" type="text" placeholder="Search">
              
            <div class="search-result">
              <ul class="search-result-list">
                <li class="search-result-item">


                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="cta">
          <p class="cta-add"><i class="fa fa-plus mx-2"></i>Add Location</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
*, p {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto";
  color: white;
  text-align: center;
}

.test {
  background: linear-gradient(90deg, rgba(132,130,177,1) 0%, rgba(218,238,255,1) 100%, rgba(155,155,203,0.7147233893557423) 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-home {
  background-color: white;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.hero {
  height: 200px;
  border-radius: 10px 10px 0 0;
  background: url(./assets/london.jpg) center center no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(105, 110, 134, 0.493);
  background-size: cover;
  border: none;
}

.hero-city {
  padding: 30px;
}

.hero-content {
  font-size: 1.5em;
  line-height: .2em;
}

.hero-content-deg:after {
    position: absolute;
    content: "\00B0";
}

.hero-content-deg {
  font-weight: bold;  
}

.hero-content-weather {
  font-size: 0.7em;
  left: 39%;
}


.content {
  height: 300px;
  background-color: #eef2f7;
}

.cta {
  background: rgb(94,92,138);
  padding: 25px;
  border-radius: 0 0 10px 10px;
}

.cta:hover {
  cursor: pointer;
  background: rgb(80, 78, 117);
  padding: 25px;
  border-radius: 0 0 10px 10px;
}

.search {
  padding: 30px;

}

.search-input {
  display: block;
  padding: 10px 15px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: .5px solid rgba(80, 78, 117, 0.308);
}



</style>
