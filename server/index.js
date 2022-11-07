require("dotenv").config();

const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/products', (req, res) => {
  db.query('SELECT * FROM product').then((data) => res.send(data));
})

app.get('/products/:product_id', (req, res) => {
  db.query(`SELECT * FROM product WHERE id=${req.params.product_id}`).then((product) => {
    db.query(`SELECT feature, value FROM features WHERE product_id=${req.params.product_id}`).then((features) => {
      var out = product.rows[0];
      out.features = features.rows;
      res.send(out);
    });
  });
})

app.get('/products/:product_id/styles', (req, res) => {
  db.query(`SELECT style_id, name, original_price, sales_price, _default FROM styles WHERE product_id=${req.params.product_id}`).then((styles) => {
    var style_ids = JSON.stringify(styles.rows.map(obj => obj.style_id));
    styles.rows.map((obj) => obj.photos=[]);
    db.query(`SELECT style_id, thumbnail_url, url FROM photos WHERE style_id IN (${style_ids.substring(1, style_ids.length - 1)})`).then((photos) => {
      photos.rows.forEach((photo) => {
        var style = styles.rows.find((obj) => obj.style_id === photo.style_id);
        var thumbnail_url = photo.thumbnail_url.substring(1, photo.thumbnail_url.length);
        url = photo.url.substring(1, photo.url.length);
        style.photos.push({thumbnail_url, url});
      });
      res.send({product_id: req.params.product_id, results: styles.rows});
    })
  });
})

app.get('/products/:product_id/related', (req, res) => {
  db.query(`SELECT related_product_id FROM related WHERE current_product_id=${req.params.product_id}`).then((related) => {
    res.send(related.rows.map(obj => obj.related_product_id));
  });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
