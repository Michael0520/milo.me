<script setup lang="ts">
import { DataSet, Timeline } from 'vis-timeline/standalone'
import { onMounted, ref } from 'vue'

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  const end = '2026-01-01'
  const groups = new DataSet([
    { id: 1, content: 'pnpm' },
    { id: 2, content: 'Nx' },
    { id: 3, content: 'Turborepo' },
    { id: 4, content: 'Lerna' },
  ])
  let id = 0
  const items = new DataSet([
    // pnpm
    {
      id: id++,
      content: 'pnpm',
      group: 1,
      start: '2017-01-01',
      end,
      type: 'range',
      className: 'text-center rounded-lg! bg-orange/20! text-orange-400! border-orange/50!',
    },

    // Nx
    {
      id: id++,
      content: 'Nx',
      group: 2,
      start: '2018-01-01',
      end,
      type: 'range',
      className: 'text-center rounded-lg! bg-blue/20! text-blue-400! border-blue/50!',
    },

    // Turborepo
    {
      id: id++,
      content: 'Turborepo',
      group: 3,
      start: '2021-12-01',
      end,
      type: 'range',
      className: 'text-center rounded-lg! bg-pink/20! text-pink-400! border-pink/50!',
    },

    // Lerna
    {
      id: id++,
      content: 'Lerna',
      group: 4,
      start: '2015-06-01',
      end: '2022-05-01',
      type: 'range',
      className: 'text-center rounded-l-lg! bg-gray/20! text-gray-400! border-gray/50! border-dashed!',
    },
    {
      id: id++,
      content: 'Nx powered',
      group: 4,
      start: '2022-05-01',
      end,
      type: 'range',
      className: 'text-center rounded-r-lg! bg-blue/20! text-blue-400! border-blue/50!',
    },
  ])

  // Create a Timeline
  const timeline = new Timeline(el.value, null, {
    stack: true,
    height: 350,
    width: 1900,
    horizontalScroll: false,
    verticalScroll: false,
    zoomable: false,
    moveable: false,
    showMajorLabels: false,
    showMinorLabels: true,
    timeAxis: {
      scale: 'year',
      step: 3,
    },
    margin: {
      item: {
        horizontal: 0,
      },
    },
  })
  timeline.setGroups(groups)
  timeline.setItems(items)

  timeline.redraw()
})
</script>

<template>
  <div mb-3 flex="~ col">
    <div scale-50 origin-left-top relative mb--42>
      <div ref="el" absolute h-350px w-1800px />
    </div>
    <div text-xs op50 mla mr--10 flex="~ inline gap-1">
      Source: <a href="https://monorepo.tools" target="_blank" rel="noopener noreferrer">monorepo.tools</a>
    </div>
  </div>
</template>

<style>
.vis-timeline {
  border: 0 !important;
}

.vis-labelset .vis-label,
.vis-time-axis .vis-text {
  color: inherit;
  opacity: 0.8;
}

.vis-grid,
.vis-label,
.vis-group,
.vis-panel {
  border-color: #333 !important;
}
</style>

