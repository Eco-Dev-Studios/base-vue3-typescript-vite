<script lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
};
</script>

<template>
  <div>
    <div class="py-10">
      <h1 class="font-bold text-left mb-2 w-full text-6xl text-gray-800">
        Headless UI
      </h1>
      <p class="font-medium mb-1 text-gray-800 text-opacity-70">
        Completely unstyled, fully accessible UI components, designed to
        integrate beautifully with Tailwind CSS.
      </p>
      <a class="text-sm text-blue-700" href="https://vueuse.org/"
        >https://headlessui.dev/</a
      >
    </div>
    <TabGroup>
      <TabList>
        <Tab v-slot="{ selected }" as="template">
          <button
            :class="[
              selected ? 'bg-blue-500 text-white' : 'bg-white text-black',
            ]"
          >
            Tab 1
          </button>
        </Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
