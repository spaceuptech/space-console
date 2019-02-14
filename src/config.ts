const config: any = {
  crud: {
    "sql-mysql": {
      name: "MySQL",
      desc: "The world's most popular open source database",
      imageUrl: "https://spaceuptech.com/icons/mysql.svg"
    },
    "sql-postgres": {
      name: "PostgreSQL",
      desc: "The world's most advanced open source relational database",
      imageUrl: "https://spaceuptech.com/icons/postgres.svg"
    },
    mongo: {
      name: "MongoDB",
      desc: "A open-source cross-platform document-oriented database",
      imageUrl: "https://spaceuptech.com/icons/mongodb.svg"
    }
  },
  fileStore: {
    local: {
      name: "Local File System",
      desc: "Use the local file system to store files",
      imageUrl:
        "https://st2.depositphotos.com/7954644/12458/v/950/depositphotos_124581046-stock-illustration-monitor-pc-icon-computer-screen.jpg"
    }
  }
};

export default config;
