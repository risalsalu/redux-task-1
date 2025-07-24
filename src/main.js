import { counterReducer, createStore } from './counter.js';

const store = createStore(counterReducer);

const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

function render() {
  const state = store.getState();
  countEl.textContent = state.count;
}

store.subscribe(render);
render(); // Initial render

incrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

decrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});
