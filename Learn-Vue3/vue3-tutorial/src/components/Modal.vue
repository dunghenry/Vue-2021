<template>
  <div class="" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" @click="onCloseModal">&times;</span>
        </button>
      </div>
      <div class="modal-body" :class="{'bg-gray' : theme === 'contact'}">
        <slot />
      </div>
      <div class="modal-footer">
        <slot name="footer">

        </slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        theme:{
          type: String,
          default: "example",
          validator(value){
            return ["example", "sales"].includes(value);
          }
        }
    },
    name: 'Modal',
    data(){
        return{
            // title: "This is title"
        }
    },
    methods: {
      onCloseModal(){
        this.$emit("closeModal");
      }

    }
}
</script>

<style scope>
.bg-gray{
  background-color: gray;
}
</style>