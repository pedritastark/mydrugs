export function get_products(){
    return [{
        id: 'power_kush',
        name: 'Power Kush',
        description: 'Power Kush es una de las semillas de marihuana feminizadas más destacada de la familia Kush pero también es una variedad con una producción brutal. En Dinafem Seeds queríamos crear una variedad poderosa y compleja, y nuestro equipo de breeders dio en el clavo con una propuesta que fue todo un hallazgo. Afghani y Skunk #1 son las protagonistas de esta historia ',
        price: 31000, 
        sold: 12,
        available: true,
        img:'https://www.dinafem.org/uploads/002926-powerkush_660x990.jpg'
    },{
        id: 'blue_cheese',
        name: 'Blue Cheese',
        description: 'Blue Cheese es una semilla de marihuana feminizada con una excelente calidad a nivel global: es fácil de cultivar, tiene un buen rendimiento y su inigualable sabor está en boca de todos. Para nosotros, en Dinafem Seeds, ha sido un verdadero reto trabajar con dos prestigiosas y respetadas genéticas, Exodus UK Cheese y Blueberry, con el objetivo de crear una variedad que reuniese lo mejor de ambas.',
        price: 30220,
        sold: 120,
        available: false,
        img:'https://www.dinafem.org/uploads/0003021-blue-cheese_660x990.jpg',
    },{
        id: 'purple_afghan_kush',
        name: 'Purple Afghan Kush',
        description: 'Purple Afghan Kush es la semilla marihuana indica de Dinafem Seeds más impresionante y misteriosa. Nace de la unión de los dos gigantes Kush por excelencia: Purple Kush y Bubba Kush (esta segunda, fruto de nuestro clon Pre’98 Bubba Kush, puro tesoro).',
        price: 3001,
        available: true,
        sold: 12,
        img:'https://www.dinafem.org/uploads/dinafem-purpleafghankush-4780_660x990.jpg',
    },{
        id: 'gorilla',
        name: 'Gorilla',
        description: 'Gorilla es una variedad de marihuana feminizada muy aclamada en los Estados Unidos. Descendiente de la familia Chem, hace honor a sus orígenes con una potencia y un aroma fuera de serie. Es un híbrido con predominancia índica capaz de bajar del podio a las índicas más puras, como ya demostró por partida doble en 2014 en la Copa Los Ángele',
        price:1231,
        available: true,
        sold: 123,
        img:'https://www.dinafem.org/uploads/dinafem-gorilla4-0497_660x990.jpg',
    },{
        id: 'blue_kush',
        name: 'Blue Kush',
        description: 'Blue Kush es una semilla de marihuana feminizada capaz de estimular todos tus sentidos y de llenarte de buenas vibraciones. En Dinafem Seeds nos apetecía trabajar con dos iconos cannábicos de la categoría de Blueberry y OG Kush, y, aunque son genéticas bien diferentes y con gran personalidad, ambas han sabido complementarse a la perfección',
        price: 1231,
        available: true,
        sold: 1233,
        img:'https://www.dinafem.org/uploads/0003053-blue-kush_660x990.jpg',
    },{
        id: 'bubba_kush',
        name: 'Bubba Kush',
        description: 'Bubba Kush es una semilla de marihuana feminizada de leyenda. Por eso Dinafem Seeds no podía prescindir de ella en su catálogo; porque es la planta índica más aclamada de todos los tiempos. Es una de las variedades más valorada en Estados Unidos y su historia se remonta a los años 90, cuando algunos amantes de las Kush hacían breeding en Los Ángeles.',
        price: 400,
        sold: 1233,
        available: false,
        img:'https://www.dinafem.org/uploads/0003049-bubba-kush_660x990.jpg',
    },{
        id: 'critical_jack',
        name: 'Critical Jack',
        description: 'Critical Jack es una semilla de marihuana feminizada creada con dos leyendas del cannabis: Critical + y Jack Herer. En Dinafem Seeds decidimos trabajar con estas dos genéticas porque pensamos que con ellas solo podía resultar algo realmente bueno, y así ha sido',
        price: 1230,
        available: true,
        sold: 1230,
        img:'https://www.dinafem.org/uploads/CJ3-critical-jack_660x990.jpg',
    },{
        id: 'santa_sativa',
        name: 'Santa Sativa',
        description: 'Santa Sativa tiene el honor de ser una de las primeras semillas de marihuana de dominancia sativa que entró a formar parte del catálogo de Dinafem Seeds. Quizás por ello, este híbrido cannábico de intenso sabor Haze, fruto de la unión entre una Haze#1 y una Skunk x Northern Lights, es una de las variedades favoritas de nuestros breeders',
        price:123,
        available: true,
        sold:456,
        img: 'https://www.dinafem.org/uploads/002928-santa-sativa_660x990.jpg'
    },{
        id: 'super_silver',
        name: 'Super Silver',
        description: 'Super Silver es una de esas variedades de marihuana que desde el minuto uno muestra con firmeza que es una auténtica Sativa. No hay más que fijarse en su estructura, en su glotonería y en su nivel de producción para darse cuenta. En Dinafem Seeds estábamos seguros de que esta semilla feminizada sería una triunfadora que se convertiría en una maravilla',
        price:456,
        sold:557,
        available: true,
        img:'https://www.dinafem.org/uploads/002930-super-silver_660x990.jpg',
    }]
}

export function get_product(productId){
    return get_products().filter( product => product.id == productId )[0]
}



