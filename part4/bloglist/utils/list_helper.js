// eslint-disable-next-line
const dummy = (blogs) => {
   return 1;
};

const totalLikes = (blogs) => {
   const reducer = (sum, item) => {
      return sum + item['likes'];
   };

   return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
   const sortedBlogs = blogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));
   let result = {};

   if (blogs.length > 0) {
      result.title = sortedBlogs[0].title;
      result.author = sortedBlogs[0].author;
      result.likes = sortedBlogs[0].likes;
   }

   return blogs.length > 0 ? result : null;
};

module.exports = { dummy, totalLikes, favoriteBlog };
