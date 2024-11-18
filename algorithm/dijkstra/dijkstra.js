class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, end) {
    const priorityQueue = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallestVertexName;

    // build up initial state (use for in to get key from obj)
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    while (priorityQueue.values.length) {
      smallestVertexName = priorityQueue.dequeue().val;

      if (smallestVertexName === end) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallestVertexName]) {
          path.push(smallestVertexName);
          smallestVertexName = previous[smallestVertexName];
        }
        break;
      }

      if (smallestVertexName || distances[smallestVertexName] !== Infinity) {
        // use for in loop to get index from the neighbor array
        for (let neighborIdx in this.adjacencyList[smallestVertexName]) {
          //find neighboring vertex
          const neighbor = this.adjacencyList[smallestVertexName][neighborIdx];
          const neighborName = neighbor.node;

          //calculate new distance to neighboring vertex
          const candidateWeight =
            distances[smallestVertexName] + neighbor.weight;

          // first time value is (number < Infinity)
          if (candidateWeight < distances[neighborName]) {
            //updating new smallest distance to neighbor
            distances[neighborName] = candidateWeight;
            //updating previous - How we got to neighbor
            previous[neighborName] = smallestVertexName;
            //enqueue in priority queue with new priority
            priorityQueue.enqueue(neighborName, candidateWeight);
          }
        }
      }
    }
    return path.concat(smallestVertexName).reverse();
  }

  DijkstraOrigin(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);

graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// console.log(graph);

// console.log(graph.DijkstraOrigin("A", "E"));
console.log(graph.Dijkstra("A", "E"));
// console.log(graph);

// ["A", "C", "D", "F", "E"]
