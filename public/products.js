const products = [
  {
    id: "Margareta",
    name: "Margareta",
    image: "kuva1.jpg",
    price: "10.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 10.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Jauhelihapizza",
    name: "Jauhelihapizza",
    image: "kuva1.jpg",
    price: "11.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 10.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Tropicana",
    name: "Tropicana",
    image: "kuva1.jpg",
    price: "11.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 11.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Opera",
    name: "Opera",
    image: "kuva1.jpg",
    price: "11.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 11.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Pepperoni",
    name: "Pepperoni",
    image: "kuva1.jpg",
    price: "11.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 11.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "KasvisPizza",
    name: "Kasvis Pizza",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "OperaSpecial",
    name: "Opera Special",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 12.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "QuattroStagioni",
    name: "Quattro Stagioni",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "FruttiDiMare",
    name: "Frutti di Mare",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 12.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Americana",
    name: "Americana",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 12.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "KabulPizza",
    name: "Kabul Pizza",
    image: "kuva1.jpg",
    price: "13.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Venetsia",
    name: "Venetsia",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 12.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Paradice",
    name: "Paradice",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 12.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Manzo",
    name: "Manzo",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 12.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Romeo",
    name: "Romeo",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Julia",
    name: "Julia",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "TornavaSpecial",
    name: "Törnävä-Special",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Diavola",
    name: "Diavola",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Kummiseta",
    name: "Kummisetä",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Empire",
    name: "Empire",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "KebabSpecial",
    name: "Kebab Special",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "PapasSpecial",
    name: "Papa's Special",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Mexicana",
    name: "Mexicana",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Fantasia",
    name: "Fantasia",
    image: "kuva1.jpg",
    price: "13.50",
    sizes: [
      { name: "Normal", extra: 0 },
      { name: "Large", extra: 13.5 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },

  /*===================
  KEBAB
  =====================*/ 
  {
    id: "Pita Kebab",
    name: "PitaKebab",
    image: "kuva1.jpg",
    price: "11.00",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Kebab Riisilla",
    name: "KebabRiisillä",
    image: "kuva1.jpg",
    price: "12.00",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Kebab Ranskalaisilla",
    name: "Kebab Ranskalaisilla",
    image: "kuva1.jpg",
    price: "12.00",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Kebab Lohkoperunoilla",
    name: "Kebab Lohkoperunoilla",
    image: "kuva1.jpg",
    price: "12.00",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Iskender Kebab",
    name: "Iskender Kebab",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Rullakebab",
    name: "Rullakebab",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Special Rulla Kebab",
    name: "Special Rulla Kebab",
    image: "kuva1.jpg",
    price: "17.00",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Kebab Kermaperunoilla",
    name: "Kebab Kermaperunoilla",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "Kebab Aurajuustoperunoilla",
    name: "Kebab Aurajuustoperunoilla",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "kebab-salaatti",
    name: "Kebab Salaatti",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },

  
  {
    id: "al_tonno",
    name: "Al Tonno Calzone",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "lorenzo",
    name: "Lorenzo Calzone",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },


  /*==================
    SALAATIT
  ====================*/

    {
    id: "tonnikalasalaatti",
    name: "Tonnikalasalaatti",
    image: "kuva1.jpg",
    price: "11.50",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "katkarapusalaatti",
    name: "Katkarapusalaatti",
    image: "kuva1.jpg",
    price: "11.50",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "kanasalaatti",
    name: "Kanasalaatti",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "fetasalaatti",
    name: "Fetasalaatti",
    image: "kuva1.jpg",
    price: "12.00",
    sizes: [
      { name: "Normal", extra: 0 }
    ],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },

  /*=================
    KANAT
    ================*/

    
  {
    id: "pitaleipa",
    name: "Pitaleipä",
    image: "kuva1.jpg",
    price: "11.50",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "rulla",
    name: "Rulla",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "ranskikset",
    name: "Ranskalaiset",
    image: "kuva1.jpg",
    price: "12.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "lohkoperunat",
    name: "Lohkoperunat",
    image: "kuva1.jpg",
    price: "12.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "kermaperunat",
    name: "Kermaperunat",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "valkosipuliperunat",
    name: "Valkosipuliperunat",
    image: "kuva1.jpg",
    price: "12.50",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "aurajuustoperunat",
    name: "Aurajuustoperunat",
    image: "kuva1.jpg",
    price: "13.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },

  // --- HOT WINGS ---
  {
    id: "wings8",
    name: "Hot Wings 8 kpl",
    image: "kuva1.jpg",
    price: "8.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "wings10",
    name: "Hot Wings 10 kpl",
    image: "kuva1.jpg",
    price: "10.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "wings16",
    name: "Hot Wings 16 kpl",
    image: "kuva1.jpg",
    price: "14.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "wings25",
    name: "Hot Wings 25 kpl",
    image: "kuva1.jpg",
    price: "19.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "wings30",
    name: "Hot Wings 30 kpl",
    image: "kuva1.jpg",
    price: "22.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  },
  {
    id: "wings50",
    name: "Hot Wings 50 kpl",
    image: "kuva1.jpg",
    price: "30.00",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [
      "Majoneesi",
      "Valkosipuli majoneesi",
      "Amerikkalainen kastike",
      "BBQ kastike",
      "Mango kastike"
    ],
    extras: [
      { name: "Ananas", price: 1.5 },
      { name: "Tonnikala", price: 1.5 },
      { name: "Oliivi", price: 1.5 },
      { name: "Aurajuusto", price: 1.5 },
      { name: "Paprika", price: 1.5 },
      { name: "Herkkusieni", price: 1.5 },
      { name: "Simpukka", price: 1.5 },
      { name: "Feta", price: 1.5 },
      { name: "Katkarapu", price: 1.5 },
      { name: "Tomaatti", price: 1.5 },
      { name: "Kinkku", price: 1.5 },
      { name: "Salami", price: 1.5 },
      { name: "Pepperonimakkara", price: 1.5 },
      { name: "Juusto", price: 1.5 },
      { name: "Valkosipuli", price: 1.5 },
      { name: "Jauheliha", price: 1.5 },
      { name: "Kebabliha", price: 1.5 },
      { name: "Kana", price: 1.5 },
      { name: "Jalapeno", price: 1.5 }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = products;

