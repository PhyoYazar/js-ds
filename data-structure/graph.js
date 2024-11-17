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

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      console.log(vertex);

      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [];
    const result = [];
    const visited = {};

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      console.log(stack);
      const vertex = stack.pop();
      result.push(vertex);

      // this.adjacencyList[vertex].forEach((neighbor) => {
      //   if (!visited[neighbor]) {
      //     visited[neighbor] = true;
      //     stack.push(neighbor);
      //   }
      // });

      const neighbors = this.adjacencyList[vertex];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        if (!visited[neighbors[i]]) {
          visited[neighbors[i]] = true;
          stack.push(neighbors[i]);
        }
      }
    }

    return result;
  }

  breathFirst(start) {
    if (!this.adjacencyList[start]) return undefined;

    const result = [];
    const visited = {};
    const queue = [start];
    visited[start] = true;

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();

// graph.addVertex("Tokyo");
// graph.addEdge("Tokyo", "Thai");
// graph.addEdge("Thai", "Myanmar");
// graph.addEdge("Manila", "Thai");
// graph.addEdge("Singapore", "Tokyo");

// graph.removeVertex("Thai");

// console.log(graph);

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph);
// console.log(graph.depthFirstRecursive("A"));
console.log(graph.depthFirstIterative("A"));
// console.log(graph.breathFirst("A"));
