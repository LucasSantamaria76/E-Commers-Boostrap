const $Template = document.querySelector('#template-product').content;
const fragment = document.createDocumentFragment();
const $productList = document.querySelector('#product-list');

export const renderProductos = (productos) => {
  productos.forEach((producto) => {
    $Template.querySelector('img').src = producto.imagen;
    $Template.querySelector('img').alt = producto.nombre;
    $Template.querySelector('h5').textContent = producto.nombre;
    $Template.querySelector('#precio').textContent = producto.precio;
    $Template.querySelector('#stock').textContent = producto.stock;
    $Template.querySelector('.btn').setAttribute('data-id', producto.id);
    const $cloneProduct = $Template.cloneNode(true);
    fragment.appendChild($cloneProduct);
  });
  $productList.appendChild(fragment);
};
