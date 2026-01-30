const productos = [
    {
        id: "1",
        nombre: "Chevrolet Tracker 1.2 Ltz Turbo At",
        categoria: "Autos, motos y otros",
        descripcion: "Chevrolet Tracker 1.2 Ltz Turbo At",
        descripcionExtensa: "ANTICIPO Y CUOTAS FIJAS EN PESOS COMPRA TU 0KM SOLO CON ENTREGA INMEDIATA!! VENDEMOS AUTOS FISICOS CON NRO DE MOTOR Y CHASIS!! NO ESPERES MAS POR TU 0KM!!!!!!!! VENTAS A TODO EL PAIS SOLO ENTREGA YA! EL MEJOR PRECIO Y LAS MEJORES CONDICIONES!!!! ENVIA TU MENSAJE O WHATSAPP Y TE RESPONDEMOS AL INSTANTE CONCESIONARIO OFICIAL CHEVROLET NRO1 ESTACIONAMIENTO PARA CLIENTES",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_886339-MLA54367586756_032023-F.webp",
        precio: 6599686,
        stock: 9,
        descuento: 0,
        beneficios: {
        },
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_715701-MLA54367559194_032023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_807749-MLA54367519370_032023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_727556-MLA54366166865_032023-F.webp"
        ],
        comments: [
            4, 36, 65, 105, 203, 48, 59, 87, 22
        ] 
    },
    {
        id: "2",
        nombre: "Notebook Asus X1502 Intel Core I5 1240p 16gb",
        categoria: "Computación",
        descripcion: "Notebook Asus X1502 Intel Core I5 1240p 16gb Ssd 480gb W11",
        descripcionExtensa:"Su procesador Intel Core i5 de 12 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.",
        img: "https://http2.mlstatic.com/D_NQ_NP_921383-MLA52106794407_102022-O.webp",
        precio: 258000,
        stock: 5,
        descuento: 5,
        beneficios: {
            EnvioGratis: "Envio Gratis",
            MismoPrecio : 3
        },
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_748509-MLA52161815268_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_789166-MLA52161815259_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_948609-MLA52161792388_102022-F.webp"
        ],
        comments: [
            205, 88, 95, 450, 300, 266, 155, 136, 111, 85, 83
        ]
    },
    {
        id: "3",
        nombre: "Aire acondicionado Philco  portátil  frío/calor 3010 frigorías",
        categoria: "Electrodomésticos y Aires AC.",
        descripcion: "Aire acondicionado Philco  portátil  frío/calor 3010 frigorías blanco 220V PHP32HA3AN. Aire acondicionado Philco portátil frío/calor 3010 frigorías blanco 220V PHP32HA3ANs",
        descripcionExtensa: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_648290-MLA44292499958_122020-F.webp",
        precio: 1500,
        stock: 15,
        descuento: 20,
        beneficios: {
            MismoPrecio : 6
        },
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_648290-MLA44292499958_122020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_924028-MLA44292499957_122020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_812431-MLA44292716761_122020-F.webp"
        ],
        comments: [
            14, 136, 165, 105, 103, 148, 159, 187, 122
        ]
    },
    {
        id: "4",
        nombre: "Zapatillas Topper Fast 0705 Dash 6 Csi",
        categoria: "Deportes y Fitness",
        descripcion: "Zapatillas Topper Fast 0705 Dash 6 Csi",
        descripcionExtensa: "",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_817822-MLA52623262417_112022-F.webp",
        precio: 8500,
        stock: 35,
        descuento: 25,
        beneficios: {
            full: "full"
        },
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_911138-MLA52623226714_112022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_944721-MLA52623184984_112022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_783731-MLA52623213821_112022-F.webp"
        ],
        comments: [
            24, 236, 265, 215, 203, 248, 259, 227, 222
        ]
    },
    {
        id: "5",
        nombre: "Dpto. En Venta. 3 Dorm. Cochera.",
        categoria: "Inmuebles",
        descripcion: "Dpto. En Venta. 3 Dorm. Cochera. Complejo Sureño. Barrio Jardín",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_684372-MLA54358785192_032023-F.webp",
        precio: 9000,
        stock: 25,
        descuento: 0,
        beneficios: {
        },
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_939457-MLA54357436827_032023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_781734-MLA54357436925_032023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_756144-MLA54357437165_032023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_803820-MLA54357437399_032023-F.webp"
        ],
        comments: [
            34, 336, 365, 305, 303, 348, 359, 387, 322
        ]
    },
    {
        id: "6",
        nombre: "Umbrella Intelligent Spf 99 Protector Solar",
        categoria: "Belleza y cuidado personal",
        descripcion: "Umbrella Intelligent Spf 99 Dna Defense Protector Solar",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_786655-MLA48078119149_102021-F.webp",
        precio: 9000,
        stock: 11,
        descuento: 15,
        beneficios: {
            full: "full"
        },
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_723009-MLA48078103370_102021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_786655-MLA48078119149_102021-F.webp"
        ],
        comments: [
            44, 436, 465, 405, 403, 448, 459, 487, 422
        ]
    },
    {
        id: "7",
        nombre: "Pileta Lona Caño Mor 400 Litros",
        categoria: "Juegos y juguetes",
        descripcion: "Pileta Lona Caño Infantil Niños Mor 400 Litros Verano Nueva",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_763670-MLA40174053998_122019-F.webp",
        precio: 15000,
        stock: 12,
        descuento: 10,
        beneficios: {
            MismoPrecio: 6
        },
        comments: [
            124, 156, 155, 135, 113, 118, 9, 7, 2
        ]
    },
    {
        id: "8",
        nombre: "Samsung Galaxy A04 128 GB 4 GB RAM",
        categoria: "Celulares y Teléfonos",
        descripcion: "Samsung Galaxy A04 128 GB negro 4 GB RAM",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_615787-MLA53225354281_012023-F.webp",
        precio: 12000,
        stock: 5,
        descuento: 15,
        beneficios: {
            EnvioGratis: "Envio Gratis",
            MismoPrecio: 6
        },
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_990969-MLA53225323327_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_757731-MLA53225354134_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_989252-MLA53225323332_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_900313-MLA53225323331_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_825557-MLA53225354135_012023-F.webp"
        ],
        comments: [
            3, 16, 25, 205, 103, 68, 29, 37, 12
        ]
    },
    {
        id: "9",
        nombre: "Smart TV Kodak WE-32MT005 LED HD 32",
        categoria: "Electrónica, audio y video",
        descripcion: "Smart TV Kodak WE-32MT005 LED HD 32",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_628005-MLA53127535208_012023-F.webp",
        precio: 8500,
        stock: 25,
        descuento: 20,
        beneficios: {
            full: "full"
        },
        comments: [
            11, 31, 25, 85, 23, 17, 19, 86, 122
        ]
    },
    {
        id: "10",
        nombre: "Zapatilla Nike",
        categoria: "Ropa y accesorios",
        descripcion: "Deportiva",
        img: "https://essential.vtexassets.com/arquivos/ids/576988-800-auto?v=637921838777700000&width=800&height=auto&aspect=true",
        precio: 35000,
        stock: 10,
        descuento: 10,
        beneficios: {
            EnvioGratis: "Envio Gratis"
        },
        comments: [
            54, 56, 55, 35, 103, 128, 239, 383, 352
        ]
    },
    {
        id: "11",
        nombre: "Mueble Mesa De Cocina Puerta Microondas",
        categoria: "Hogar, Muebles y Jardín",
        descripcion: "Mueble Mesa Auxiliar De Cocina Rack Puerta Microondas Oferta",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_858826-MLA50551043752_072022-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_916634-MLA50925885237_072022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_919670-MLA50925885233_072022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_771393-MLA50551043749_072022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_634033-MLA50925885235_072022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_888084-MLA50925885236_072022-F.webp",

        ],
        comments: [
            184, 166, 245, 65, 23, 4, 39, 167, 155
        ]
    },
    {
        id: "12",
        nombre: "Neumático Pirelli P400 EVO P 185/70R14",
        categoria: "Accesorios para Vehículos",
        descripcion: "Neumático Pirelli P400 EVO P 185/70R14 88 H",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_790043-MLA49851727153_052022-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_790043-MLA49851727153_052022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_735729-MLA49851655941_052022-F.webp"
        ],
        comments: [
            34, 6, 415, 215, 233, 218, 369, 197, 37
        ]
    },
    {
        id: "13",
        nombre: "Microsoft Xbox Series S 512GB",
        categoria: "Consolas y Videojuegos",
        descripcion: "Microsoft Xbox Series S 512GB Standard color blanco",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_627149-MLA44484230438_012021-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_951418-MLA44484230441_012021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_903686-MLA44484230439_012021-F.webp"
        ],
        comments: [
            334, 323, 221, 123, 3, 4, 5, 7, 45
        ]
    },
    {
        id: "14",
        nombre: "Vino Nicolas Catena Zapata Caja X 6un",
        categoria: "Alimentos y Bebidas",
        descripcion: "Vino Nicolas Catena Zapata Blend Caja X 6un - Enotek",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_958287-MLA49421133894_032022-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_958287-MLA49421133894_032022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_661146-MLA49389303436_032022-F.webp"
        ],
        comments: [
            43, 363, 153, 103, 33, 43, 53, 83, 23
        ]
    },
    {
        id: "15",
        nombre: "Entrada Usada Soda Stereo Me Verás Volver",
        categoria: "Entradas para eventos",
        descripcion: "Entrada Usada Soda Stereo Despedida 2007 Me Verás Volver",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_878926-MLA54290213582_032023-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: "https://http2.mlstatic.com/D_NQ_NP_2X_878926-MLA54290213582_032023-F.webp",
        comments: [
            44, 364, 64, 54, 234, 484, 54, 84, 24
        ]
    },
    {
        id: "16",
        nombre: "Cochecito Para Bebé Rainbow Dinamic",
        categoria: "Bebés",
        descripcion: "Cochecito Para Bebé Rainbow Dinamic Gris Chasis Negro",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_853435-MLA53441844441_012023-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_853435-MLA53441844441_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_962799-MLA53441761894_012023-F.webp"
        ],
        comments: [
            45, 365, 55, 155, 235, 45, 55, 85, 25
        ]
    },
    {
        id: "17",
        nombre: "Samsung Galaxy Watch5 Pro",
        categoria: "Joyas y relojes",
        descripcion: "Samsung Galaxy Watch5 Pro (Bluetooth) 1.4 caja 45mm de titanio black titanium, malla black titanium y bisel black titanium SM-R920",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_936069-MLA51439791973_092022-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_936069-MLA51439791973_092022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_861532-MLA51439857424_092022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_678910-MLA51439857425_092022-F.webp"
        ],
        comments: [
            46, 36, 66, 106, 206, 46, 56, 86, 26
        ]
    },
    {
        id: "18",
        nombre: "Principios De Economia Mankiw Cengage",
        categoria: "Libros, Revistas y Comics",
        descripcion: "Principios De Economia Mankiw Cengage Oficial E/ En El Día",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_981346-MLA45042639567_032021-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_981346-MLA45042639567_032021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_698656-MLA45043435982_032021-F.webp"
        ],
        comments: [
            47, 37, 67, 107, 207, 47, 57, 17, 27
        ]
    },
    {
        id: "19",
        nombre: "Bomba Rs942 1000 L/h 2mt Estanques Peceras",
        categoria: "Animales y Mascotas",
        descripcion: "Bomba Rs942 1000 L/h 2mt Hidroponia Estanques Peceras",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_863939-MLA26684514149_012018-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_863939-MLA26684514149_012018-F.webp",
        ],
        comments: [
            48, 38, 68, 108, 208, 188, 58, 88, 28
        ]
    },
    {
        id: "20",
        nombre: "Tini Cupido Cd Nuevo Cerrado Original 2023",
        categoria: "Música, Películas y Series",
        descripcion: "Tini Cupido Cd",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_688466-MLA54127000860_032023-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_688466-MLA54127000860_032023-F.webp",
        ],
        comments: [
            49, 39, 69, 109, 209, 49, 159, 89, 29
        ]
    },
    {
        id: "21",
        nombre: "Calculadora Cientifica Casio Fx-82ms",
        categoria: "Arte, Librería y Mercería",
        descripcion: "Calculadora Cientifica Casio Fx-82ms",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_846581-MLA49379017541_032022-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_846581-MLA49379017541_032022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_962282-MLA45320146478_032021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_672748-MLA44245889054_122020-F.webp"
        ],
        comments: [
            40, 360, 650, 100, 200, 480, 489, 70, 20
        ]
    },
    {
        id: "22",
        nombre: "Taladro percutor eléctrico de 13mm Philco TP711",
        categoria: "Herramientas",
        descripcion: "Taladro percutor eléctrico de 13mm Philco",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_635184-MLA50496909423_062022-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 20,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_635184-MLA50496909423_062022-F.webp"
        ],
        comments: [
            110, 50, 60, 80, 407, 60, 340, 410, 90, 40, 82
        ]
    },
    {
        id: "23",
        nombre: "Gadnic G200 Pro Estabilizador Camara Celular",
        categoria: "Cámaras y Accesorios",
        descripcion: "Gimbal Gadnic G200 Pro Estabilizador",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_605462-MLA54247704389_032023-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_605462-MLA54247704389_032023-F.webp",
        ],
        comments: [
            111, 151, 162, 181, 147, 166, 134, 141, 197, 154, 18
        ]
    },
    {
        id: "24",
        nombre: "Silla de escritorio Ejecutiva cuero sintético",
        categoria: "Industrias y Oficina",
        descripcion: "Silla de escritorio Baires4 Ejecutiva cuero sintético",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_774850-MLA43495940257_092020-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_774850-MLA43495940257_092020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_998448-MLA43495940327_092020-F.webp"
        ],
        comments: [
            24, 236, 265, 205, 202, 248, 259, 287, 222
        ]
    },
    {
        id: "25",
        nombre: "Guitarra Electrocriolla C/ Corte Acustica",
        categoria: "Instrumentos Musicales",
        descripcion: "Guitarra Electrocriolla C/ Corte Acustica Funda Pua Colores",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_975230-MLA42685559242_072020-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_975230-MLA42685559242_072020-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_715431-MLA48454085636_122021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_914399-MLA47340746917_092021-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_917102-MLA47340772825_092021-F.webp"
        ],
        comments: [
            34, 336, 365, 305, 303, 348, 359, 387, 322
        ]
    },
    {
        id: "26",
        nombre: "Tocadiscos Winco W408 marrón con Bluetooth",
        categoria: "Antiguedades y Colecciones",
        descripcion: "Tocadiscos Winco W408 marrón con Bluetooth",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_702402-MLA41241337976_032020-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_702402-MLA41241337976_032020-F.webp"
        ],
        comments: [
            44, 436, 465, 405, 403, 448, 459, 487, 422
        ]
    },
    {
        id: "27",
        nombre: "Tensiómetro digital Femmto YK-BPA2",
        categoria: "Salud y Equipamiento Médico",
        descripcion: "Tensiómetro digital de brazo automático Femmto YK-BPA2",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_696973-MLA53541826648_012023-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_696973-MLA53541826648_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_885298-MLA53541850343_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_927904-MLA53541880010_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_693249-MLA53541850354_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_828089-MLA53541850356_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_790302-MLA53541850357_012023-F.webp"
        ],
        comments: [
            45, 365, 155, 152, 205, 45, 55, 85, 25
        ]
    },
    {
        id: "28",
        nombre: "Construcción De Vagones Cabañas Estilo Antiguo",
        categoria: "Servicios",
        descripcion: "Construcción De Vagones Cabañas Estilo Antiguo De Madera",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_905231-MLA49396188275_032022-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_905231-MLA49396188275_032022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_648371-MLA49396449014_032022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_987642-MLA49396040959_032022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_697523-MLA49396449015_032022-F.webp"
        ],
        comments: [
            46, 366, 166, 165, 263, 468, 56, 68, 262
        ]
    },
    {
        id: "29",
        nombre: "Cargador Frontal Iron 930s (1m3) - 87hp (2023)",
        categoria: "Agro",
        descripcion: "Cargador Frontal Iron 930s (1m3) - 87hp (2023) Dolar Oficial",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_702179-MLA53250760099_012023-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_702179-MLA53250760099_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_600004-MLA53250782101_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_749689-MLA53250740179_012023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_841675-MLA53250775088_012023-F.webp"
        ],
        comments: [
            47, 376, 267, 157, 237, 487, 297, 77, 27
        ]
    },
    {
        id: "30",
        nombre: "Dc Disfraz Flash Clasico Talle 1",
        categoria: "Sourvenires, Cotillón y Fiestas",
        descripcion: "Dc Disfraz Flash Clasico",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_807910-MLA47683039085_092021-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_807910-MLA47683039085_092021-F.webp"
        ],
        comments: [
            48, 368, 58, 185, 283, 488, 98, 88, 28
        ]
    },
    {
        id: "31",
        nombre: "Puerta De Chapa Inyectada Doble 80x2",
        categoria: "Construcción",
        descripcion: "Puerta De Chapa Inyectada Doble 80x2",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_977650-MLA52042578298_102022-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 20,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_977650-MLA52042578298_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_706639-MLA52042543440_102022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_675015-MLA52042483626_102022-F.webp"
        ],
        comments: [
            49, 369, 95, 195, 293, 489, 59, 89, 29
        ]
    },
    {
        id: "32",
        nombre: "Trezor One Billetera Criptomonedas Btc-eth",
        categoria: "Otras Categorías",
        descripcion: "Trezor One Billetera Criptomonedas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_791576-MLA49020864900_022022-F.webp",
        precio: 35000,
        stock: 10,
        descuento: 0,
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_791576-MLA49020864900_022022-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_737527-MLA49020949168_022022-F.webp"
        ],
        comments: [
            40, 360, 310, 100, 200, 480, 90, 80, 220
        ]
    },
]
/* ---------------------TIENDAS --------------------------- */
const tiendas = [
    {   
        id: 1,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/frvega/background_home201712111118.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_929977-MLA25773062830_072017-AE.webp",
        nombre: "Frávega",
        min1: "https://http2.mlstatic.com/D_Q_NP_691397-MLA45654673710_042021-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_682199-MLA45807943865_052021-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_994013-MLA51717265270_092022-R.webp"
    },
    {   
        id: 2,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/simmons/background_home201803120215.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_747379-MLA25913869258_082017-AE.webp",
        nombre: "Simmons",
        min1: "https://http2.mlstatic.com/D_Q_NP_785300-MLA49590376007_042022-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_843658-MLA46348188427_062021-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_976266-MLA42565793395_072020-R.webp"
    },
    {   
        id: 3,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/creciendo/background_home201711290540.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_885288-MLA25803752942_072017-AE.webp",
        nombre: "Creciendo",
        min1: "https://http2.mlstatic.com/D_Q_NP_660927-MLA50698989480_072022-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_611508-MLA49022964215_022022-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_758123-MLA31078172844_062019-R.webp"
    },
    {   
        id: 4,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/peugeotrepuestosyservicios/background_home201907150216.jpg",
        imgLogo: "https://mla-s1-p.mlstatic.com/613869-MLA45017391866_022021-AE.webp",
        nombre: "Peugeot",
        min1: "https://http2.mlstatic.com/D_Q_NP_652283-MLA52766330189_122022-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_743630-MLA52829864222_122022-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_974839-MLA52829862126_122022-R.webp"
    },
    {   
        id: 5,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/hpstore/background_home201808311028.jpg",
        imgLogo: "https://mla-s2-p.mlstatic.com/698488-MLA45917797720_052021-AE.webp",
        nombre: "HP Tienda Oficial",
        min1: "https://http2.mlstatic.com/D_Q_NP_872997-MLA49152195145_022022-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_989732-MLA48483491009_122021-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_671943-MLA52266946617_112022-R.webp"
    },
    {   
        id: 6,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/lego/background_home201712060525.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_654961-MLA25716456961_062017-AE.webp",
        nombre: "Lego",
        min1: "https://http2.mlstatic.com/D_Q_NP_870140-MLA48063868304_102021-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_881584-MLA53701591503_022023-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_612250-MLA46923639911_072021-R.webp"
    },
    {   
        id: 7,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/adidasperformance/background_home201711211123.jpg",
        imgLogo: "https://mla-s1-p.mlstatic.com/687102-MLA45628970987_042021-AE.webp",
        nombre: "adidas Performance",
        min1: "https://http2.mlstatic.com/D_Q_NP_788426-MLA53713501488_022023-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_709821-MLA46479907047_062021-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_835347-MLA51638190696_092022-R.webp"
    },
    {   
        id: 8,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/philips/background_home201801260438.jpg",
        imgLogo: "https://mla-s1-p.mlstatic.com/902765-MLA43138801201_082020-AE.webp",
        nombre: "Philips",
        min1: "https://http2.mlstatic.com/D_Q_NP_625268-MLA31010238466_062019-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_930902-MLA43623760984_092020-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_910947-MLA31069583677_062019-R.webp"
    },
    {   
        id: 9,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/citronrepuestos/background_home202002130943.jpg",
        imgLogo: "https://http2.mlstatic.com/D_NQ_NP_921031-MLA52648640157_112022-AE.webp",
        nombre: "Citroën Repuestos",
        min1: "https://http2.mlstatic.com/D_Q_NP_967852-MLA52998085918_122022-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_705350-MLA52898043120_122022-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_809788-MLA52775926080_122022-R.webp"
    },
    {   
        id: 10,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/sportline/background_home201807241041.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_636721-MLA25904474456_082017-AE.webp",
        nombre: "Sportline",
        min1: "https://http2.mlstatic.com/D_Q_NP_955536-MLA53202521281_012023-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_898478-MLA53175720683_012023-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_842627-MLA50338677485_062022-R.webp"
    },
    {   
        id: "11",
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/samsung/background_home201902190516.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_869939-MLA28051336464_082018-AE.webp",
        nombre: "Samsung",
        min1: "https://http2.mlstatic.com/D_Q_NP_738423-MLA44180595980_112020-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_993781-MLA50499672764_062022-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_805162-MLA47690436691_092021-R.webp"
    },
    {   
        id: 12,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/lg/background_home201801171034.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_975065-MLA25817097055_072017-AE.webp",
        nombre: "LG",
        min1: "https://http2.mlstatic.com/D_Q_NP_705570-MLA49796471441_042022-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_624740-MLA51150020095_082022-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_787063-MLA49786485281_042022-R.webp"
    },
    {   
        id: 13,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/whirlpool/background_home201802161234.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_871989-MLA25801430807_072017-AE.webp",
        nombre: "Whirlpool",
        min1: "https://http2.mlstatic.com/D_Q_NP_683911-MLA51231637717_082022-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_903189-MLA45666233560_042021-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_721361-MLA50861264257_072022-R.webp"
    },
    {   
        id: 14,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/atma/background_home201801171036.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_638962-MLA25716465289_062017-AE.webp",
        nombre: "Atma",
        min1: "https://http2.mlstatic.com/D_Q_NP_615358-MLA51629972703_092022-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_914869-MLA51092418997_082022-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_764617-MLA51775306391_092022-R.webp"
    },
    {   
        id: 15,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/pintureriasrex/background_home201802011110.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_777904-MLA32660949268_102019-AE.webp",
        nombre: "REX",
        min1: "https://http2.mlstatic.com/D_Q_NP_639860-MLA44753898615_012021-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_938636-MLA53563090611_022023-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_953381-MLA44780748094_022021-R.webp"
    },
    {   
        id: 16,
        imgBack: "https://http2.mlstatic.com/storage/official-stores-images/randers/background_home201806080444.jpg",
        imgLogo: "https://http2.mlstatic.com/D_Q_NP_636207-MLA25899966797_082017-AE.webp",
        nombre: "Randers",
        min1: "https://http2.mlstatic.com/D_Q_NP_889272-MLA31116344263_062019-R.webp",
        min2: "https://http2.mlstatic.com/D_Q_NP_742564-MLA49004527142_022022-R.webp",
        min3: "https://http2.mlstatic.com/D_Q_NP_792062-MLA48504506492_122021-R.webp"
    },
]

