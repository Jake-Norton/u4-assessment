const express = require('express'),
      itemsCtrl = require('./controllers/itemsCtrl'),
      listCtrl = require('./controllers/listCtrl'),
      port = 4444,
      app = express();

app.use(express.json());

app.get('/api/available-items', itemsCtrl.getItems);

app.get('/api/chosen-items', listCtrl.getChosenItem);
app.post('/api/chosen-items', listCtrl.chooseItem);
app.delete('/api/chosen-items/:id', listCtrl.cancelItem);

app.listen(port, () => console.log(`Server is running on ${port}`));