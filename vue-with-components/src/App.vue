<template>
  <div class="container"></div>
  <h2 :style="{ textDecoration: 'underline', color: 'steelblue' }">Component Based</h2>
  <button @click="showModal = true">Open Modal</button>
  <teleport to="#modal-root">
    <ModalComponent v-show="showModal" @close="showModal = false">
      <div class="modal__content">
        Hello World!
      </div>
    </ModalComponent>
  </teleport>

  <Greet name="Arathi" />
  <Greet name="Akshay" />
  <Greet :name="name" />
  <h4>username - {{ username }}</h4>

  <button @click="popupShow = true">Open Popup</button>
  <Popup v-show="popupShow" @close="onClosePopup" />

  <ComponentC />
  <InputComponent v-model="name" />
  <hr />
  <h2 :style="{ color: 'blue' }">Slots</h2>

  <CardComponent></CardComponent>
  <cardComponent>
    <h2>Card one</h2>
  </cardComponent>
  <CardComponent>
    <img src="https://th.bing.com/th/id/OIP.TV5B1xBNmsCFzSUT40sAbgHaNK?rs=1&pid=ImgDetMain">
  </CardComponent>
  <CardComponent>
    <template v-slot:header>
      <h3>Header</h3>

    </template>
    <template v-slot:default>
      <img src="https://th.bing.com/th/id/OIP.TV5B1xBNmsCFzSUT40sAbgHaNK?rs=1&pid=ImgDetMain">
    </template>
    <template v-slot:footer>
      <button>View Details</button>

    </template>

  </CardComponent>
  <hr />
  <h2 :style="{ color: 'blue' }">Slot Props</h2>
  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </NameList>
  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }}

    </template>
  </NameList>
  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.lastName }} {{ slotProps.firstName }}

    </template>
  </NameList>
  <hr />
  <h4>Component Styles</h4>
  <ChildStyles />
  <hr />

  <h2 :style="{ color: 'blue' }">Dynamic Components</h2>
  <div>
    <button @click="activeTab = 'TabA'" :class="{ 'active': activeTab === 'TabA' }">TabA</button>
    <button @click="activeTab = 'TabB'" :class="{ 'active': activeTab === 'TabB' }">TabB</button>
    <button @click="activeTab = 'TabC'" :class="{ 'active': activeTab === 'TabC' }">TabC</button>
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>
  </div>
  <!-- <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'" />
  <TabC v-if="activeTab === 'TabC'" /> -->
  <Teleport to="#portal-root">
    <PortalComponent />
  </Teleport>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
import Greet from './components/Greet.vue'
import ComponentC from './components/ComponentC.vue'
import Popup from './components/Popup.vue'
import InputComponent from './components/Input.vue'
import NameList from './components/NameList.vue'
import ChildStyles from './components/ChildStyles.vue'
import TabA from './components/TabA.vue'
import TabB from './components/TabB.vue'
import TabC from './components/TabC.vue'
import PortalComponent from './components/Portal.vue'
import ModalComponent from './components/ModalComponent.vue'
export default {
  name: 'App',
  components: {
    CardComponent,
    Greet,
    ComponentC,
    Popup,
    InputComponent,
    NameList,
    ChildStyles,
    TabA,
    TabB,
    TabC,
    PortalComponent,
    ModalComponent
  },
  data() {
    return {
      name: '',
      Skill: 'React',
      username: "Arathi",
      popupShow: false,
      inputText: 'input',
      activeTab: 'TabA',
      showModal: false
    }

  },
  provide() {
    return {
      username: this.username

    }
  },
  methods: {
    onClosePopup(msg) {
      this.popupShow = false
      console.log("msg", msg);
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
} */

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button.active {
  background-color: #3498db;
  color: #fff;
}

/* Add styles for the content of each tab as needed */
.TabA,
.TabB,
.TabC {
  /* Your styles for each tab content */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
}

/* h4{
  color: orange;
} */
</style>
