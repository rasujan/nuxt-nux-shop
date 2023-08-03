<template>
  <div>
    <h1 @click="homeTrack">Home</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam amet
      eveniet quo eligendi eius assumenda sed harum doloribus fugiat! Ad sint
      harum nam porro dicta fuga veritatis aliquam aliquid sed.
    </p>
  </div>
</template>

<script setup lang="js">
import mixpanel from "mixpanel-browser";

mixpanel.init("13d149d2bcb9bb8d11500318e8e15850", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

mixpanel.identify(1);

mixpanel.set_config({ persistence: "localStorage" });

const homeTrack = () => {
  mixpanel.track("Home", {
    status: "ok",
  });
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  color: rgb(34, 207, 149);
}
</style>
