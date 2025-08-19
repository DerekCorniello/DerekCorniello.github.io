<template>
  <BasePage>
    <div class="contact-page">
      <h1 class="title">Contact Me</h1>
      <p class="subtitle">
        I'd love to hear from you! Feel free to reach out using the form below or via my socials.
      </p>
      <div class="containers-holder" style="width: 70%">
        <Container>
          <template #title> Get In Touch </template>
          <div class="contact-details">
            <p>Email: <a href="mailto:corniedj@mail.uc.edu">corniedj@mail.uc.edu</a></p>
            <p>Phone: <a href="tel:+14408215281">440-821-5281</a></p>
            <p>
              LinkedIn:
              <a href="https://linkedin.com/in/derek-corniello" target="_blank"
                >linkedin.com/in/derek-corniello</a
              >
            </p>
          </div>
        </Container>
      </div>
      <a
        href="https://dot.cards/DerekCorniello"
        target="_blank"
        style="justify-content: center; align-items: center; display: flex; margin: 1%"
      >
        <img
          src="/qrcode.png"
          alt="My QR code to contact me!"
          style="width: 60%; height: auto; border-radius: 10%"
        />
      </a>
    </div>
  </BasePage>
</template>

<script>
import BasePage from '@/components/BasePage.vue'
import Container from '@/components/Container.vue'

export default {
  name: 'contact',
  components: {
    BasePage,
    Container,
  },
  mounted() {
    document.title = 'Contact Derek Corniello'
  },
}
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #00ffcc;
  margin: 0;
  text-align: center;
  padding-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.containers-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.contact-details p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  line-height: 1.5;
}

.contact-details a {
  color: #00ffcc;
  text-decoration: none;
}

@media (max-width: 768px) {
  .containers-holder {
    flex-direction: column;
    gap: 1.5rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
