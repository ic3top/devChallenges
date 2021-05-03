import { createStore } from 'vuex';

const geo = navigator.geolocation;

export default createStore({
  state: {
    weatherData: {},
    weatherImages: {},
    loading: false,
  },
  getters: {
    getWeatherData({ weatherData }) {
      return weatherData;
    },
    getWeatherImages({ weatherImages }) {
      return weatherImages;
    },
    getFirstDay({ weatherData, weatherImages }) {
      if (!weatherData.consolidated_weather) return {};
      const firstDay = {
        image: weatherImages[weatherData.consolidated_weather['0'].weather_state_abbr],
        location: weatherData.title,
        time: weatherData.time,
        weatherName: weatherData.consolidated_weather['0'].weather_state_name,
        temp: weatherData.consolidated_weather['0'].the_temp,
      };
      return firstDay;
    },
    isLoading({ loading }) {
      return loading;
    },
  },
  mutations: {
    setWeatherData(state, weatherData) {
      state.weatherData = weatherData;
    },
    addWeatherImage(state, { abbr, image }) {
      state.weatherImages[abbr] = image;
    },
    toggleLoadingState(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    async fetchPerWoeid({ commit, dispatch }, id = (924938)) {
      const res = await fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/${id}/`);
      const data = await res.json();
      commit('setWeatherData', data);
      data.consolidated_weather.forEach((day) => {
        dispatch('fetchImage', day.weather_state_abbr);
      });
      commit('toggleLoadingState');
      return data;
    },

    async fetchPerCoords({ commit, dispatch }, coords) {
      const res = await fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${coords.latitude},${coords.longitude}`);
      const data = await res.json();
      const weatherObj = await dispatch('fetchPerWoeid', (data[0].woeid));
      commit('setWeatherData', weatherObj);
    },

    async fetchImage({ commit }, abbr) {
      const res = await fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/static/img/weather/${abbr}.svg`);
      const data = await res.text();
      commit('addWeatherImage', { abbr, image: data });
    },

    detectLocation({ dispatch, commit }) {
      commit('toggleLoadingState');
      geo.getCurrentPosition(
        ({ coords }) => dispatch('fetchPerCoords', coords),
        () => dispatch('fetchPerWoeid'), {
          enableHighAccuracy: true,
        },
      );
    },
  },
});
