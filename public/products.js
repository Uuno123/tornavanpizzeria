// Kaikki kastikkeet maksavat saman verran. Hinta tuplaantuu perhekoossa,
// samalla logiikalla kuin lisätäytteillä.
const SAUCE_PRICE = 1.5;

const products = [
  {
    id: "Margareta",
    name: "Margareta",
    image: "images/Gemini_Generated_Image_mrmgzvmrmgzvmrmg.png",
    price: "10.50",
    description: "Juustoa, pizzakastike",
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
    image: "images/jauhelihapizza.png",
    price: "11.50",
    description: "Jauheliha",
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
    image: "images/tropicana.png",
    price: "11.50",
    description: "Kinkku, ananas",
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
    image: "images/opera.png",
    price: "11.50",
    description: "Kinkku, tonnikala",
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
    image: "images/pepperoni.png",
    price: "11.50",
    description: "Tupla pepperoni",
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
    image: "images/kasvispizza.png",
    price: "13.00",
    description: "Sipuli, oliivi, herkkusieni, ananas, paprika",
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
    image: "images/opera.png",
    price: "12.50",
    description: "Kinkku, tonnikala, salami",
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
    image: "images/quatrostagioni.png",
    price: "13.00",
    description: "Kinkku, herkkusieni, katkarapu, tonnikala",
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
    image: "images/fruttidimare.png",
    price: "12.50",
    description: "Tonnikala, katkarapu, simpukka",
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
    image: "images/americana.png",
    price: "12.50",
    description: "Kinkku, ananas, aura-juusto",
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
    image: "images/paradice.png",
    price: "13.50",
    description: "Kebab, jalapeno, tandoori-maustet, sipuli, BBQ-kastike",
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
    image: "images/venetsia.png",
    price: "12.50",
    description: "Kinkku, herkkusieni, katkarapu",
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
    image: "images/paradice.png",
    price: "12.50",
    description: "Salami, tonnikala, paprika",
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
    image: "images/manzo.png",
    price: "12.50",
    description: "Pepperoni, kinkku, sipuli",
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
    image: "images/romeo.png",
    price: "13.00",
    description: "Salami, ananas, katkarapu, aura-juusto",
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
    image: "images/julia.png",
    price: "13.00",
    description: "Kinkku, ananas, katkarapu, aura-juusto",
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
    id: "BlueChicken",
    name: "Blue Chicken",
    image: "images/romeo.png",
    price: "12.50",
    description: "Kana, ananas, aura-juusto",
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
    id: "TornavaSpecial",
    name: "Törnävä-Special",
    image: "törnävänspeciimages/al.png",
    price: "13.00",
    description: "Kebab-liha, aura-juusto, ananas, herkkusieni",
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
    image: "images/diavola.png",
    price: "13.00",
    description: "Kinkku, herkkusieni, pepperoni, sipuli, valkosipuli",
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
    image: "images/kummisetä.png",
    price: "13.00",
    description: "Kinkku, katkarapu, herkkusieni, tuplajuusto, valkosipuli",
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
    image: "images/empire.png",
    price: "13.00",
    description: "Salami, kinkku, katkarapu, tuplajuusto, mustapippuri, valkosipuli",
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
    image: "images/manzo.png",
    price: "13.00",
    description: "Kebab-liha, sipuli, herkkusieni, chilipepperoni",
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
    image: "papasspeciimages/al.png",
    price: "13.00",
    description: "Salami, kinkku, katkarapu, tuplajuusto",
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
    image: "images/pepperoni.png",
    price: "13.00",
    description: "Kebab-liha, jalapeno, paprika, sipuli, valkosipuli",
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
    image: "images/tropicana.png",
    price: "13.50",
    maxFreeExtras: 4,
    description: "Neljä täytettä oman valinnan mukaan",
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
  VENEPIZZAT
  =====================*/
  {
    id: "tornava-vene",
    name: "Törnävä Vene",
    image: "images/manzo.png",
    price: "13.00",
    description: "Kebab-liha, herkkusieni, sipuli, chili, majoneesi",
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
    id: "ligure",
    name: "Ligure",
    image: "images/venetsia.png",
    price: "13.00",
    description: "Kebab-liha, ananas, aura-juusto, majoneesi, curry",
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

  /*===================
  KEBAB
  =====================*/
  {
    id: "Pita Kebab",
    name: "PitaKebab",
    image: "images/pitakebab.png",
    price: "11.00",
    description: "Uunituore leipä, kebab-liha, salaatti, kebab-kastike",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/kebabriisillä.png",
    price: "12.00",
    description: "Riisi, kebab-liha, kebab-kastike, salaatti",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/kebabranskalaisilla.png",
    price: "12.00",
    description: "Ranskalaiset, kebab-liha, kebab-kastike, salaatti",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/kebabranskalaisilla.png",
    price: "12.00",
    description: "Lohkoperunat, kebab-liha, kebab-kastike, salaatti",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/kebabranskalaisilla.png",
    price: "12.50",
    description: "Uunituoreita leipäkuutioita, kebab-liha, kebab-kastike, jogurttikastike, salaatti",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/kebabrulla.png",
    price: "13.00",
    description: "Kebab-liha, salaatti, kebab-kastike",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/kebabrulla.png",
    price: "17.00",
    description: "Tupla kebab, juusto, salaatti, kebab-kastike",
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
      { name: "Tuplaliha", price: 6 },
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
    id: "Kebab Valkosipuliperunoilla",
    name: "Kebab Valkosipuliperunoilla",
    image: "images/kebabranskalaisilla.png",
    price: "12.50",
    description: "Valkosipuliperunat, kebab-liha, kebab-kastike, salaatti",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/kebabranskalaisilla.png",
    price: "12.50",
    description: "Kermaperunat, kebab-liha, kebab-kastike, salaatti",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/kebabaura.png",
    price: "13.00",
    description: "Aurajuustoperunat, kebab-liha, kebab-kastike, salaatti",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/kebabranskalaisilla.png",
    price: "12.50",
    description: "Jäävuorisalaatti, kebab-liha, tomaatti, kurkku, fetajuusto",
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
      { name: "Tuplaliha", price: 6 },
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
    image: "images/al.png",
    price: "13.00",
    description: "Kebab-liha, sipuli, jalapeno, paprika, valkosipuli, mustapippuri",
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
    image: "images/al2.png",
    price: "13.00",
    description: "Ananas, oliivi, sipuli, herkkusieni",
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
    PANNUPIZZAT
  ====================*/
  {
    id: "pannupizza-2",
    name: "Pannupizza 2 täytettä",
    image: "images/quatrostagioni.png",
    price: "15.00",
    maxFreeExtras: 2,
    description: "Valitse täytteet lisätäytteistä",
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
    id: "pannupizza-3",
    name: "Pannupizza 3 täytettä",
    image: "images/quatrostagioni.png",
    price: "16.00",
    maxFreeExtras: 3,
    description: "Valitse täytteet lisätäytteistä",
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
    id: "pannupizza-4",
    name: "Pannupizza 4 täytettä",
    image: "images/quatrostagioni.png",
    price: "17.00",
    maxFreeExtras: 4,
    description: "Valitse täytteet lisätäytteistä",
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
    image: "images/salaatti.png",
    price: "11.50",
    description: "Tonnikala, paprika, jäävuorisalaatti, kurkku, tomaatti, salaattikastike, uunituore leipä",
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
    image: "images/salaatti.png",
    price: "11.50",
    description: "Katkarapuja, herkkusieniä, jäävuorisalaatti, kurkku, tomaatti, salaattikastike, uunituore leipä",
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
    image: "images/salaatti.png",
    price: "12.50",
    description: "Paistettu broilerin filee, ananas, jäävuorisalaatti, kurkku, tomaatti, salaattikastike, uunituore leipä",
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
    image: "images/salaatti.png",
    price: "12.00",
    description: "Sipuli, chili, pepperoni, oliivi, jäävuorisalaatti, kurkku, tomaatti, salaattikastike, uunituore leipä",
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
    image: "images/pita.png",
    price: "11.50",
    description: "Kana",
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
    image: "images/kebabrulla.png",
    price: "13.00",
    description: "Kana",
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
    id: "kana-riisi",
    name: "Riisi",
    image: "images/kebabriisillä.png",
    price: "12.00",
    description: "Kana, riisi",
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
    image: "images/ranu.png",
    price: "12.00",
    description: "Kana, ranskalaiset",
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
    image: "images/lohko.png",
    price: "12.00",
    description: "Kana, lohkoperunat",
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
    image: "images/lohko.png",
    price: "12.50",
    description: "Kana, kermaperunat",
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
    image: "images/lohko.png",
    price: "12.50",
    description: "Kana, valkosipuliperunat",
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
    image: "images/lohko.png",
    price: "13.00",
    description: "Kana, aurajuustoperunat",
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
    image: "images/siivet.png",
    price: "8.00",
    description: "Kanasiipipalat, dippikastike",
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
    image: "images/siivet.png",
    price: "10.00",
    description: "Kanasiipipalat, dippikastike",
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
    image: "images/siivet.png",
    price: "14.00",
    description: "Kanasiipipalat, dippikastike",
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
    image: "images/siivet.png",
    price: "19.00",
    description: "Kanasiipipalat, dippikastike",
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
    image: "images/siivet.png",
    price: "22.00",
    description: "Kanasiipipalat, dippikastike",
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
    image: "images/siivet.png",
    price: "30.00",
    description: "Kanasiipipalat, dippikastike",
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

  /*===================
  JUOMAT
  =====================*/
  {
    id: "coca-cola-15",
    name: "Coca-Cola 1,5 l",
    image: "https://imageproxy.wolt.com/products/06415600501811-02730637-07d6-4ab6-95c5-39adcd817074.jpg?w=600",
    price: "5.00",
    description: "Virvoitusjuoma",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [],
    extras: []
  },
  {
    id: "coca-cola-zero-15",
    name: "Coca-Cola Zero 1,5 l",
    image: "https://imageproxy.wolt.com/products/06415600502078-dbc81eef-644b-4284-9527-5147eebe08d9.jpg?w=600",
    price: "5.00",
    description: "Virvoitusjuoma",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [],
    extras: []
  },
  {
    id: "fanta-zero-033",
    name: "Fanta Zero 0,33 l",
    image: "https://imageproxy.wolt.com/assets/69e54e5166188661e63350db?w=600",
    price: "2.50",
    description: "Virvoitusjuoma",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [],
    extras: []
  },
  {
    id: "coca-cola-033",
    name: "Coca-Cola 0,33 l",
    image: "https://imageproxy.wolt.com/assets/69e54d3d66188661e63350d6?w=600",
    price: "2.50",
    description: "Virvoitusjuoma",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [],
    extras: []
  },
  {
    id: "coca-cola-zero-033",
    name: "Coca-Cola Zero 0,33 l",
    image: "https://imageproxy.wolt.com/assets/69e54d3d66188661e63350d6?w=600",
    price: "2.50",
    description: "Virvoitusjuoma",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [],
    extras: []
  },
  {
    id: "sprite-zero-033",
    name: "Sprite Zero 0,33 l",
    image: "https://imageproxy.wolt.com/assets/69e54dfd66188661e63350d9?w=600",
    price: "2.50",
    description: "Virvoitusjuoma",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [],
    extras: []
  },

  /*===================
  FALAFEL
  =====================*/
  {
    id: "falafel-pita",
    name: "Falafel Pita",
    image: "images/pita.png",
    price: "11.00",
    description: "Falafel, salaatti, kastike",
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
    id: "falafel-riisilla",
    name: "Falafel Riisillä",
    image: "images/kebabriisillä.png",
    price: "12.00",
    description: "Falafel, riisi, salaatti",
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
    id: "falafel-ranskalaisilla",
    name: "Falafel Ranskalaisilla",
    image: "images/kebabranskalaisilla.png",
    price: "12.00",
    description: "Falafel, ranskalaiset, salaatti",
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
    id: "falafel-rulla",
    name: "Falafel Rulla",
    image: "images/kebabrulla.png",
    price: "12.00",
    description: "Falafel, salaatti, kastike",
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

  /*===================
  TESTI
  =====================*/
  {
    id: "uuno-testaa",
    name: "UUNO TESTAA",
    image: "images/logo.png",
    price: "0.50",
    description: "Testituote",
    sizes: [{ name: "Normal", extra: 0 }],
    sauces: [],
    maxFreeExtras: 19,
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

if (typeof module !== 'undefined') {
  module.exports = products;
  module.exports.SAUCE_PRICE = SAUCE_PRICE;
}

