import html from "../core.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import { connect } from "../store.js";

function App({ todos }) {
  return html`
    <section class="todoapp">
      ${Header()} ${todos.length > 0 ? TodoList() : null}
      ${todos.length > 0 ? Footer() : null}
    </section>
  `;
}

export default connect()(App);
