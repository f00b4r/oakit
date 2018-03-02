<template>
  <div class="mt-1">
    <div class="form-check mb-2 mr-sm-2">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineFormCheck"
        v-model="useBasicAuth"
        @click="onSwitchUse">
      <label
        class="form-check-label"
        for="inlineFormCheck">
        Use Basic Auth
      </label>
    </div>
    <div v-if="useBasicAuth">
      <label
        class="sr-only"
        for="user">User</label>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        id="user"
        v-model="user"
        placeholder="User"
        @input="onInputChange">
      <label
        class="sr-only"
        for="password">Password</label>
      <div class="input-group mb-2 mr-sm-2">
        <input
          :type="typePasswordInput"
          autocomplete="false"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Password"
          @input="onInputChange">
        <div
          class="input-group-append"
          @click="onSwitchType">
          <div class="input-group-text">
            <i
              :class="[typePasswordInput === 'text' ? 'oi oi-eye': 'oi oi-ban']"
              title="person"
              aria-hidden="true"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "BasicAuth",
	data() {
		return {
			typePasswordInput: "password",
			useBasicAuth: false,
			user: "",
			password: ""
		};
	},
	methods: {
		onSwitchType() {
			this.typePasswordInput = this.typePasswordInput === "text" ? "password" : "text";
		},
		onSwitchUse() {
			this.$emit("change", {
				use: !this.useBasicAuth,
				user: this.user,
				password: this.password
			});
		},
		onInputChange() {
			this.$emit("change", {
				use: this.useBasicAuth,
				user: this.user,
				password: this.password
			});
		}
	}
};
</script>
