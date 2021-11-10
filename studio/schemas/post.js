export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) =>
        Rule.max(75).warning(`A title shouldn't be more than 75 characters.`),
    },

    {
      name: "readTime",
      type: "number",
      title: "Read Time",
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "image",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
