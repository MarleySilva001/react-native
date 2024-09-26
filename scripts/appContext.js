import { createContext, useState, useEffect } from "react"

export const AppContext = createContext()
export const AppProvider = ({children}) => {
    const [pedido, setPedido] = useState(0)
    const [carrinho, setCarrinho] = useState(0)
    const [cardapio, setCardapio] = useState([
        {
            id: '1',
            nome: 'Pizza de Calabresa',
            provedor: 'Pizzaria do Zé',
            valor: 47.90,
            quantidade: 0,
            imagem: 'https://sgnh.com.br/wp-content/uploads/2021/07/pizza_calabresa.png',
            descricao: 'Pizza de Calabresa tamanho médio com 6 fatias.'
        },
        {
            id: '2',
            nome: 'Cheesebúrger',
            provedor: 'Caliu Lanches',
            valor: 22.50,
            quantidade: 0,
            imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kRXV7tWV/200/200/original?country=br',
            descricao: 'Hambúrger com 1 fatia de carne bovina, queijo cheddar, tomate, picles e cebola.'
        },
        {
            id: '3',
            nome: 'Duplobúrger',
            provedor: 'Caliu Lanches',
            valor: 31.50,
            quantidade: 0,
            imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXjtUHf/200/200/original?country=br',
            descricao: 'Hambúrger com 1 fatia de carne bovina, queijo cheddar, tomate, picles, cebola, alface e molho.'
        },
        {
            id: '4',
            nome: 'Esfiha de Carne',
            provedor: 'Murad Foods',
            valor: 4.20,
            quantidade: 0,
            imagem: 'https://i0.wp.com/kssara.com.br/wp-content/uploads/2022/10/ESF_ABERTA_CARNE.png?fit=1000%2C1000&ssl=1',
            descricao: 'Esfiha de Carne redonda aberta. Por unidade'
        },
        {
            id: '5',
            nome: 'Pastel de Frango',
            provedor: 'Fritos do Pedroca',
            valor: 19.90,
            quantidade: 0,
            imagem: 'https://panutti.com.br/arquivos/produtos/imagens_adicionais/pastel%20de%20franngo-264.jpg',
            descricao: 'Pastel de Frango com requeijão.'
        },
        {
            id: '6',
            nome: 'Milkshake de Morango',
            provedor: 'MickeyShakes',
            valor: 14.50,
            quantidade: 0,
            imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kJX8kVfQ/200/200/original?country=br',
            descricao: 'Sorvete de Morango batido com leite e calda de morango. 300ml'
        },
        {
            id: '7',
            nome: 'Coca-Cola',
            provedor: 'Bebidas do Theago',
            valor: 5.00,
            quantidade: 0,
            imagem: 'https://www.imagensempng.com.br/wp-content/uploads/2022/01/2442.png',
            descricao: 'Lata de Coca-Cola. 500ml'
        },
        {
            id: '8',
            nome: 'Fanta Laranja',
            provedor: 'Bebidas do Theago',
            valor: 5.00,
            quantidade: 0,
            imagem: 'https://sudoestedistribuidora.com.br/wp-content/uploads/2023/02/REFRIGERANTE-FANTA-LARANJA-LATA-350ML.png',
            descricao: 'Lata de Fanta Laranja. 500ml'
        },
    ]);

    const alterarQuantidade = (id, tipo) => {
        setCardapio(prevCardapio => {
            const updatedCardapio = prevCardapio.map(item => {
                if (item.id === id) {
                    const novaQuantidade = tipo === 'incrementar' ? item.quantidade + 1 : item.quantidade > 0 ? item.quantidade - 1 : 0;
                    return { ...item, quantidade: novaQuantidade };
                }
                return item;
            });
            const totalItens = updatedCardapio.reduce((total, item) => total + item.quantidade, 0);
            setCarrinho(totalItens);
            return updatedCardapio;
        });
    }
    const cardapioFiltrado = () =>{
        const cardapioF = cardapio.filter(item => item.quantidade > 0)
        return cardapioF
    }
    useEffect(() => {

        const totalValor = cardapio.reduce((totalV, item) => totalV + (item.valor * item.quantidade), 0);
        setPedido(totalValor);
    }, [cardapio]);

       

    return (
        <AppContext.Provider value={{cardapio, setCardapio, carrinho, setCarrinho, alterarQuantidade, cardapioFiltrado, pedido, setPedido}}>
            {children}
        </AppContext.Provider>
    )
}