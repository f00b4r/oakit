<template>
  <div class="table-responsive table-sm">
    <table class="table table-strip">
      <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, key) in headers"
          :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
	name: "HeaderTable",
	props: ["headers"]
};
</script>
