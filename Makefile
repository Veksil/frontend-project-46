install:
	npm ci

test:
	npm test

run:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

lint:
	npx eslint .

lintfix:
	npx eslint --fix .

say-hello:
	echo 'Hello, World!'