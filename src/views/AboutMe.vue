<template>
    <BasePage>
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
.containers-holder {
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center;     /* Centers vertically */
    height: 100vh;           /* Ensures it takes full viewport height */
    flex-direction: column;  /* Optional: Centers in column direction if you have more containers */
}
</style>
