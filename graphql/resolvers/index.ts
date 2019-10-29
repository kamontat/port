import { Dataset } from "../api/data/dataset";

const dataset = new Dataset();
dataset.loadAll();

export default {
  Query: {
    information: (_root, args) => dataset.graphql(args.lang),
  },
};
