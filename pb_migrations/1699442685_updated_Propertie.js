/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("myrbcztzk012ch4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a2g8bwqd",
    "name": "dormitorio",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "haypbgzk",
    "name": "banheiro",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("myrbcztzk012ch4")

  // remove
  collection.schema.removeField("a2g8bwqd")

  // remove
  collection.schema.removeField("haypbgzk")

  return dao.saveCollection(collection)
})
