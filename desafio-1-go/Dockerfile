FROM golang:1.22.2-alpine AS builder

WORKDIR /usr/src/app

COPY go.mod ./
RUN go mod download && go mod verify

COPY . .
RUN go build -ldflags "-s -w"

FROM scratch

WORKDIR /app/

COPY --from=builder /usr/src/app/fullcycle /app/

ENTRYPOINT ["/app/fullcycle"]
