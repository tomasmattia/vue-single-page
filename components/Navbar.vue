
  <template>      
    <nav class="bg-blue-500 p-4">
      <div class="container mx-auto justify-between flex items-center">
        <div>
          <router-link to="/" class="text-white font-semibold mr-4">Home</router-link>
          <router-link to="/new-joiners" class="text-white font-semibold mr-4">New Joiners</router-link>
        </div>
        <button class="text-white"
          @click="
            toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')
          "
        >
        <font-awesome-icon :icon="$colorMode.preference === 'dark' ? 'moon' : 'sun'" />
      </button>
      </div>
    </nav>
  </template>
  
  <script setup>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
    library.add(faSun, faMoon);
 
    const colorMode = useColorMode();
    function toggleDarkMode(theme) {
      colorMode.preference = theme;
    }

  </script>

  <style>
    body {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.8);
    }
    .dark body {
      background-color: #091a28;
      color: #ebf4f1;
    }
    .sepia body {
      background-color: #f1e7d0;
    }
  </style>