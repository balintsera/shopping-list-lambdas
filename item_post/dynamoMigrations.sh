#!/bin/bash

aws dynamodb create-table --table-name items --attribute-definitions AttributeName=id,AttributeType=S --key-schema AttributeName=id,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --endpoint-url http://localhost:8000

#get item: aws dynamodb get-item --table items --endpoint-url http://localhost:8000 --key '{"id": {"S": "6aac0f80-e4fd-11e8-81bf-f175ddffaef8"}}'