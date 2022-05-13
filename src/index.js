import { renderProductos } from './components/render.js';
import { getProducts } from './data/getData.js';

getProducts().then((data) => {
  renderProductos(data);
});
