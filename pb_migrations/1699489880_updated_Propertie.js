/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("myrbcztzk012ch4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izvs4crg",
    "name": "foto_principal",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ulggn2wg",
    "name": "fotos",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("myrbcztzk012ch4")

  // remove
  collection.schema.removeField("izvs4crg")

  // remove
  collection.schema.removeField("ulggn2wg")

  return dao.saveCollection(collection)
})
