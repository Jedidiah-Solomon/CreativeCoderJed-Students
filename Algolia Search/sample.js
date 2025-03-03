import { algoliasearch } from "algoliasearch";

const client = algoliasearch("KPO2L4T1AK", "4b83ed93d1e8585e868261e40ca86634");

// Fetch and index objects in Algolia
const processRecords = async () => {
  const datasetRequest = await fetch(
    "https://dashboard.algolia.com/api/1/sample_datasets?type=movie"
  );
  const movies = await datasetRequest.json();
  return await client.saveObjects({
    indexName: "movies_index",
    objects: movies,
  });
};

processRecords()
  .then(() => console.log("Successfully indexed objects!"))
  .catch((err) => console.error(err));
