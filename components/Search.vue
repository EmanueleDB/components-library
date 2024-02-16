<!--<template>-->
<!--  <div class="w-100">-->
<!--    <div class="input-element has-icon-right has-clear-button">-->
<!--      <input-->
<!--        :value="modelValue"-->
<!--        type="search"-->
<!--        :placeholder="placeholder"-->
<!--        :class="size"-->
<!--        @input="$emit('update:modelValue', $event.target.value)"-->
<!--      />-->

<!--      <div class="input-element__icon">-->
<!--        <FontAwesomeIcon :icon="['far', 'search']" class="fa-fw" />-->
<!--      </div>-->

<!--      <div class="icon clear-icon" @click="$emit('clear')">-->
<!--        <FontAwesomeIcon :icon="['far', 'times']" class="fa-fw" />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default defineNuxtComponent({-->
<!--  name: 'SearchElement',-->
<!--  emits: ['update:modelValue', 'clear'],-->
<!--  props: {-->
<!--    modelValue: {-->
<!--      type: String,-->
<!--      required: true,-->
<!--    },-->
<!--    placeholder: {-->
<!--      type: String,-->
<!--      default: 'Search...',-->
<!--    },-->
<!--    size: {-->
<!--      type: String,-->
<!--      default: 'small',-->
<!--    },-->
<!--  },-->
<!--})-->
<!--</script>-->
