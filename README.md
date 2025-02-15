# Reoserv.net documentation home

This website hosts the documentation for the [reoserv][reoserv] project
(authored and maintained by [Richard Leek][sorokya])

## Prerequisites

Before you can run this project, you need to have the following installed on
your machine:

- [Node.js][node] v22+ (for local development with the React Router v7 web framework)
- [Bun][bun] v1.1.42+ (a modern package manager & script runner for Node.js
  projects)

Verify that both are setup on your system and meet our version requirements by
running:

```sh
bun --version    # eg: 1.1.42
node --version   # eg: v22.12.0
```

## Installation

To install dependencies, run:

```sh
bun install
```

## Local development

To start the React Router dev server, run:

```sh
bun run dev
```

This starts the dev server on the port 3030 - visit http://localhost:3030 in
your web browser to see the website up and running!

## Building for production

To build the project, run:

```sh
bun run build
```

## Deployment

Deploy the output of `bun run build`

```
├── package.json
├── bun.lockb
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

Serve in production with:

```
bun run start
```

## Linting / Formatting

To format, lint and apply fixes at the same time, use:

```sh
bun run lint
```

To format markdown files (docs, news), use:

```sh
bun run lint:docs
```

---

Built with ❤️ using React Router.

[reoserv]: https://github.com/sorokya/reoserv
[sorokya]: https://github.com/sorokya
[node]: https://nodejs.org/
[bun]: https://bun.sh/
[reoserv.net]: https://github.com/sorokya/reoserv.net
[biome]: https://marketplace.visualstudio.com/items?itemName=biomejs.biome
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
