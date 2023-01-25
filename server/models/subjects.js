const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLEnumType,
  globalIdField,
  connectionDefinitions,
  connectionArgs,
} = require('graphql');

const { getSubjects } = require('../graphql/resolvers/subjects'); // your data access functions

const SubjectType = new GraphQLObjectType({
  name: 'Subject',
  fields: {
    id: globalIdField(),
    name: { type: GraphQLString },
  },
});

const QueryType = new GraphQLObjectType({
  name: 'getSubjects',
  fields: () => ({
    subjects: {
      type: SubjectsConnection,
      args: {
        ...connectionArgs,
        name: { type: GraphQLString },
      },
      resolve: (_, args) => {
        const { name, ...rest } = args;
        const filter = {};
        if (name) filter.name = name;
        return getSubjects({ ...filter, ...rest });
      },
    },
  }),
});

const { connectionType: SubjectsConnection } = connectionDefinitions({
  nodeType: SubjectType,
  connectionFields: {
    totalCount: {
      type: GraphQLInt,
      resolve: conn => conn.totalCount,
    },
  },
});
