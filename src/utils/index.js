import { KanbanPriorityFilter, KanbanTypeFilter } from "../constants/enums";

export const applyFilterTask = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {});

export const displayFilters = (list, priority, type) => {
  let filteredTasks = list;

  if (priority !== KanbanPriorityFilter.all.key) {
    filteredTasks = applyFilterTask(list, (task) => task.priority === priority);
  }

  if (type !== KanbanTypeFilter.all.key) {
    filteredTasks = applyFilterTask(filteredTasks, (task) => task.type === type);
  }
  return filteredTasks;
};

export const getUuid = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

export const objectClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
