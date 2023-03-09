import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import { schema } from "./schema";

const port = Number(process.env.PORT) || 4000;

const yoga = createYoga({
  schema: schema,
});

const server = createServer(yoga);

server.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});
