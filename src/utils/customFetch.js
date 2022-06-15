import productos from "./productos";

export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productos);
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory= (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoryId === categoryId))
        }, 500)
    })
}