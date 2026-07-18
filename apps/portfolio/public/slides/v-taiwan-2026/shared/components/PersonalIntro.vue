<script setup lang="ts">
withDefaults(
  defineProps<{
    /** 第一行職稱 */
    role?: string;
  }>(),
  {
    role: 'Web Developer · Infra & DX',
  },
);
</script>

<template>
  <h1 font-serif italic>
    Michael Lo
    <sup opacity-80 font-hand text-4xl>ming</sup>
  </h1>

  <div class="opacity-80 mt5" flex="~ col gap-2">
    <div flex="~ gap-3 items-center">
      <carbon-code class="text-xl" />
      <span>{{ role }}</span>
    </div>
    <div flex="~ gap-3 items-center">
      <img src="/shared/images/cod4tw-avatar-transparent.png" class="h-5 w-5" />
      <span>Code for Taiwan Member</span>
    </div>
  </div>

  <div mt-4 text-sm op60 font-serif italic>"Coding is my way of making tomorrow a little lazier."</div>

  <div mt-10 w-min flex="~ gap-1" items-center justify-center>
    <div i-ri-user-3-line op50 ma text-xl />
    <div>
      <a href="https://www.michaello.me" target="_blank" class="border-none! font-300">michaello.me</a>
    </div>
    <div i-ri-github-line op50 ma text-xl ml4 />
    <div>
      <a href="https://github.com/Michael0520" target="_blank" class="border-none! font-300">Michael0520</a>
    </div>
  </div>

  <img src="/shared/images/avatar.jpg" rounded-full absolute top-38 right-15 w-40 />
</template>
