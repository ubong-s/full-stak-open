import { useSelector, useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import { createAnecdote, voteAnecdote } from './reducers/anecdoteReducer';

const App = () => {
   const anecdotes = useSelector((state) => state);
   const dispatch = useDispatch();

   return (
      <div>
         <h2>Anecdotes</h2>
         {anecdotes
            .sort((a, b) => b.votes - a.votes)
            .map((anecdote) => (
               <div key={anecdote.id}>
                  <div>{anecdote.content}</div>
                  <div>
                     has {anecdote.votes}
                     <button
                        onClick={() => dispatch(voteAnecdote(anecdote.id))}
                     >
                        vote
                     </button>
                  </div>
               </div>
            ))}
         <h2>create new</h2>
         <AnecdoteForm />
      </div>
   );
};

export default App;