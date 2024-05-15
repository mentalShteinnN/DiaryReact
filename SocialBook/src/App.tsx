import { Container, NewPostForm, PostsWrapper } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "./store";


function App() {

  return (
    <>
        <ToastContainer />
      <Provider store={store}>
        <Container>
          <NewPostForm />
          <PostsWrapper />
        </Container>
      </Provider>
    </>
  )
}

export default App
