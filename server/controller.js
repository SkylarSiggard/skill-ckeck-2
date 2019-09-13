module.exports = {
  getAll: (req, res) => {
      const db = req.app.get('db')
      db.get_all().then(result => {
        //   console.log(result)
          res.status(200).send(result)
      })
      .catch(err => {
          console.log(err)
      })
  }, 
  getOne: async (req, res) => {
      const db = req.app.get('db')
      const {id} = req.params
      const result = await db.get_one([id])
    //   console.log(result)
  },
  addItem: (req, res) => {
      const db = req.app.get('db')
      const {img_url, name_item, price_item} = req.body
      db.add_item({img_url, name_item, price_item}).then(result => {
        //   console.log(result)
          res.status(200).send(result)
      })
  }, 
  updateItem: (req, res) => {
      const db = req.app.get('db')
      const {add_name} = req.body
      const {id} = req.params
      db.update_item([item_name, id]).then(result => {
          res.status(200).send(result)
      })
  },
  deleteOne: (req, res) => {
      const db = req.app.get('db')
      const {id} = req.params
      db.delete_item([id]).then(result => {
          res.status(200).send(result)
      })
  }
}