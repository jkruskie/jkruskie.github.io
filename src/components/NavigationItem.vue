<template>
  <li class="navigation-item">
    <a :href="href" @click.prevent="onClick">
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class NaviagtionItem extends Vue {
  @Prop({ required: true }) readonly href!: string;

  private onClick({ currentTarget }: MouseEvent) {
    if((currentTarget as HTMLAnchorElement).href.includes("#")) {
      const id = (currentTarget as HTMLAnchorElement).href.split("#")[1];
      const elem = document.getElementById(id);
  
      if (elem !== null) elem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open((currentTarget as HTMLAnchorElement).href)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-item {
  &:not(:last-child) {
    @apply pr-6;
  }

  a {
    @apply text-sm;
    @apply text-white;

    @apply opacity-75;
    @apply transition-opacity;
    @apply duration-200;

    &:hover {
      @apply opacity-100;
    }
  }
}
</style>
