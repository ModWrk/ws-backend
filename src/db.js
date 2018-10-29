// This file connects to the Prisma DB and allows to access it with JS

const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs:'src/generated/prisma.graphql',
    endpoint:'prisma.env.PRISMA_ENDPOINT',
    secret:'prisma.env.PRISMA_SECRET',
    debug: false,
});

module.exports = db;