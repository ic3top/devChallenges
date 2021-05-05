<template>
  <h3 class="p-text-light">Search for the location here</h3>
  <div class="p-mt-5 p-d-flex p-jc-between" @keyup.esc="$emit('closeSidebar')">
    <AutoComplete v-model="query"
                  :suggestions="citySuggestions"
                  field="title"
                  placeholder="Your city..."
                  @complete="filterCities($event)"
                  @item-select="itemSelected($event)"
                  @keyup.enter="validateCities"
    >
      <template #item="itemProps">
        <div class="p-d-flex p-jc-between p-align-center">
          <div class="p-p-2">{{ itemProps.item?.title }}</div>
          <span class="pi pi-angle-double-right"></span>
        </div>
      </template>
    </AutoComplete>
    <Button :loading="isLoading"
            class="p-button-outlined p-d-none p-d-lg-block"
            label="Search"
            type="button"
            @click="validateCities"
    />
    <Button icon="pi pi-search" class="p-button-rounded p-d-lg-none" @click="validateCities" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AutoComplete from 'primevue/autocomplete';
import Button from 'primevue/button';

export default {
  name: 'SidebarContent',
  emits: ['closeSidebar'],
  components: {
    AutoComplete,
    Button,
  },
  data() {
    return {
      query: '',
      citySuggestions: [],
    };
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    ...mapActions(['setDataPerQuery']),
    async filterCities(event) {
      const res = await fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${event.query}`);
      this.citySuggestions = await res.json();
    },
    async validateCities() {
      const res = await fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.query}`);
      const data = await res.json();
      if (data.length > 1 || data[0]?.title !== this.query) {
        return;
      }
      this.setDataPerQuery(data[0]);
      this.$emit('closeSidebar');
    },
    itemSelected(event) {
      this.setDataPerQuery(event.value);
      this.$emit('closeSidebar');
    },
  },
};
</script>

<style>
.p-autocomplete-panel::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
}

.p-autocomplete-panel::-webkit-scrollbar {
  width: 5px;
}
</style>
