<template>
  <div>
    <button @click="onToggleModal">Toggle modal</button>
    <Header />
    <teleport to="body">
      <Modal
        title="This is new title from app component"
        theme="example"
        v-if="isShowModal"
        @closeModal="onToggleModal"
      >
        <label>Username:</label>
        <input type="text" />
        <template v-slot:footer>
          <div>
            <button type="button" class="btn btn-primary mr-3">
              Save changes
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="onToggleModal"
            >
              Close
            </button>
          </div>
        </template>
      </Modal>
    </teleport>

    <Slider />
    <Jumbotron />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Modal from './components/Modal.vue'
import Slider from './components/Slider.vue'
import Jumbotron from './components/Jumbotron.vue'
export default {
  name: 'App',
  components: {
    Modal,
    Header,
    Slider,
    Jumbotron,
  },
  data() {
    return {
      isShowModal: false,
    }
  },
  methods: {
    onToggleModal() {
      this.isShowModal = !this.isShowModal
    },
  },
}
</script>

<style></style>
