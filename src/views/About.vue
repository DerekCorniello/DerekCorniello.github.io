<template>
    <BasePage>
    <h1 class="title">About Me</h1>
        <div class="containers-holder">
            <Container>
                <template #title>
                    About Me Test Title
                </template>
                About me Test desc!
                <br>
                Mult lines!
            </Container>
        </div>
    </BasePage>
</template>

<script>
import BasePage from '@/components/BasePage.vue';
import Container from '@/components/Container.vue';

export default {
  name: 'about',
  components: {
      BasePage,
      Container
  },
};
</script>

<style scoped>
html, body {
  background-color: #000; 
}

.containers-holder {
    display: flex;
    justify-content: flex-start; /* Align items to the top */
    align-items: center;         /* Horizontally center the content */
    padding: 0;                  /* Remove any padding */
    margin: 0;                   /* Remove any margin */
    flex-direction: column;      /* Align items vertically in column direction */
    flex-grow: 1;                /* Ensures that content grows to fill remaining space */
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  text-align: center;
}
</style>
