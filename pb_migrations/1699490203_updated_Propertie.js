/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("myrbcztzk012ch4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5iwvshax",
    "name": "estado",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("myrbcztzk012ch4")

  // remove
  collection.schema.removeField("5iwvshax")

  return dao.saveCollection(collection)
})
