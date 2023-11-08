/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bcwmn8pz72ah4rh",
    "created": "2023-11-08 11:36:31.498Z",
    "updated": "2023-11-08 11:36:31.498Z",
    "name": "Experience",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8mlgdkpn",
        "name": "logo_empresa",
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
      },
      {
        "system": false,
        "id": "yfekr1in",
        "name": "desc",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bcwmn8pz72ah4rh");

  return dao.deleteCollection(collection);
})
