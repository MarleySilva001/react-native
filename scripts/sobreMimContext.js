import { createContext } from "react";

export const DetalheContext = createContext();
export const DetalheProvider = ({children}) => {
    const livros = [
        {
            id: '1',
            nome: 'Duna',
            autor: 'Frank Herbert',
            ano: 1965,
            capa: 'https://m.media-amazon.com/images/I/81zN7udGRUL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: '2',
            nome: 'O Iluminado',
            autor: 'Stephen King',
            ano: 1977,
            capa: 'https://m.media-amazon.com/images/I/8147kKLLvOL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: '3',
            nome: 'Jurassic Park',
            autor: 'Michael Crichton',
            ano: 1990,
            capa: 'https://m.media-amazon.com/images/I/61d8KnB-M1L._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: '4',
            nome: 'Caçadores de Trolls',
            autor: 'Guillermo del Toro e Daniel Kraus',
            ano: 2015,
            capa: 'https://m.media-amazon.com/images/I/A1hq2gtYe3L._SL1500_.jpg',
        },
    ];
    const albuns = [
        {
            id: '1',
            nome: 'Rodeo',
            autor: 'Travis Scott',
            ano: 2015,
            capa: 'https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg',
            descricao: "Um dos meu álbuns favoritos, escutei milhares de vezes principalmente em 2023, embora tenha diversas faixas que me marcaram, as minhas favoritas são: Apple Pie, 90210, Oh My Dis Side, com menção honrosa a Antidote."
        },
        {
            id: '2',
            nome: 'Astroworld',
            autor: 'Travis Scott',
            ano: 2018,
            capa: 'https://upload.wikimedia.org/wikipedia/pt/6/63/Astroworld_Travis.jpg',
            descricao: 'O maior e melhor álbum do Travis Scott, obviamente não poderia estar de fora dessa lista, tem uma ambientação incrivel com otimas faixas, minhas favoritas? Astrothunder, Houstonfornication, Stargazing e Buttlerfly Effect. Uma curiosidade a O.G. version de astrothunder tem um beat bem diferente da versão final, mas ainda assim é bem legal.'
        },
        {
            id: '3',
            nome: 'Whole Lotta Red',
            autor: 'Playboi Carti',
            ano: 2020,
            capa: 'https://upload.wikimedia.org/wikipedia/pt/6/6c/Playboi_Carti_-_Whole_Lotta_Red.png',
            descricao: 'Escutei esse uma faixa dessa álbum alguns anos átras, a capa sempre me chamou muita atenção mas lembro que estranhei bastante a batida, em 2024 dei mais uma chance ao álbum, no começo tive bastante relutancia, mas depois foi uma experiência incrível. algumas das minhas faixas favoritas são: New Neon, King Vamp e Rockstar Made.'
        },
        {
            id: '4',
            nome: 'Man on the Moon II: The Legend of Mr. Rager',
            autor: 'Kid Cudi',
            ano: 2010,
            capa: 'https://i.scdn.co/image/ab67616d0000b27359e842b6a3566a141f27f815',
            descricao: ''
        },
    ];

    return(
        <DetalheContext.Provider value={{albuns,livros}}>
            {children}
        </DetalheContext.Provider>
    )
}