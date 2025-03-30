
export PATH := ${PATH}:${GOPATH}/bin:node_modules/.bin

.PHONY: proto
proto:
	- rm -r gen
	buf generate

.PHONY: install
install:
	go mod download
	npm install --only=dev
