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
          console.log(result)
          res.status(200).send(result)
      })
      .catch(err => {
        console.log(err)
    })
  }, 
  updateItem: (req, res) => {
      const db = req.app.get('db')
      const {item_name} = req.body
      const {item_id} = req.params
      db.update_item([item_name, item_id]).then(result => {
          res.status(200).send(result)
      })
  },
  deleteOne: (req, res) => {
      const db = req.app.get('db')
      const {item_id} = req.params
      db.delete_item([item_id]).then(result => {
          res.status(200).send(result)
      })
  }
}