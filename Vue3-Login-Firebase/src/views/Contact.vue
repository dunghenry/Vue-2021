<template>
  <div class="contact" id="contact">
    <h2 class="title">Contact</h2>
    <br />
    <p>
      We offer full-service catering for any event, large or small. We
      understand your needs and we will cater the food to satisfy the biggerst
      criteria of them all, both look and taste. Do not hesitate to contact us.
    </p>
    <p class="text-blue">
      <b> Catering Service, 42nd Living St, 43043 New York, NY</b>
    </p>
    <p>
      You can also contact us by phone 00553123-2323 or email
      catering@catering.com, or you can send us a message here:
    </p>
    <form>
      <p>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          required
          style="width: 100%"
        />
      </p>
      <p>
        <input
          type="number"
          placeholder="How many people"
          name="People"
          required
          style="width: 100%"
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Message \ Special requirements"
          name="Message"
          required
          style="width: 100%"
        />
      </p>
      <p>
        <input
          type="datetime-local"
          placeholder="Date and time"
          required
          value="2020-11-16T20:00"
          name="Date"
          style="width: 98%"
        />
      </p>
      <p>
        <button type="submit">SEND MESSAGE</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact {
  width: 100%;
  padding: 64px 16px;
  h2.title {
    font-size: 2.5rem;
    letter-spacing: 4px;
    font-weight: 300;
    margin: 10px 0px;
  }
  p {
    font-size: 0.95rem;
    margin: 15px 0px;
    line-height: 24px;
  }
  p.text-blue {
    margin: 18px 0px;
    b {
      color: #607d8b;
    }
  }
  form {
    width: 100%;
    p {
      border-bottom: 1px solid rgba(128, 128, 128, 0.224);
      input {
        padding: 20px 0px;
        border: none !important;
        outline: none !important;
      }
      button {
        cursor: pointer;
        padding: 10px 10px;
        border: none;
        &:hover {
          background: rgba(128, 128, 128, 0.428);
        }
      }
    }
    p:last-child {
      margin-top: 20px;
      border: none;
    }
  }
}
</style>
