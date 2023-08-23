
<template>
  <Navbar>
  </Navbar>
  <div class="container mx-auto flex flex-wrap gap-2 p-4 dark:text-gray-800">
    <div class="flex flex-wrap gap-2 p-4 w-full">
      <input
        v-model="inputText"
        @keydown.enter="addChip"
        class="border p-2 w-full"
        placeholder="Press Enter to add chips"
      />
      <div class="flex flex-col">
        <div class="flex flex-row">
          <Chip v-for="(chip, index) in chips" :key="index" :text="chip" @remove="removeChip(index)" />
        </div>
        <div v-if="invalidChips.length > 0" class="text-red-600">
          Invalid chips: {{ invalidChips.join(', ') }}
        </div>
        <button @click="sendChipsToAPI" class="mt-2 bg-amber-600 text-white py-2 px-4 rounded-md w-64">
          Send Chips to API
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Chip from '~/components/Chip.vue';
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Chip,
    Navbar
},
  data() {
    return {
      inputText: '',
      chips: [],
      invalidChips: [],
    };
  },
  methods: {
    addChip() {
      if (this.inputText) {
        const fragments = this.inputText.split(/[, ]+/);
        fragments.forEach(fragment => {
          const validPattern = /^[A-Za-z]\d{6}$/; // Pattern: one letter followed by six digits
          if (validPattern.test(fragment)) {
            this.chips.push(fragment);
          } else {
            this.invalidChips.push(fragment);
            console.log(`Invalid chip: ${fragment}`);
          }
        });
        this.inputText = '';
      }
    },
    removeChip(index) {
      this.chips.splice(index, 1);
    },
    sendChipsToAPI() {
      const apiUrl = 'http://localhost:8000/api/create'; // Update with your API URL
      const jsonData = JSON.stringify(this.chips);

      axios
        .post(apiUrl, jsonData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log('API response:', response.data);
          // Handle success or display response to the user
        })
        .catch(error => {
          console.error('API error:', error);
          // Handle error or display error message to the user
        });
    },
  },
};
</script>
