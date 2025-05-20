const express = require('express');
const app = express();


app.get('/song/:songId', (req, res) => {
  const { songId } = req.params;
  const deepLink = `purrytify://song/${songId}`;
  const fallbackUrl = 'https://play.google.com/store/apps/details?id=com.example.purrytify'; // Replace with your Play Store URL


  res.send(`
    <html>
      <head>
        <meta http-equiv="refresh" content="0;url=${deepLink}">
        <script>
          window.location.href = "${deepLink}";
          setTimeout(function() {
            window.location.href = "${fallbackUrl}";
          }, 1000);
        </script>
      </head>
    </html>
  `);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));