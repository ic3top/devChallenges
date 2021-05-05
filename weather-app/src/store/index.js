import { createStore } from 'vuex';

export default createStore({
  state: {
    weatherData: {},
    weatherImages: {},
    loading: false,
    locationPermission: false,
    currentLocation: null,
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
      const [firstDayObj] = weatherData.consolidated_weather;
      const firstDay = {
        image: weatherImages[firstDayObj.weather_state_abbr],
        location: weatherData.title,
        time: weatherData.time,
        weatherName: firstDayObj.weather_state_name,
        temp: firstDayObj.the_temp,
        humidity: firstDayObj.humidity,
        wind: {
          direction: firstDayObj.wind_direction,
          directionCompass: firstDayObj.wind_direction_compass,
          speed: firstDayObj.wind_speed,
        },
        visibility: firstDayObj.visibility,
        airPressure: firstDayObj.air_pressure,
      };
      return firstDay;
    },
    getNextDays({ weatherData, weatherImages }) {
      if (!weatherData.consolidated_weather) return {};
      const nextDays = [];
      weatherData.consolidated_weather.forEach((day) => {
        const image = weatherImages[day.weather_state_abbr];
        nextDays.push({
          weather: {
            maxTemp: day.max_temp,
            minTemp: day.min_temp,
            date: day.applicable_date,
            id: day.id,
          },
          image,
        });
      });
      nextDays.shift();
      return nextDays;
    },
    isLoading({ loading }) {
      return loading;
    },
    getLocationPermission({ locationPermission }) {
      return locationPermission;
    },
    getCurrentLocation({ currentLocation }) {
      return currentLocation;
    },
  },
  mutations: {
    setWeatherData(state, weatherData) {
      state.weatherData = weatherData;
    },
    addWeatherImage(state, { abbr, image }) {
      state.weatherImages[abbr] = image;
    },
    setLoadingState(state, bool) {
      state.loading = bool;
    },
    setLocationPermission(state, bool) {
      state.locationPermission = bool;
    },
    setCurrentLocation(state, location) {
      state.currentLocation = location;
    },
  },
  actions: {
    // 924938 - Kiev
    async fetchPerWoeid({ commit, dispatch }, id = (44418)) {
      const res = await fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/${id}/`);
      const data = await res.json();
      commit('setWeatherData', data);
      commit('setCurrentLocation', data.title);
      data.consolidated_weather.forEach((day) => {
        dispatch('fetchImage', day.weather_state_abbr);
      });
      commit('setLoadingState', false);
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
      commit('setLoadingState', true);
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => dispatch('fetchPerCoords', coords),
        () => dispatch('fetchPerWoeid'),
      );
    },

    handlePermission({ commit }) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        commit('setLocationPermission', result.state);
      });
    },

    async setDataPerQuery({ commit, dispatch }, { woeid }) {
      commit('setLoadingState', true);
      dispatch('fetchPerWoeid', woeid);
    },
  },
});
