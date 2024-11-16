class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(
      (v) =>
        (this.adjacencyList[v] = this.adjacencyList[v].filter(
          (ver) => ver !== vertex
        ))
    );
    delete this.adjacencyList[vertex];
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
}

const graph = new Graph();

// graph.addVertex("Tokyo");
graph.addEdge("Tokyo", "Thai");
graph.addEdge("Thai", "Myanmar");
graph.addEdge("Manila", "Thai");
graph.addEdge("Singapore", "Tokyo");

graph.removeVertex("Thai");

console.log(graph);
