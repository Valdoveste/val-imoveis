/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("myrbcztzk012ch4")

  // remove
  collection.schema.removeField("obfvys80")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kkqls4ll",
    "name": "cep",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "obfvys80",
    "name": "cep",
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

  // remove
  collection.schema.removeField("kkqls4ll")

  return dao.saveCollection(collection)
})