<template>
  <div class="copy">
    <div class="hash">
      {{ renderCopiedOrHash }}
    </div>
    <div class="icons">
      <copy-button :value="hash" text="hash" v-on:copied="updateIsCopied" myClass="ipfs-copy-widget" />
      <links v-tooltip="$t('ipfsCopyWidget.tooltip1')" :to="ipfsUrl" :hideArrow="true">
        <img class="icon" src="@/assets/ipfs-white.svg" />
      </links>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
  hash: string
}

const props = defineProps<Props>()

const isCopied = ref(false)
const ipfsUrl = computed(() => `https://ipfs.io/ipfs/${props.hash}`)

const renderCopiedOrHash = computed(() => {
  return isCopied.value ? t('copied').toString() : props.hash
})

function updateIsCopied(_isCopied: boolean): void {
  isCopied.value = _isCopied
}
</script>

<style scoped lang="scss">
@import '../styles/vars';
@import '../styles/theme';

.copy {
  border: 1px solid var(--border-color);
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  border-radius: 32px;
  padding: 0.25rem 0.5rem;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  font-weight: 500;
  width: fit-content;
  @media (max-width: $breakpoint-m) {
    width: 100%;
  }
}

.hash {
  padding: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-width: 10%;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: $breakpoint-m) {
    margin-left: 0.5rem;
  }
}

.icons {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  @media (max-width: $breakpoint-m) {
    width: fit-content;
    margin-right: 1rem;
    gap: 0.5rem;
  }
}

.icon {
  @include icon(none, $icon-hover);
  filter: var(--img-filter, invert(1));
}
</style>
