#!/bin/bash

echo -e "zipping build\n"
zip -q --exclude=build -r build/build.zip *

echo -e "deploying to AWS Lambda\n"
aws --profile private lambda update-function-code --function-name item_create --zip-file fileb://build/build.zip --publish
