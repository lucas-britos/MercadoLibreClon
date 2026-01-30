import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { app } from "../firebase/config";

const migrationProducts = [
    {
        id: 101,
        nombre: "Columna Ducha Exterior Flor Cuadrada",
        categoria: "Hogar, Muebles y Jardín",
        descripcion: "Columna Ducha Exterior Flor Cuadrada Acero Inoxidable",
        img: "/assets/shower.png",
        precio: 87974,
        stock: 15,
        descuento: 12,
        beneficios: { EnvioGratis: "Envío gratis" },
        title: "Visto recientemente" // Keep track of which section it belongs to
    },
    {
        id: 102,
        nombre: "Canilla Griferia Mezcladora Ducha Camuflada",
        categoria: "Hogar, Muebles y Jardín",
        descripcion: "Canilla Griferia Mezcladora Ducha Camuflada Excelente Calidad",
        img: "/assets/faucet.png",
        precio: 27949,
        stock: 20,
        descuento: 35,
        beneficios: {},
        title: "Porque te interesa"
    },
    {
        id: 103,
        nombre: "Sobretodo Paño Simón De La Costa Abrigo",
        categoria: "Ropa y accesorios",
        descripcion: "Sobretodo Paño Simón De La Costa Abrigo Elegante",
        img: "/assets/coat.png",
        precio: 113645,
        stock: 8,
        descuento: 30,
        beneficios: { EnvioGratis: "Envío gratis" },
        title: "Llevate tu favorito"
    },
    {
        id: 104,
        nombre: "Toyota Corolla Xei",
        categoria: "Autos, motos y otros",
        descripcion: "Toyota Corolla Xei 2023 | 31.000 km Impecable",
        img: "/assets/toyota.png",
        precio: 16000000,
        stock: 1,
        descuento: 0,
        beneficios: {},
        title: "Tu auto te espera",
        subtitle: "2023 | 31.000 km"
    }
];

export const migrateProducts = async () => {
    const db = getFirestore(app);
    const dataCollection = collection(db, "datos");

    for (const product of migrationProducts) {
        const q = query(dataCollection, where("id", "==", product.id));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log(`Migrando producto: ${product.nombre}`);
            await addDoc(dataCollection, product);
        } else {
            console.log(`Producto ${product.id} ya existe.`);
        }
    }
    return "Migración completada";
};
