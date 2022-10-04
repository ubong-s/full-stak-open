const express = require('express');
const app = express();

let persons = [
   {
      id: 1,
      name: 'Arto Hellas',
      number: '040-123456',
   },
   {
      id: 2,
      name: 'Ada Lovelace',
      number: '39-44-5323523',
   },
   {
      id: 3,
      name: 'Dan Abramov',
      number: '12-43-234345',
   },
   {
      id: 4,
      name: 'Mary Poppendieck',
      number: '39-23-6423122',
   },
];

app.get('/', (request, response) => {
   response.send(`<h1>Phonebook Backend</h1>`);
});

app.get('/info', (request, response) => {
   response.send(`<p>Phonebook has info for ${persons.length} people</p>
   <p>${new Date()}</p>
   `);
});

app.get('/api/persons', (request, response) => {
   response.status(200).json(persons);
});

app.get('/api/persons/:id', (request, response) => {
   const { id } = request.params;

   const person = persons.find((p) => p.id === Number(id));

   if (!person) {
      return response.status(404).send('Resource does not exist');
   }

   response.status(200).json(person);
});

app.delete('/api/persons/:id', (request, response) => {
   const { id } = request.params;

   const person = persons.find((p) => p.id === Number(id));

   if (!person) {
      return response.status(404).send('Resource does not exist');
   }

   persons = persons.filter((n) => n.id !== Number(id));

   response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});