<script lang="ts">
    import logo from "../lib/assets/logo.png"
    import ttv from "../lib/assets/ttv-lg.png"
    import Progress from "$lib/Progress.svelte";
</script>

<img src={ttv} width="70" height="70" alt="ttv-logo" style="position: absolute; margin: 16px">
<main>
    <img src={logo} width="190" height="190" alt="solarize-logo">
    <span class="title">Project Solarize</span>
    <Progress/>
    <span>One Step forward towards a greener earth 🌏</span>
    <span>Work in Progress 👷‍♂️👷‍♀️</span>
</main>