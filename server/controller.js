module.exports = {
  getAll: (req, res) => {
      const db = req.app.get('db')
      db.get_all().then(result => {
          console.log(result)
          res.status(200).send(result)
      })
      .catch(err => {
          console.log(err)
      })
  }
}