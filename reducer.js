const init = {
  todos: [
    {
      title: "Learn Javascript",
      completed: false,
    },
    {
      title: "Learn HTML, CSS",
      completed: true,
    },
  ],
};

export default function reducer(state = init, action, args) {
  switch (action) {
    case "add": {
      const [title] = args;
      console.log({
        ...state,
      });
      return { ...state, todos: [...state.todos, { title, completed: false }] };
    }
    default:
      return state;
  }
}
