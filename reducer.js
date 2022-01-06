import storage from "./util/storage.js";

const init = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editIndex: null,
};

// gộp tất cả các action
const actions = {
  // action thêm mới vào list, nhận state ban đầu và title thêm mới
  add({ todos }, title) {
    if (title) {
      todos.push({ title, completed: false });
      storage.set(todos);
    }
  },
  toggle({ todos }, index) {
    const todo = todos[index];
    todo.completed = !todo.completed;
    storage.set(todos);
  },
  toggleAll({ todos }, checked) {
    todos.map((todo) => {
      return (todo.completed = true);
    });
    storage.set(todos);
  },
  destroy({ todos }, index) {
    todos.splice(index, 1);
    storage.set(todos);
  },
  switchFilter(state, filter) {
    state.filter = filter;
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
    storage.set(state.todos);
  },
  startEdit(state, index) {
    state.editIndex = index;
  },
};

export default function reducer(state = init, action, args) {
  // Nếu tồn tại action với key thì sẽ chạy hàm với key action cùng tham số
  actions[action] && actions[action](state, ...args);
  return state;
}
