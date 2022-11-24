import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_BOOK, ALL_AUTHORS, ALL_BOOKS } from '../queries';

const NewBook = ({ setError, show, setPage }) => {
   const [addBook, result] = useMutation(ADD_BOOK, {
      refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }],
      onError: (error) => {
         console.log(error);
         setError(error.graphQLErrors[0].message);
      },
   });

   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [published, setPublished] = useState('');
   const [genre, setGenre] = useState('');
   const [genres, setGenres] = useState([]);

   if (!show) {
      return null;
   }

   const submit = async (event) => {
      event.preventDefault();

      addBook({
         variables: { title, author, published: Number(published), genres },
      });

      setTitle('');
      setPublished('');
      setAuthor('');
      setGenres([]);
      setGenre('');

      if (result.data) {
         setPage('books');
      }
   };

   const addGenre = () => {
      setGenres(genres.concat(genre));
      setGenre('');
   };

   return (
      <div>
         <form onSubmit={submit}>
            <div>
               title
               <input
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
               />
            </div>
            <div>
               author
               <input
                  value={author}
                  onChange={({ target }) => setAuthor(target.value)}
               />
            </div>
            <div>
               published
               <input
                  type='number'
                  value={published}
                  onChange={({ target }) => setPublished(target.value)}
               />
            </div>
            <div>
               <input
                  value={genre}
                  onChange={({ target }) => setGenre(target.value)}
               />
               <button onClick={addGenre} type='button'>
                  add genre
               </button>
            </div>
            <div>genres: {genres.join(' ')}</div>
            <button type='submit'>create book</button>
         </form>
      </div>
   );
};

export default NewBook;
