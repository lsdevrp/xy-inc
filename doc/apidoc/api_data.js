define({ "api": [
  {
    "type": "post",
    "url": "/products",
    "title": "Add",
    "name": "Add",
    "group": "Products",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"test\",\n  \"description\": \"test\",\n  \"price\": 10.5,\n  \"category\": \"test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created  \n{\n   \"_id\": \"58eac59c2ff4211ee495fc6a\",\n   \"name\": \"test\",\n   \"description\": \"test\",\n   \"price\": 10.5,\n   \"category\": \"test\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/product/index.js",
    "groupTitle": "Products"
  },
  {
    "type": "delete",
    "url": "/products/:id",
    "title": "Delete",
    "name": "Delete",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-NotFound:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/product/index.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Get All",
    "name": "GetAll",
    "group": "Products",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK  \n[{\n   \"_id\": \"58eac59c2ff4211ee495fc6a\",\n   \"name\": \"test\",\n   \"description\": \"test\",\n   \"price\": 10.5,\n   \"category\": \"test\",\n   \"__v\": 0\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/product/index.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Get by Id",
    "name": "GetById",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK  \n{\n   \"_id\": \"58eac59c2ff4211ee495fc6a\",\n   \"name\": \"test\",\n   \"description\": \"test\",\n   \"price\": 10.5,\n   \"category\": \"test\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-NotFound:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/product/index.js",
    "groupTitle": "Products"
  },
  {
    "type": "put",
    "url": "/products/:id",
    "title": "Update",
    "name": "Update",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"test\",\n  \"description\": \"test\",\n  \"price\": 10.5,\n  \"category\": \"test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK  \n{\n   \"_id\": \"58eac59c2ff4211ee495fc6a\",\n   \"name\": \"test\",\n   \"description\": \"test\",\n   \"price\": 10.5,\n   \"category\": \"test\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-NotFound:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/product/index.js",
    "groupTitle": "Products"
  }
] });
