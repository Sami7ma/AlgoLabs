const ALGORITHM_COLORS = {
  'first-fit': '#2563eb',
  'best-fit': '#0891b2',
  'worst-fit': '#7c3aed',
  'next-fit': '#4f46e5',
  'round-robin': '#0f766e',
  'fcfs-cpu': '#0369a1',
  'sjf-cpu': '#4338ca',
  'priority-cpu': '#be123c',
  lru: '#0f766e',
  'fifo-paging': '#2563eb',
  'optimal-paging': '#7c3aed',
  bfs: '#2563eb',
  dfs: '#4f46e5',
  dijkstra: '#0891b2',
  'a-star': '#0f766e',
  'floyd-warshall': '#4338ca',
  kruskal: '#0369a1',
  prim: '#0f766e',
  'topological-sort': '#7c3aed',
  'union-find': '#be123c',
  quicksort: '#2563eb',
  mergesort: '#0891b2',
  bubblesort: '#4f46e5',
  'binary-search': '#0369a1',
  'knapsack-dp': '#4338ca',
  'lcs-dp': '#0f766e',
  kadanes: '#be123c',
  'sliding-window': '#0891b2',
  'two-pointers': '#2563eb',
  'kmp-string': '#7c3aed',
  'euclidean-gcd': '#0369a1',
  'n-queens': '#be123c',
  'activity-selection': '#0f766e'
};

export function getAlgorithmColor(algorithmId) {
  return ALGORITHM_COLORS[algorithmId] || '#2563eb';
}
