# AlgoVisuals

> **Interactive algorithm visualizer and simulator for learning data structures, algorithms, and operating-system concepts.**

[![Live application](https://img.shields.io/badge/Live%20application-algovisuals--samuel.vercel.app-c9a227?style=for-the-badge)](https://algovisuals-samuel.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![License](https://img.shields.io/badge/license-private-lightgrey?style=flat-square)](./package.json)

**[Open AlgoVisuals](https://algovisuals-sami.vercel.app/)**

AlgoVisuals turns algorithm theory into an interactive visual laboratory. Select an algorithm, customize its data, and play through a deterministic execution trace one step at a time. The interface includes live metrics, narration, algorithm theory, keyboard controls, and side-by-side comparisons.

## Highlights

- Step, play, pause, reset, and scrub through algorithm execution.
- Customize datasets and observe how input changes affect the trace.
- Compare algorithms across categories with consistent metrics.
- Read theory, principles, and pseudocode without leaving the workbench.
- Responsive interface with light and dark visual themes.
- No backend or account required: simulations run in the browser.

## Algorithm library

### Operating systems

- **Memory allocation:** First Fit, Best Fit, Worst Fit, and Next Fit.
- **CPU scheduling:** Round Robin, FCFS, SJF, and Priority Scheduling.
- **Page replacement:** LRU, FIFO, and Optimal (Belady's algorithm).

### Graphs and pathfinding

- BFS and DFS traversal.
- Dijkstra's shortest path and A* with Manhattan distance.
- Floyd-Warshall all-pairs shortest paths.
- Kruskal's and Prim's minimum spanning trees.
- Topological sort.
- Disjoint Set Union (Union-Find) with path compression and rank heuristics.

### Sorting and searching

- Quick Sort.
- Merge Sort.
- Bubble Sort.
- Binary Search.

### Dynamic programming

- 0/1 Knapsack.
- Longest Common Subsequence (LCS).
- Kadane's maximum subarray algorithm.

### Array and string techniques

- Sliding Window.
- Two Pointers.
- Knuth-Morris-Pratt (KMP) pattern matching.
- Euclidean algorithm for GCD.

### Backtracking and greedy algorithms

- N-Queens.
- Activity Selection.

## Getting started

### Requirements

- Node.js 18 or newer.
- npm 9 or newer.
- A modern browser with JavaScript enabled.

### Install and run locally

```bash
git clone https://github.com/Sami7ma/redesigned-potato.git
cd redesigned-potato
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/`.

### Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Controls

| Control | Action |
| --- | --- |
| Play / Pause | Start or stop the current simulation |
| Previous / Next step | Move through the execution trace |
| Reset | Restore the selected algorithm and dataset |
| Speed control | Change playback speed |
| Theory Guide | Open algorithm explanations and pseudocode |
| Compare All | Open the comparison workspace |
| `Space` | Play or pause |
| `Left Arrow` / `Right Arrow` | Previous or next step |
| `R` | Reset the simulation |
| `C` | Open the comparison workspace |
| `Esc` | Close the active modal |

## Project structure

```text
.
├── public/
│   ├── assets/          # Logos, social preview assets, and illustrations
│   ├── robots.txt       # Crawler policy and sitemap location
│   ├── sitemap.xml      # Canonical production URL
│   └── favicon.png
├── src/
│   ├── algorithms/      # Deterministic trace generators
│   ├── components/      # Visualizers, controls, modals, and shared UI
│   ├── types/           # Algorithm registry and default datasets
│   ├── App.jsx          # Application state and simulation orchestration
│   ├── index.css        # Design system and responsive layout
│   └── main.jsx         # React entry point
├── index.html           # Metadata, structured data, and application root
└── package.json
```

## Architecture

Each algorithm produces a deterministic sequence of simulation states. `App.jsx` owns the selected category, algorithm, dataset, playback state, and theme. Visualizer components receive the active trace and render the appropriate state representation.

This separation keeps algorithm logic independent from presentation:

1. A user selects an algorithm and dataset.
2. The matching trace generator computes the execution states.
3. Playback controls select the active state.
4. The visualizer, metrics panel, and narrator render that state.

## SEO and deployment

The production deployment is:

**https://algovisuals-samuel.vercel.app/**

The project includes:

- Canonical URL and English alternate metadata.
- Open Graph and Twitter preview metadata.
- JSON-LD structured data for an educational web application.
- A crawlable `robots.txt`.
- A production `sitemap.xml`.
- Semantic fallback content in `index.html` for non-JavaScript crawlers.

When changing the deployment domain, update the URL in `index.html`, `public/robots.txt`, `public/sitemap.xml`, and this README together.

## Contributing

1. Create a feature branch.
2. Keep algorithm logic in `src/algorithms/`.
3. Add or update registry entries and default data in `src/types/data.js`.
4. Keep visual rendering inside the relevant component.
5. Run `npm run build` before opening a pull request.
6. Describe user-visible behavior and validation steps in the pull request.

## License

This repository is maintained as a private project. Contact the project owner before redistributing or using the code outside its intended deployment.
