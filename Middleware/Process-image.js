app.post('/expenses', upload.single('receipt'), async (req, res) => {
  const Tesseract = require('tesseract.js');
  const filePath = req.file.path;

  Tesseract.recognize(filePath, 'eng')
    .then(({ data: { text } }) => {
      console.log('Extracted Text:', text);
      // Save expense details to the database
      res.send('Expense saved with receipt text!');
    })
    .catch((err) => console.error(err));
});