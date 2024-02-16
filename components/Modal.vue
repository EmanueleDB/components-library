<template>
  <div>
    <Teleport to="body">
      <div :class="['fixed bottom-0 left-0 right-0 top-0 z-10 w-full']">
        <div
          class="absolute left-0 right-0 top-0 z-20 h-svh w-full overflow-y-auto overflow-x-hidden"
          @click="closeModalOnOuterClick"
        >
          <div
            :class="[
              'relative mb-0 ml-auto mr-auto max-w-[768px] p-2 pt-24 transition-all duration-500',
              [
                active
                  ? 'opacity-1 visible mt-0 delay-200'
                  : 'invisible mt-[100svh] opacity-0',
              ],
            ]"
          >
            <Button
              class="absolute top-12 -right-10 z-30 mb-6 backdrop-blur-md"
              icon="clarity:times-circle-line"
              size="size-sm"
              @click="closeModal"
            />
            <div v-if="active" class="relative rounded bg-white p-4">
              <slot></slot>
            </div>
          </div>
        </div>

        <div
          :class="[
            'fixed bottom-0 left-0 right-0 top-0 z-10 h-svh bg-gray-500 bg-opacity-50 transition-all duration-500',
            [active ? 'opacity-1 visible' : 'invisible opacity-0 delay-200'],
          ]"
        ></div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue'

type Props = {
  preventOuterClick?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  preventOuterClick: false,
})

const emit = defineEmits(['close'])

const active = ref(false)
onMounted(() => {
  setTimeout(() => {
    active.value = true
  }, 100)
})

const closeModalOnOuterClick = () => {
  if (!props.preventOuterClick) closeModal()
}

const closeModal = () => {
  if (active.value) {
    active.value = false
    emit('close')
  }
}
</script>
