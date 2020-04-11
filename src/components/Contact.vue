<template>
  <div class="contact">
    <h2>Contact</h2>
    <p>
      <span v-if="email !== undefined">
        Email: <a :href="`mailto:${email}`">{{ email }}</a>
      </span>
      <span v-if="phone !== undefined">
        Phone: <a :href="`tel:${phone.replace(/\s/g, '')}`">‪{{ phone }}‬</a>
      </span>
      <span v-if="discord !== undefined">
        Discord: <a>‪{{ discord }}‬</a>
      </span>
      <!-- <span v-if="discordserver !== undefined">
        Discord Server: <a>{{ discordserver }}‬</a>
      </span> -->
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  @Prop() readonly email?: string;
  @Prop() readonly phone?: string;
  @Prop() readonly discord?: string;
  @Prop() readonly discordserver?: string;
}
</script>

<style lang="scss" scoped>
.contact {
  @screen md {
    padding-top: 3.8rem;

    @apply float-right;
  }

  span,
  strong {
    @apply p-0;

    @apply block;
  }

  h2 {
    @screen md {
      @apply hidden;
    }
  }
}
</style>
