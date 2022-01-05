import storage from "./util/storage.js";

const init = {
  todos: storage.get(),
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
};

export default function reducer(state = init, action, args) {
  // Nếu tồn tại action với key thì sẽ chạy hàm với key action cùng tham số
  actions[action] && actions[action](state, ...args);
  return state;
}
