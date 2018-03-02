export const TEST_SWAGGER = {
	"openapi": "3.0.0",
	"info": {
		"title": "Api Docs",
		"version": "2.0.5-beta"
	},
	"servers": [
		{
			"url": "http://localhost:10080/Virtual/master-projectus.jrh"
		}
	],
	"paths": {
		"/rest/projectus/task-resolved-repository": {
			"get": {
				"tags": [
					"projectus.task_resolved"
				],
				"summary": "Get All",
				"operationId": "1GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/task-resolved-repository/all": {
			"get": {
				"tags": [
					"projectus.task_resolved"
				],
				"summary": "Get All",
				"operationId": "2GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/task-resolved-repository/query": {
			"get": {
				"tags": [
					"projectus.task_resolved"
				],
				"summary": "Get Query",
				"operationId": "3GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/task-resolved-repository/count": {
			"get": {
				"tags": [
					"projectus.task_resolved"
				],
				"summary": "Count For Query",
				"operationId": "4GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/wall-repository": {
			"delete": {
				"tags": [
					"projectus.wall"
				],
				"operationId": "12DELETE",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/wall-repository/project/{projectIds}/task/{taskIds}/search/{searchString}": {
			"get": {
				"tags": [
					"projectus.wall"
				],
				"operationId": "6GET",
				"parameters": [
					{
						"name": "projectIds",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					},
					{
						"name": "taskIds",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					},
					{
						"name": "searchString",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/wall-repository/all": {
			"get": {
				"tags": [
					"projectus.wall"
				],
				"summary": "Get All",
				"operationId": "8GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/wall-repository/query": {
			"get": {
				"tags": [
					"projectus.wall"
				],
				"summary": "Get Query",
				"operationId": "9GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/wall-repository/count": {
			"get": {
				"tags": [
					"projectus.wall"
				],
				"summary": "Count For Query",
				"operationId": "10GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/wall-repository/{id}": {
			"put": {
				"tags": [
					"projectus.wall"
				],
				"summary": "Update",
				"operationId": "11PUT",
				"parameters": [
					{
						"name": "id",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/user-repository": {
			"get": {
				"tags": [
					"projectus.user"
				],
				"summary": "Get All",
				"operationId": "13GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/user-repository/all": {
			"get": {
				"tags": [
					"projectus.user"
				],
				"summary": "Get All",
				"operationId": "14GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/user-repository/query": {
			"get": {
				"tags": [
					"projectus.user"
				],
				"summary": "Get Query",
				"operationId": "15GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/user-repository/count": {
			"get": {
				"tags": [
					"projectus.user"
				],
				"summary": "Count For Query",
				"operationId": "16GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/label-repository": {
			"get": {
				"tags": [
					"projectus.label"
				],
				"summary": "Get All",
				"operationId": "20GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/label-repository/{id}": {
			"put": {
				"tags": [
					"projectus.label"
				],
				"summary": "Update",
				"operationId": "18PUT",
				"parameters": [
					{
						"name": "id",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/label-repository/all": {
			"get": {
				"tags": [
					"projectus.label"
				],
				"summary": "Get All",
				"operationId": "21GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/label-repository/query": {
			"get": {
				"tags": [
					"projectus.label"
				],
				"summary": "Get Query",
				"operationId": "22GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/label-repository/count": {
			"get": {
				"tags": [
					"projectus.label"
				],
				"summary": "Count For Query",
				"operationId": "23GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/project-repository": {
			"get": {
				"tags": [
					"projectus.project"
				],
				"summary": "Get All",
				"operationId": "27GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/project-repository/{id}": {
			"put": {
				"tags": [
					"projectus.project"
				],
				"summary": "Update",
				"operationId": "25PUT",
				"parameters": [
					{
						"name": "id",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/project-repository/all": {
			"get": {
				"tags": [
					"projectus.project"
				],
				"summary": "Get All",
				"operationId": "28GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/project-repository/query": {
			"get": {
				"tags": [
					"projectus.project"
				],
				"summary": "Get Query",
				"operationId": "29GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/project-repository/count": {
			"get": {
				"tags": [
					"projectus.project"
				],
				"summary": "Count For Query",
				"operationId": "30GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/process-repository": {
			"get": {
				"tags": [
					"projectus.process"
				],
				"summary": "Get All",
				"operationId": "34GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/process-repository/{id}": {
			"put": {
				"tags": [
					"projectus.process"
				],
				"summary": "Update",
				"operationId": "32PUT",
				"parameters": [
					{
						"name": "id",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/process-repository/all": {
			"get": {
				"tags": [
					"projectus.process"
				],
				"summary": "Get All",
				"operationId": "35GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/process-repository/query": {
			"get": {
				"tags": [
					"projectus.process"
				],
				"summary": "Get Query",
				"operationId": "36GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/process-repository/count": {
			"get": {
				"tags": [
					"projectus.process"
				],
				"summary": "Count For Query",
				"operationId": "37GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/role-repository": {
			"get": {
				"tags": [
					"projectus.role"
				],
				"summary": "Get All",
				"operationId": "38GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/role-repository/all": {
			"get": {
				"tags": [
					"projectus.role"
				],
				"summary": "Get All",
				"operationId": "39GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/role-repository/query": {
			"get": {
				"tags": [
					"projectus.role"
				],
				"summary": "Get Query",
				"operationId": "40GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/role-repository/count": {
			"get": {
				"tags": [
					"projectus.role"
				],
				"summary": "Count For Query",
				"operationId": "41GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/form-repository": {
			"get": {
				"tags": [
					"projectus.form"
				],
				"summary": "Get All",
				"operationId": "45GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/form-repository/{id}": {
			"put": {
				"tags": [
					"projectus.form"
				],
				"summary": "Update",
				"operationId": "43PUT",
				"parameters": [
					{
						"name": "id",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/form-repository/all": {
			"get": {
				"tags": [
					"projectus.form"
				],
				"summary": "Get All",
				"operationId": "46GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/form-repository/query": {
			"get": {
				"tags": [
					"projectus.form"
				],
				"summary": "Get Query",
				"operationId": "47GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/form-repository/count": {
			"get": {
				"tags": [
					"projectus.form"
				],
				"summary": "Count For Query",
				"operationId": "48GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/autoupdate-service": {
			"get": {
				"tags": [
					"projectus.autoupdate"
				],
				"operationId": "49GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/batch": {
			"post": {
				"tags": [
					"projectus.batch"
				],
				"operationId": "50POST",
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/acl-service": {
			"get": {
				"tags": [
					"projectus.acl"
				],
				"operationId": "51GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/process-service/next/{taskId}": {
			"post": {
				"tags": [
					"projectus.process_service"
				],
				"operationId": "52POST",
				"parameters": [
					{
						"name": "taskId",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/import-service": {
			"post": {
				"tags": [
					"projectus.import"
				],
				"operationId": "53POST",
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/plugins/step-action-service/all": {
			"get": {
				"tags": [
					"projectus.pluginsStepAction"
				],
				"operationId": "54GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/download/list/{taskId}": {
			"get": {
				"tags": [
					"projectus.file_download"
				],
				"operationId": "55GET",
				"parameters": [
					{
						"name": "taskId",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/download/{fileId}/{token}": {
			"get": {
				"tags": [
					"projectus.file_download"
				],
				"operationId": "56GET",
				"parameters": [
					{
						"name": "fileId",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					},
					{
						"name": "token",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/settings": {
			"put": {
				"tags": [
					"projectus.settings"
				],
				"operationId": "58PUT",
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/plugins/query-service/all": {
			"get": {
				"tags": [
					"projectus.pluginsQuery"
				],
				"operationId": "59GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/plugins/query-service/execute/{name}": {
			"post": {
				"tags": [
					"projectus.pluginsQuery"
				],
				"operationId": "60POST",
				"parameters": [
					{
						"name": "name",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/file-upload-service/task/{taskId}/tags/{userTags}": {
			"post": {
				"tags": [
					"projectus.file_upload"
				],
				"operationId": "61POST",
				"parameters": [
					{
						"name": "taskId",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					},
					{
						"name": "userTags",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/plugins/form-handler-service/all": {
			"get": {
				"tags": [
					"projectus.pluginsFormHandler"
				],
				"operationId": "62GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/form-service/form/{formId}/task/{taskId}": {
			"post": {
				"tags": [
					"projectus.form_service"
				],
				"operationId": "63POST",
				"parameters": [
					{
						"name": "formId",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					},
					{
						"name": "taskId",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/task-repository": {
			"get": {
				"tags": [
					"projectus.task"
				],
				"summary": "Get All",
				"operationId": "68GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/task-repository/{id}": {
			"put": {
				"tags": [
					"projectus.task"
				],
				"summary": "Update",
				"operationId": "65PUT",
				"parameters": [
					{
						"name": "id",
						"in": "path",
						"required": true,
						"schema": {
							"type": "integer",
							"format": "int32"
						}
					}
				],
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/task-repository/query-request": {
			"post": {
				"tags": [
					"projectus.task"
				],
				"summary": "Custom Query",
				"operationId": "67POST",
				"requestBody": {
					"description": "Request body description",
					"content": {
						"application/json": {
							"schema": {
								"type": "object"
							}
						}
					},
					"required": true
				},
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/task-repository/all": {
			"get": {
				"tags": [
					"projectus.task"
				],
				"summary": "Get All",
				"operationId": "69GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/task-repository/query": {
			"get": {
				"tags": [
					"projectus.task"
				],
				"summary": "Get Query",
				"operationId": "70GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		},
		"/rest/projectus/task-repository/count": {
			"get": {
				"tags": [
					"projectus.task"
				],
				"summary": "Count For Query",
				"operationId": "71GET",
				"responses": {
					"default": {
						"description": "Response description",
						"content": {
							"application/json": {
								"schema": {
									"type": "object"
								}
							}
						}
					}
				}
			}
		}
	},
	"tags": [
		{
			"name": "projectus.task_resolved",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskResolvedController"
		},
		{
			"name": "projectus.task_resolved",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskResolvedController"
		},
		{
			"name": "projectus.task_resolved",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskResolvedController"
		},
		{
			"name": "projectus.task_resolved",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskResolvedController"
		},
		{
			"name": "projectus.wall",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\WallController"
		},
		{
			"name": "projectus.wall",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\WallController"
		},
		{
			"name": "projectus.wall",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\WallController"
		},
		{
			"name": "projectus.wall",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\WallController"
		},
		{
			"name": "projectus.wall",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\WallController"
		},
		{
			"name": "projectus.wall",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\WallController"
		},
		{
			"name": "projectus.wall",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\WallController"
		},
		{
			"name": "projectus.wall",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\WallController"
		},
		{
			"name": "projectus.user",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\UserController"
		},
		{
			"name": "projectus.user",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\UserController"
		},
		{
			"name": "projectus.user",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\UserController"
		},
		{
			"name": "projectus.user",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\UserController"
		},
		{
			"name": "projectus.label",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\LabelController"
		},
		{
			"name": "projectus.label",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\LabelController"
		},
		{
			"name": "projectus.label",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\LabelController"
		},
		{
			"name": "projectus.label",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\LabelController"
		},
		{
			"name": "projectus.label",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\LabelController"
		},
		{
			"name": "projectus.label",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\LabelController"
		},
		{
			"name": "projectus.label",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\LabelController"
		},
		{
			"name": "projectus.project",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProjectController"
		},
		{
			"name": "projectus.project",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProjectController"
		},
		{
			"name": "projectus.project",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProjectController"
		},
		{
			"name": "projectus.project",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProjectController"
		},
		{
			"name": "projectus.project",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProjectController"
		},
		{
			"name": "projectus.project",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProjectController"
		},
		{
			"name": "projectus.project",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProjectController"
		},
		{
			"name": "projectus.process",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProcessController"
		},
		{
			"name": "projectus.process",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProcessController"
		},
		{
			"name": "projectus.process",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProcessController"
		},
		{
			"name": "projectus.process",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProcessController"
		},
		{
			"name": "projectus.process",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProcessController"
		},
		{
			"name": "projectus.process",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProcessController"
		},
		{
			"name": "projectus.process",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\ProcessController"
		},
		{
			"name": "projectus.role",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\RoleController"
		},
		{
			"name": "projectus.role",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\RoleController"
		},
		{
			"name": "projectus.role",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\RoleController"
		},
		{
			"name": "projectus.role",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\RoleController"
		},
		{
			"name": "projectus.form",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\FormController"
		},
		{
			"name": "projectus.form",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\FormController"
		},
		{
			"name": "projectus.form",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\FormController"
		},
		{
			"name": "projectus.form",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\FormController"
		},
		{
			"name": "projectus.form",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\FormController"
		},
		{
			"name": "projectus.form",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\FormController"
		},
		{
			"name": "projectus.form",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\FormController"
		},
		{
			"name": "projectus.autoupdate",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\AutoupdateController"
		},
		{
			"name": "projectus.batch",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\BatchController"
		},
		{
			"name": "projectus.acl",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\AclController"
		},
		{
			"name": "projectus.process_service",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\ProcessController"
		},
		{
			"name": "projectus.import",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\ImportController"
		},
		{
			"name": "projectus.pluginsStepAction",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\StepActionController"
		},
		{
			"name": "projectus.file_download",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\FileDownloadController"
		},
		{
			"name": "projectus.file_download",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\FileDownloadController"
		},
		{
			"name": "projectus.settings",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\SettingsController"
		},
		{
			"name": "projectus.settings",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\SettingsController"
		},
		{
			"name": "projectus.pluginsQuery",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\QueryController"
		},
		{
			"name": "projectus.pluginsQuery",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\QueryController"
		},
		{
			"name": "projectus.file_upload",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\FileUploadController"
		},
		{
			"name": "projectus.pluginsFormHandler",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\FormHandlerController"
		},
		{
			"name": "projectus.form_service",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Service\\FormServiceController"
		},
		{
			"name": "projectus.task",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskController"
		},
		{
			"name": "projectus.task",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskController"
		},
		{
			"name": "projectus.task",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskController"
		},
		{
			"name": "projectus.task",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskController"
		},
		{
			"name": "projectus.task",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskController"
		},
		{
			"name": "projectus.task",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskController"
		},
		{
			"name": "projectus.task",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskController"
		},
		{
			"name": "projectus.task",
			"description": "Tlapnet\\ProjectusModule\\Controller\\Crud\\TaskController"
		}
	]
};