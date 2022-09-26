<script setup lang="ts">
import Avatar from '@/Avatar';
import Factory from '@/Factory';
import FactoryUrl from '@/FactoryUrl';
import type { IAvatarProps } from '@/Types';

const params: IAvatarProps[] = [];
for (let i = 0; i < 3; i++) {
  params.push(Factory());
}
</script>

<template>
  <div>
    <Avatar
      v-for="(e, i) in params"
      :key="i"
      v-bind="e"
      :style="{
        width: 200,
      }"
    />
  </div>

  <div>
    <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
    <a
      v-for="(e, i) in params"
      :key="i"
      :href="FactoryUrl(e)"
      target="_blank"
      rel="noopener"
    >
      <img
        :src="FactoryUrl(e)"
        alt=""
      >
    </a>
  </div>
</template>
