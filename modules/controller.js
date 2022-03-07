// import
import data from "./data.js";

// controller
const index = () => {
    console.log(data);
}

const store = () => {
    console.log("Tambah data");
}

// export 
export {
    index,
    store
}