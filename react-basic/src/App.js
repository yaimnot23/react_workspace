import './App.css';
import Hello from './components/Hello';
import HelloProps from './components/HelloProps';
import Counter from './components/Counter';
import InputSample2 from './components/InputSample2';
import InputSample from './components/InputSample';
import UserList from './components/user/UserList';




function App() {

  const [inputs, setInputs] = useStates({
    email : '',
    password : ''
  });
  const {email,password} = inputs;

  const [users,setUsers] = userState([{
    id: 1,
    username: 'kdpark',
    email: 'kdpark@kw.ac.kr',
    password: '1234'
  },
  {
    id: 2,
    username: '222',
    email: '222@kw.ac.kr',
    password: '222'
  }
]);

const nextId = useRef(3);

const onChange = e => {
  const {name, value} = e.target;
  setInputs({
    ...inputs,
    [name] : value
  });
  }

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
};

setUsers([...users, user]);

setInputs({
  username: '',
  email: '',
  password: ''
});

nextId.current += 1;
}

const onRemove = id => {
  setUsers(users.filter(user => user.id !== id));
};


}

nextId.current += 1;

  
  return (
    <div className="App">
      <h1>Hello React World</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <HelloProps name="react" color="red"/>
      <hr />
      <Counter />
      <InputSample2/>
      -------------------------------
      <InputSample/>
      -------------------------------
      <h1>사용자 목록</h1>
      <UserList users={users}/>
    </div>
)

export default App;
