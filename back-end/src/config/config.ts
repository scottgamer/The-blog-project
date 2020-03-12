const { MONGODB_USER = "scottgamer", MONGODB_PASSWORD = "laparosalping123", MONGODB_DB = "blog" } = process.env;

export default {
  mongoConnectionString: `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0-shard-00-00-hwjmv.mongodb.net:27017,cluster0-shard-00-01-hwjmv.mongodb.net:27017,cluster0-shard-00-02-hwjmv.mongodb.net:27017/${MONGODB_DB}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`,
  jwtSecret: process.env.JWT_SECRET || "secret123",
  language: process.env.LANG || "en"
};
