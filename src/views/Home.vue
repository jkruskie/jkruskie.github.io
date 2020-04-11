<template>
  <div class="home">
    <Overscroll message="I love cats" />
    <Hero
      :background="thumbOverview"
      :scroll="scrollOffset"
      :inverted="darkmodeModule.isEnabled"
    >
      <template #navigation>
        <Navigation>
          <NavigationItem href="#about">ABOUT ME</NavigationItem>
          <NavigationItem href="#projects">PROJECTS</NavigationItem>
        </Navigation>
      </template>
      <template #elevator>
        <Elevator />
      </template>
    </Hero>
    <Page anchor="about" :inverted="darkmodeModule.isEnabled">
      <TwoColumn>
        <template #left>
          <About>
            <template #about>
              <strong>I'm a computer science student</strong> at
              Saginaw Valley State University and work for NetSource One in 
              Saginaw, MI. During my spare time I
              like to create awesome apps and take photos, of which you can find a selection
              below, other stuff can be found on my GitHub.
            </template>
            <template #technologies>
              <Devicon icon="vuejs-plain" />
              <Devicon icon="laravel-plain" />
              <Devicon icon="sass-original" />
              <Devicon icon="typescript-original" />
              <Devicon icon="javascript-plain" />
              <Devicon icon="csharp-line" />
              <Devicon icon="php-plain" />
            </template>
          </About>
        </template>
        <template #right>
          <Contact
            email="justin@jkruskie.com"
            phone="(989) 392-0446"
            discord="ImJK#8937"
            discordserver="https://discord.gg/vNNu9km"
          />
        </template>
      </TwoColumn>
    </Page>
    <Page :background="thumbPlank" :inverted="darkmodeModule.isEnabled" />
    <Page anchor="projects" :inverted="darkmodeModule.isEnabled">
      <Projects>
        <Project
          :thumbnail="projectVoicED"
          title="VoicED AAC"
          description="Assisted speech application for nonverbal individuals."
          href="https://github.com/jkruskie/VoicED-AAC-Web"
        >
          <ProjectTag language="PHP" icon="php-plain" />
          <!-- <ProjectTag language="GitHub" icon="github-plain" /> -->
        </Project>
      </Projects>
    </Page>
    <Footer :inverted="darkmodeModule.isEnabled" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Overscroll from "@/components/Overscroll.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Devicon from "@/components/Devicon.vue";
import Elevator from "@/components/Elevator.vue";
import Hero from "@/components/Hero.vue";
import Page from "@/components/Page.vue";
import Projects from "@/components/Projects.vue";
import Project from "@/components/Project.vue";
import ProjectTag from "@/components/ProjectTag.vue";
import TwoColumn from "@/components/TwoColumn.vue";
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";
import NavigationItem from "@/components/NavigationItem.vue";

import thumbOverview from "@/assets/thumb-razer.jpg";
import thumbPlank from "@/assets/thumb-plank.jpg";

import projectVoicED from "@/assets/project-voiced.jpg";
import projectDotfiles from "@/assets/project-dotfiles.jpg";
import projectBaresharp from "@/assets/project-baresharp.jpg";
import Darkmode from "../store/darkmode";
import { getModule } from "vuex-module-decorators";

@Component({
  components: {
    Hero,
    Elevator,
    About,
    Contact,
    Devicon,
    Page,
    TwoColumn,
    Projects,
    Project,
    ProjectTag,
    Footer,
    Overscroll,
    Navigation,
    NavigationItem
  }
})
export default class Home extends Vue {
  private readonly thumbOverview: string = thumbOverview;
  private readonly thumbPlank: string = thumbPlank;

  private readonly projectVoicED: string = projectVoicED;
  private readonly projectDotfiles: string = projectDotfiles;
  private readonly projectBaresharp: string = projectBaresharp;

  private darkmodeModule?: Darkmode;

  private scrollTop = 0;

  private get scrollOffset() {
    return this.scrollTop * 0.2;
  }

  public created() {
    this.darkmodeModule = getModule(Darkmode, this.$store);
  }

  public mounted() {
    window.addEventListener("scroll", this.onScroll, { passive: true });
  }

  public beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }

  private onScroll() {
    const element = document.documentElement;
    this.scrollTop =
      (window.pageYOffset || element.scrollTop) - (element.clientTop || 0);
  }
}
</script>
