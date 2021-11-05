import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "p4q6t2bs", 
  dataset: "production", 
  apiVersion: '2021-08-31',
  useCdn: true,
});