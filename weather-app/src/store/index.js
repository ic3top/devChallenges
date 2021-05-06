import { createStore } from 'vuex';
import { fToC, cToF } from '../utils/degreesMeasure';

export default createStore({
  state: {
    weatherData: {},
    weatherImages: {},
    loading: false,
    locationPermission: false,
    currentDegrees: 'C',
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
    getCurrentDegrees({ currentDegrees }) {
      return currentDegrees;
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
    setCurrentDegrees(state, measure) {
      state.currentDegrees = measure;
    },
    setNewDegrees(state) {
      state.weatherData.consolidated_weather.map((day) => {
        if (state.currentDegrees === 'C') {
          // eslint-disable-next-line no-param-reassign
          day.the_temp = cToF(day.the_temp);
          // eslint-disable-next-line no-param-reassign
          day.max_temp = cToF(day.max_temp);
          // eslint-disable-next-line no-param-reassign
          day.min_temp = cToF(day.min_temp);
        } else {
          // eslint-disable-next-line no-param-reassign
          day.the_temp = fToC(day.the_temp);
          // eslint-disable-next-line no-param-reassign
          day.max_temp = fToC(day.max_temp);
          // eslint-disable-next-line no-param-reassign
          day.min_temp = fToC(day.min_temp);
        }
        return day;
      });
      state.currentDegrees = state.currentDegrees === 'F' ? 'C' : 'F';
    },
  },
  actions: {
    // 924938 - Kiev
    async fetchPerWoeid({ commit, dispatch }, id = (924938)) {
      const res = await fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/${id}/`);
      const data = await res.json();
      commit('setWeatherData', data);
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
      commit('setCurrentDegrees', 'C');
    },

    handlePermission({ commit }) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        commit('setLocationPermission', result.state);
      });
    },

    async setDataPerQuery({ commit, dispatch }, { woeid }) {
      commit('setLoadingState', true);
      dispatch('fetchPerWoeid', woeid);
      commit('setCurrentDegrees', 'C');
    },
  },
});
