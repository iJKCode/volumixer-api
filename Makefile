
export PATH := ${PATH}:${GOPATH}/bin:node_modules/.bin

.PHONY: proto
proto:
	buf generate

.PHONY: install
install:
	go mod download
	npm install --only=dev
