<template>
  <div id="app">
    <div class="test">
      <div class="card-home">
        <div class="hero">
          <app-city :city="city" :country="country"></app-city>
          <app-temp :desc="desc" :temp="temp"></app-temp>
        </div>
        <div class="content">
          <div class="search">
            <input
              v-model="citySearch"
              class="search-input"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div class="cta" @click="callCity">
          <p class="cta-add"><i class="fa fa-plus mx-2"></i>Add Location</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import City from "./components/City.vue";
import Temp from "./components/Temp.vue";

export default {
  components: {
    "app-city": City,
    "app-temp": Temp,
  },

  name: "app",
  data() {
    return {
      citySearch: "",
      city: "",
      country: "",
      temp: "",
      desc: "",
      icon: "",
    };
  },
  mounted: function () {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=eab7ae92a4cfd01790d59291657d4d92"
      )
      .then((response) => {
        this.response = response.data.name;

        console.log(response);

        this.icon = response.data.weather[0].icon;

        let temp = response.data.main.temp;

        let formula = ((temp - 273.15) * 9) / 5 + 32;

        this.temp = formula.toFixed(0);

        this.city = response.data.name;

        this.country = response.data.sys.country;

        this.desc = response.data.weather[0].description;
      });
  },

  methods: {
    callCity() {
      this.citySearch = this.citySearch.trim();

      if (
        this.citySearch !== "" &&
        this.citySearch !== undefined &&
        this.citySearch !== null
      ) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=eab7ae92a4cfd01790d59291657d4d92`
          )
          .then((response) => {
            let temp = response.data.main.temp;

            let formula = ((temp - 273.15) * 9) / 5 + 32;

            this.temp = formula.toFixed(0);

            this.city = response.data.name;

            this.desc = response.data.weather[0].description;

            this.country = response.data.sys.country;
          })
          .catch((error) => console.log(error));

        this.citySearch = "";
      }
    },
  },
};
</script>

<style lang="scss">
ul {
  list-style: none;
}

*,
p,
div * {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto";
  color: white;
  text-align: center;
}

.test {
  background: linear-gradient(
    90deg,
    rgba(132, 130, 177, 1) 0%,
    rgba(218, 238, 255, 1) 100%,
    rgba(155, 155, 203, 0.7147233893557423) 100%
  );
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-home {
  background-color: #eef2f7;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  transition: 0.2s all;
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
  line-height: 0.2em;
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

.cta {
  background: rgb(94, 92, 138);
  padding: 25px;
  border-radius: 0 0 10px 10px;
}

.cta:active {
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}

.cta:hover {
  cursor: pointer;
  background: rgb(80, 78, 117);
  padding: 25px;
  border-radius: 0 0 10px 10px;
}

.search {
  padding: 20px 25px;
}

.search-input {
  display: block;
  padding: 5px 15px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: 0.5px solid rgba(80, 78, 117, 0.308);
}

.search-result-item {
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
