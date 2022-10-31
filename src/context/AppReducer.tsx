interface action {
  type: string;
  payload: any;
}

type state = any;

export default function AppReducer(action: action, state: state) {
  switch (action.type) {
    default:
      return state;
    case 'LOGIN_SUCCESS':
      return { ...state, loginSuccess: true };
    case 'LOAD_TOTAL_CARDS':
      return { ...state, cards: action.payload, loadingCards: true };
    case 'TOTAL_CARDS_SUCCESS':
      return { ...state, totalCards: action.payload };

    case 'LOAD_CARDS_SUCCESS':
      return { ...state, loadingCards: false, totalCards: action.payload };
  }
}
