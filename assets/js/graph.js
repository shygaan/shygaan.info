import JekyllGraph from './jekyll-graph.js';
class GraphNav extends JekyllGraph {
  constructor() {
    super();
    this.drawNetWeb();
  }
}
var graph = new GraphNav;
