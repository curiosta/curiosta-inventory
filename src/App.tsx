import Account from "@pages/Account";
import Guide from "@pages/Guide";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Request from "@pages/Request";
import RequestItems from "@pages/RequestItems";
import Signup from "@pages/Signup";
import Welcome from "@pages/Welcome";
import { useSignal } from "@preact/signals";
import Router, {
  Route,
  RouterOnChangeArgs,
  getCurrentUrl,
} from "preact-router";
import user from "@api/user";
import Loading from "@/components/Loading";
import admin from "@api/admin";
import { isUser } from "@store/userState";
import PickItems from "@pages/PickItems";
import Cart from "@pages/Cart";
import Orders from "@pages/Orders";
import OrderInfo from "@components/Orders/OrderInfo";

const App = () => {
  const currentUrl = useSignal<string>(getCurrentUrl());
  const publicRoute = ["/", "/welcome", "/login", "/signup"];

  const userState = isUser.value ? user.state.value : admin.state.value;

  if (!publicRoute.includes(currentUrl.value) && userState === "loading") {
    return (
      <div className="h-screen">
        <Loading loadingText="loading" />
      </div>
    );
  }

  if (
    !publicRoute.includes(currentUrl.value) &&
    userState !== "authenticated"
  ) {
    currentUrl.value = "/login";
  }

  return (
    <Router
      url={currentUrl.value}
      onChange={(e: RouterOnChangeArgs) => (currentUrl.value = e.url)}
    >
      <Route path="/" component={Guide} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/account" component={Account} />
      <Route path="/create-requests" component={Request} />
      <Route path="/create-requests/:id" component={RequestItems} />
      <Route path="/pick-items/:id" component={PickItems} />
      <Route path="/cart" component={Cart} />
      <Route path="/orders" component={Orders} />
      <Route path="/orders/:id" component={OrderInfo} />
    </Router>
  );
};

export default App;
