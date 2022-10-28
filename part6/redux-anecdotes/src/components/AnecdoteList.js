import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
   const anecdotes = useSelector((state) => state);
   const dispatch = useDispatch();
   return (
      <>
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
      </>
   );
};

export default AnecdoteList;
