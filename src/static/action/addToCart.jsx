
//for add item to cart
export const addCart = (item) => {
    return{
        type: "ADDITEM",
        payload : item
    }
}

// for delete item from cart

export const delCart = (item) => {
    return{
        type : "DELITEM" , 
        payload : item
    }
}