let initialState = {
    id: 4,
    books: [
        { id: 1, titre: "titre 1", nbpage: 300 },
        { id: 2, titre: "titre 2", nbpage: 350 },
        { id: 3, titre: "titre 3", nbpage: 400 }
    ]
}

function toggleBooks(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_BOOK':
            nextState = {
                ...state,
                id: action.id + 1,
                books: [...state.books, { id: action.id + 1, titre: action.titre, nbpage: action.nbpage }]
            };
            return nextState || state
        case 'REMOVE_BOOK':
            const bookIndexRemove = state.books.findIndex(book => {
                return book.id === action.id;
            });
            const copyBookListRemove = [...state.books];
            copyBookListRemove.splice(bookIndexRemove, 1);
            nextState = {
                ...state,
                books: copyBookListRemove
            };
            return nextState || state
        case 'UPDATE_BOOK':
            const bookIndexUpdate = state.books.findIndex(book => {
                return book.id === action.id;
            });
            const copyBookListUpdate = [...state.books];
            copyBookListUpdate[bookIndexUpdate] = { id: action.id, titre: action.titre, nbpage: action.nbpage };
            // copyBookList.splice(bookIndex, 1);
            // copyBookList.splice(bookIndex, 0, { id, titre, nbpage })
            nextState = {
                ...state,
                books: copyBookListUpdate
            };
            return nextState || state
        default:
            return state
    }
}

export default toggleBooks