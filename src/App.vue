<script setup lang="ts">
import Avatar from '@/Avatar';
import Factory from '@/Factory';
</script>

<template>
  <Avatar
    v-bind="Factory()"
    :style="{
      width: 200,
    }"
  />

  <Avatar
    v-bind="Factory({ isCircle: true })"
    :style="{
      width: 200,
    }"
  />

  <Avatar
    v-bind="Factory({ isCircle: true })"
    :style="{
      width: 200,
    }"
  />

  <Avatar
    v-bind="Factory()"
    :style="{
      width: 200,
    }"
  />

  <Avatar
    v-bind="Factory()"
    :style="{
      width: 200,
    }"
  />

  <Avatar
    v-bind="Factory({
      clothes: 'GraphicShirt',
    })"
    :style="{
      width: 200,
    }"
  />
  <Avatar
    v-bind="Factory()"
    :style="{
      width: 200,
    }"
  />
  <Avatar
    v-bind="Factory()"
    :style="{
      width: 200,
    }"
  />
  <Avatar
    v-bind="Factory()"
    :style="{
      width: 200,
    }"
  />
</template>
