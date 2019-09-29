module.exports = {
    getAll: async (req, res) => {
        const db = req.app.get('db')
        const list = await db.get_all()
            res.status(200).send(list)
    }, 
    getOne: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const result = await db.get_one([+id])
    //   console.log(result)
    },
    addItem: async (req, res) => {
        const db = req.app.get('db')
        const {img_url, name_item, price_item} = req.body
        const list = await db.add_item({img_url, name_item, price_item})
            res.status(200).send(list)
    }, 
    updateItem: async (req, res) => {
        const db = req.app.get('db')
        const {name_item} = req.body
        const {item_id} = req.params
        db.update_item([name_item, item_id]).then(result => {
            res.status(200).send(result)
        })
    },
    deleteOne: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_item([+id]).then(result => {
            res.status(200).send(result)
        })
    }
}