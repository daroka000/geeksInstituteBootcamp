const express = require('express');
const app = express();

app.use(express.json());

const { fetchPosts } = require('./data/dataService');
const PORT = 5000;
app.get('/api/fetch-posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Posts fetched and sent to client.');
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts from external API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
