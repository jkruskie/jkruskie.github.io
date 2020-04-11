<template>
  <div class="elevator">
    <img
      class="elevator-image"
      src="https://en.gravatar.com/userimage/159876680/c612fdaaa46b783d6c881e545785efd5.jpeg?size=1024"
      alt="Gravatar"
    />
    <div class="elevator-description">
      <h1>Justin Kruskie</h1>
      <h2>
        Develoer
        <a
          href="https://nsoit.com/"
          target="_blank"
          rel="noopener noreferrer"
          >@ NetSource One</a
        >.
      </h2>
      <!-- <h2>
        Founder
        <a
          href="https://nsoit.com/"
          target="_blank"
          rel="noopener noreferrer"
          >@ J. Kruskie</a
        >.
      </h2> -->
    </div>
    <div class="elevator-links">
      <a
        href="https://github.com/jkruskie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="githubIcon" />
      </a>
      <a
        href="https://www.linkedin.com/in/justinkruskie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="linkedinIcon" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({ components: { FontAwesomeIcon } })
export default class Elevator extends Vue {
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
}
</script>

<style lang="scss" scoped>
.elevator {
  @apply flex;
  @apply flex-col;
  @apply items-center;

  @apply text-white;

  .elevator-image {
    @apply w-56;

    @apply rounded-full;

    @screen lg {
      @apply w-64;
    }

    @screen xl {
      @apply w-72;
    }
  }

  .elevator-description {
    @apply mt-6;
  }

  .elevator-links {
    @apply mt-4;

    @apply flex;
    @apply flex-row;
    @apply justify-center;

    a {
      @apply text-3xl;
    }

    > *:not(:last-child) {
      @apply mr-6;
    }
  }

  h1 {
    @apply font-pacifico;
    @apply text-4xl;
    @apply text-center;

    @apply transform;
    @apply -rotate-2;

    @screen lg {
      @apply text-5xl;
    }
  }

  h2 {
    @apply pt-1;

    @apply text-sm;
    @apply text-center;

    @screen lg {
      @apply pt-2;
      @apply text-base;
    }
  }

  a {
    @apply font-bold;
    @apply opacity-90;

    @apply transition-opacity;
    @apply duration-100;

    &:hover {
      @apply opacity-100;
    }
  }
}
</style>
