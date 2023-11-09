/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("myrbcztzk012ch4")

  // remove
  collection.schema.removeField("xxnju49j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "09kdjzbo",
    "name": "endereco",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "impbzjdt",
    "name": "bairro",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hdoskisw",
    "name": "cidade",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wnurhey4",
    "name": "field",
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
    "id": "xxnju49j",
    "name": "endereco",
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

  // remove
  collection.schema.removeField("09kdjzbo")

  // remove
  collection.schema.removeField("impbzjdt")

  // remove
  collection.schema.removeField("hdoskisw")

  // remove
  collection.schema.removeField("wnurhey4")

  return dao.saveCollection(collection)
})
