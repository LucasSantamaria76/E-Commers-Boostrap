export const getProducts = async () => {
  try {
    const dataJson = await fetch('../../src/data/Productos.json');
    if (dataJson.ok) {
      const data = await dataJson.json();
      return data;
    } else {
      throw new Error('No se pudo obtener los datos');
    }
  } catch (error) {
    console.log(error);
  }
};
