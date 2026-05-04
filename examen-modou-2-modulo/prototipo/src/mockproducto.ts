// Es el archivo que usare para simular mi base de datos como el exmen pide

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
