<template>
  <div class="shadow-card bg-white flex flex-col rounded-sm">
    <div class="flex">
      <div class="w-20"></div>
      <week-days :with-date="true" class="flex-1" />
    </div>
    <div class="flex">
      <div class="w-20 flex flex-col">
        <div class="flex-1 text-center py-1 text-sm font-medium text-gray-600 border-r">All day</div>
      </div>
      <div class="w-full flex-1 grid grid-cols-7 grid-flow-row">
        <template v-for="n in 7">
          <div :key="n" class="h-20 border-t bg-gray-50" :class="{ 'border-r': n % 7 !== 0 }"></div>
        </template>
      </div>
    </div>
    <div class="flex">
      <time-entries :time="timeEntries" />
      <div class="w-full grid grid-cols-7 grid-flow-row flex-1">
        <template v-for="n in timeEntries.length * 7">
          <div
            :key="n"
            class="p-2 h-20 border-t flex justify-end items-start bg-gray-50"
            :class="[
              { 'border-r': n % 7 !== 0 },
              `row-start-${parseInt((n - 1) / 7) + 1}`,
              `col-start-${parseInt((n - 1) % 7) + 1} col-end-${parseInt((n - 1) % 7) + 1}`,
            ]"
          ></div>
        </template>
        <calendar-week-events />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarWeekEvents from "./events/CalendarWeekEvents.vue";
import TimeEntries from "./partials/TimeEntries.vue";
import WeekDays from "./partials/WeekDays.vue";
export default {
  name: "CalendarWeekView",
  components: { WeekDays, TimeEntries, CalendarWeekEvents },
  props: {
    timeEntries: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