/* -----------------------FUNCIONES PARA OBTENER PRODUCTOS----------------- */

export function getFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000);
    })
}

export function getTiendas() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(tiendas)
        }, 3000);
    })
}

let product = {}
export function getOneFetch(id) {
    product = productos.find(prod => prod.id === id)
}

export function getData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(product)
        }, 3000);
    })
}


/*----------------------Filtrado categorias------------------ */

const imagenesCategorias = {
    "Autos, motos y otros": "/src/assets/svg/9647734231596026964.svg",
    "Computación": "/src/assets/svg/4597722571594941564.svg",
    "Electrodomésticos y Aires AC.": "/src/assets/svg/223505411667014858.svg",
    "Deportes y Fitness": "/src/assets/svg/3782943391595759944.svg",
    "Inmuebles" : "/src/assets/svg/12619743831600701942.svg",
    "Belleza y cuidado personal" : "/src/assets/svg/12859160251577456578.svg",
    "Juegos y juguetes": "/src/assets/svg/14069564021594722314.svg",
    "Celulares y Teléfonos" : "/src/assets/svg/7442810861529659196.svg",
    "Electrónica, audio y video": "/src/assets/svg/15822901291574330930.svg",
    "Ropa y accesorios" : "/src/assets/svg/13372272811647527385.svg",
    "Hogar, Muebles y Jardín": "/src/assets/svg/2708072991644410979.svg",
    "Accesorios para Vehículos" : "/src/assets/svg/4348718321644665010.svg",
    "Consolas y Videojuegos" : "/src/assets/svg/8767056901596027045.svg",
    "Alimentos y Bebidas" : "/src/assets/svg/9721038191595501126.svg",
    "Entradas para eventos" : "/src/assets/svg/20071902211595452646.svg",
    "Bebés" : "/src/assets/svg/3170767291594722304.svg",
    "Joyas y relojes" : "/src/assets/svg/1048020881548243702.svg",
    "Libros, Revistas y Comics" : "/src/assets/svg/21286857451543238864.svg",
    "Animales y Mascotas" : "/src/assets/svg/5444940171644664434.svg",
    "Música, Películas y Series" : "/src/assets/svg/5023053441558095026.svg",
    "Arte, Librería y Mercería" : "/src/assets/svg/48020015316345278494481.svg",
    "Herramientas" : "/src/assets/svg/939214331599996366.svg",
    "Cámaras y Accesorios" : "/src/assets/svg/3535154801543238865.svg",
    "Industrias y Oficina" : "/src/assets/svg/8764298271544610474.svg",
    "Instrumentos Musicales" : "/src/assets/svg/7674053961595501068.svg",
    "Antiguedades y Colecciones" : "/src/assets/svg/8691163141544610482.svg",
    "Salud y Equipamiento Médico" : "/src/assets/svg/19458208641595341165.svg",
    "Servicios": "/src/assets/svg/19751791691579605507.svg",
    "Agro" : "/src/assets/svg/11142807601595234895.svg",
    "Sourvenires, Cotillón y Fiestas": "/src/assets/svg/15750679961553228274.svg",
    "Construcción": "/src/assets/svg/11850110701595119108.svg",
    "Otras Categorías": "/src/assets/svg/3214319516276482563764.svg"
  };
  
  export const categorias = productos.reduce((acc, producto) => {
    const categoriaExistente = acc.find(categoria => categoria.categoria === producto.categoria);
    if (categoriaExistente) {
      return acc;
    } else {
      const nuevaCategoria = {
        categoria: producto.categoria,
        img: imagenesCategorias[producto.categoria]
      };
      return [...acc, nuevaCategoria];
    }
  }, []);
  
  
  
  
  


  
