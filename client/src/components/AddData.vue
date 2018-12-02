<template>
  <div>
    <H1>Add Data</H1>
    <div id="form-container">
      <div class="form">
        <input type="text" name="title" placeholder="Name..."
          v-model="name" v-bind:disabled="inProgress">
        <textarea name="text" cols="100" rows="30" placeholder="Type text here..."
          v-model="text" v-bind:disabled="inProgress"></textarea>
        <button type="submit" v-bind:disabled="!validation"
          v-on:click="submit">Add</button>
        <transition name="fade">
          <span class="message success" v-if="success">Data has been added successfully.</span>
          <span class="message error" v-if="!success && result">Error occured: {{result}}.</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddData',
  data() {
    return {
      name: '',
      text: '',
      inProgress: false,
      success: null,
      result: null,
    };
  },
  computed: {
    validation() {
      return this.name.trim().length > 0 && this.text.trim().length > 0;
    },
  },
  methods: {
    async submit() {
      if (this.validation) {
        this.inProgress = true;
        fetch('http://localhost:8081/addData', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            text: this.text,
          }),
        }).then((res) => {
          if (res.ok) {
            this.success = true;
            this.name = '';
            this.text = '';

            setTimeout(() => {
              this.success = null;
              this.result = null;
            }, 3000);
          } else {
            this.success = false;
          }
          res.json().then((resp) => { this.result = resp.message; });
        }).catch((err) => {
          if (typeof err.text === 'function') {
            err.text().then((errorMessage) => {
              this.result = errorMessage;
            });
          } else {
            this.result = err;
          }
          this.success = false;
        }).finally(() => {
          this.inProgress = false;
        });
      }
    },
  },
};
</script>

<style scoped>
#form-container {
  width: 100%;
  overflow-x: auto;
}
.form {
  display: block;
  width: 70%;
  padding-bottom: 100px;
  margin: 0 auto;
}
.form input, textarea, button {
  box-sizing: border-box;
  display:block;
  padding:5px;
  margin:5px 0px;
  width:100%;
}
.form button {
  float: right;
  width: 100px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.message {
  font-size: 14px;
  max-width: 70%;
}
.message.success {
  color: lightseagreen;
}
.message.error {
  color: lightcoral;
}
</style>
