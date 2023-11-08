/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bcwmn8pz72ah4rh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "thlmgsle",
    "name": "titulo",
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
  const collection = dao.findCollectionByNameOrId("bcwmn8pz72ah4rh")

  // remove
  collection.schema.removeField("thlmgsle")

  return dao.saveCollection(collection)
})
