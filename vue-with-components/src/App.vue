<template>
  <div class="container"></div>
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
  username - {{ username }}
  <button @click="popupShow = true">Open Popup</button>
  <Popup v-show="popupShow" @close="onClosePopup" />

  <ComponentC />
  <InputComponent v-model="name" />
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
  <h2>Slot Props</h2>
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
  <h4>Component Styles</h4>
  <ChildStyles />
  <h3>Dynamic Component</h3>
  <button @click="activeTab = 'TabA'">TabA</button>
  <button @click="activeTab = 'TabB'">TabB</button>
  <button @click="activeTab = 'TabC'">TabC</button>
  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>
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

/* h4{
  color: orange;
} */
</style>
