import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'
import { Table } from './components/ui/table'


function App() {

  // let data = {
  //   email: '',
  //   password: '',
  //   rememberMe: '',
  // }

  // const onSubmit = (data: any) => {
  //   console.log(data)
  // }
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* <SignIn onSubmit={onSubmit} /> */}
        <Table />
      </Provider >
    </BrowserRouter>
  )
}

export default App
