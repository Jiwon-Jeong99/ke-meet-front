import Nav from './Home/Nav/Nav';
import SlidingImg from './Home/SlidingImg/SlidingImg';
import DateChoice from './Home/DateChoice/DateChoice';
import PostList from './Home/PostList/PostList';

function App() {
  return (
    <div className='App'>
      <Nav />
      <SlidingImg />
      <DateChoice />
      <PostList />
    </div>
  );
}

export default App;
