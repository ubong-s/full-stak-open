import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { newNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
   const addAnecdote = async (event) => {
      event.preventDefault();
      const content = event.target.anecdote.value;
      event.target.anecdote.value = '';
      props.createAnecdote(content);
      props.newNotification(`you created '${content}'`, 5);
   };

   return (
      <>
         <h2>create new</h2>
         <form onSubmit={addAnecdote}>
            <div>
               <input name='anecdote' />
            </div>
            <button type='submit'>create</button>
         </form>
      </>
   );
};

const mapDispatchToProps = {
   createAnecdote,
   newNotification,
};

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);
export default ConnectedAnecdoteForm;
