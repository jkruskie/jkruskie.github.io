<template>
  <div :class="['project-tag', languageClass]">
    <Devicon :icon="icon" />
    <span>{{ language }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Devicon from "./Devicon.vue";

@Component({ components: { Devicon } })
export default class ProjectTag extends Vue {
  @Prop({ required: true }) readonly language!: string;
  @Prop({ required: true }) readonly icon!: string;

  get languageClass() {
    return this.language.toLowerCase().replace("#", "-sharp");
  }
}
</script>

<style lang="scss" scoped>
.project-tag {
  @apply px-2;
  @apply py-1;

  @apply rounded-md;
  @apply bg-black;
  @apply flex;
  @apply flex-row;
  @apply items-center;

  @apply text-base;
  @apply text-white;

  @screen md {
    @apply text-sm;
  }

  @screen lg {
    @apply text-base;
  }

  .devicon {
    @apply text-xs;

    @screen md {
      @apply text-sm;
    }

    @screen lg {
      @apply text-base;
    }
  }

  span {
    @apply pl-1;
  }

  &.php {
    @apply bg-blue-400;
  }

  &.shell {
    @apply bg-green-500;
  }

  &.c-sharp {
    @apply bg-purple-700;
  }
}
</style>
