// Es el archivo que simula una base de datos en memoria. Como el examen dice que no hay base de datos real, los productos se guardan en un array en memoria (RAM).

// Cuando arrancas el servidor, este array se carga con 3 productos de ejemplo
// Cuando creas un producto nuevo, se añade al array
// Cuando borras uno, se elimina del array
// Si reinicias el servidor, los datos se pierden porque están en memoria, no en disco

// mockProducts.ts
export const mockProducts = [
    {
        id: '1', // id unico del producto
        name: 'Ordenador', // nombre del producto
        price: 1000, // El precio del producto
        is_active: true, // estado del producto
        created_at: new Date(), // esta para la fecha de creacion 
        update_at: new Date(), // y este para la fecha de actualizacion
    },

    {
        id: '2',
        name: 'Smartphone',
        price: 800,
        stock: 20,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
    },
];
