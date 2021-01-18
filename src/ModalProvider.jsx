import createProvider from "./ui/Modal/create";
import { TRADE_COIN_MODAL } from "./constants/modals";
//import TradeCoinPage from "./components/main/TradeCoinPage";
import TradeCoinPage from "./containers/main/TradeCoinPageContainer";

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
});
