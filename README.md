# Farcaster Frames Template

[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/nekofar/farcaster-frames-template?include_prereleases)](https://github.com/nekofar/farcaster-frames-template/releases)
[![GitHub](https://img.shields.io/github/license/nekofar/farcaster-frames-template)](https://github.com/nekofar/farcaster-frames-template/blob/master/LICENSE)
[![X (formerly Twitter) Follow](https://img.shields.io/badge/follow-%40nekofar-ffffff?logo=x&style=flat)](https://x.com/nekofar)
[![Farcaster (Warpcast) Follow](https://img.shields.io/badge/follow-%40nekofar-855DCD.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzIzIiBoZWlnaHQ9IjI5NyIgdmlld0JveD0iMCAwIDMyMyAyOTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01NS41ODY3IDAuNzMzMzM3SDI2My40MTNWMjk2LjI2N0gyMzIuOTA3VjE2MC44OTNIMjMyLjYwN0MyMjkuMjM2IDEyMy40NzkgMTk3Ljc5MiA5NC4xNiAxNTkuNSA5NC4xNkMxMjEuMjA4IDk0LjE2IDg5Ljc2NDIgMTIzLjQ3OSA4Ni4zOTI2IDE2MC44OTNIODYuMDkzM1YyOTYuMjY3SDU1LjU4NjdWMC43MzMzMzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMC4yOTMzMzUgNDIuNjhMMTIuNjg2NyA4NC42MjY3SDIzLjE3MzNWMjU0LjMyQzE3LjkwODIgMjU0LjMyIDEzLjY0IDI1OC41ODggMTMuNjQgMjYzLjg1M1YyNzUuMjkzSDExLjczMzNDNi40NjgyMiAyNzUuMjkzIDIuMiAyNzkuNTYyIDIuMiAyODQuODI3VjI5Ni4yNjdIMTA4Ljk3M1YyODQuODI3QzEwOC45NzMgMjc5LjU2MiAxMDQuNzA1IDI3NS4yOTMgOTkuNDQgMjc1LjI5M0g5Ny41MzMzVjI2My44NTNDOTcuNTMzMyAyNTguNTg4IDkzLjI2NTEgMjU0LjMyIDg4IDI1NC4zMkg3Ni41NlY0Mi42OEgwLjI5MzMzNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMzQuODEzIDI1NC4zMkMyMjkuNTQ4IDI1NC4zMiAyMjUuMjggMjU4LjU4OCAyMjUuMjggMjYzLjg1M1YyNzUuMjkzSDIyMy4zNzNDMjE4LjEwOCAyNzUuMjkzIDIxMy44NCAyNzkuNTYyIDIxMy44NCAyODQuODI3VjI5Ni4yNjdIMzIwLjYxM1YyODQuODI3QzMyMC42MTMgMjc5LjU2MiAzMTYuMzQ1IDI3NS4yOTMgMzExLjA4IDI3NS4yOTNIMzA5LjE3M1YyNjMuODUzQzMwOS4xNzMgMjU4LjU4OCAzMDQuOTA1IDI1NC4zMiAyOTkuNjQgMjU0LjMyVjg0LjYyNjdIMzEwLjEyN0wzMjIuNTIgNDIuNjhIMjQ2LjI1M1YyNTQuMzJIMjM0LjgxM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=&style=flat)](https://warpcast.com/nekofar)
[![Donate](https://img.shields.io/badge/donate-nekofar.crypto-a2b9bc?logo=ko-fi&logoColor=white)](https://ud.me/nekofar.crypto)

Farcaster Frames Template is an easy-to-use template designed for beginners and experienced developers alike. It
provides a robust starting point for building Farcaster Frames, streamlining the development process. This template is
ideal for those looking to create custom frames quickly and efficiently.

## Getting Started

### Prerequisites

- Node.js (Version 18 or later)
- A text editor like VSCode
- Basic understanding of TypeScript and Node.js

### Use Template

You can use this repository as a template to create a new GitHub repository with the same directory structure and files.
Here's how:

1. On the [repository page](https://github.com/nekofar/farcaster-frames-template), click the **Use this template**
   button.
2. Choose the owner of the new repository and enter a repository name.
3. Optionally, add a description for your repository.
4. Choose the repository visibility (Public or Private).
5. Click **Create repository** to create your new repository from template.

After creating your repository from this template, clone it and install the dependencies.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourname/farcaster-frames-template.git
   ```
2. Navigate to the project directory:
   ```bash
   cd farcaster-frames-template
   ```
3. Install the dependencies:
   ```bash
   pnpm install
   ```
4. Start the development server:
   ```bash
   pnpm run dev
   ```

### Usage Guide

The template uses [Localtunnel](https://github.com/localtunnel/localtunnel) which allows you to easily test your frames
without the need to deploy them. Everytime running your project, you will receive a random URL, for
example `https://thirty-glasses-tell.loca.lt`. You can directly copy this URL and test your frame using
the [Warpcast Embed Tools](https://warpcast.com/~/developers/embeds). This makes the
development and testing process much more efficient and straightforward.

For detailed information on working with Farcaster Frames, refer to
the [Farcaster Frames documentation](https://docs.farcaster.xyz/learn/what-is-farcaster/frames).
Additionally, to learn more about Hono, visit the [Hono documentation](https://hono.dev/top).

## Contributing

Contributions are what make the open source community such a fantastic place to learn, inspire, and create. Any
contributions you make are **greatly appreciated**
