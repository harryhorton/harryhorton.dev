module.exports = {
  title: "HarryHorton_dev",
  description: "A development blog by Harry Horton",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            // Unique ID of current classification
            id: "post",
            // Target directory
            dirname: "_posts",
            // Path of the `entry page` (or `list page`)
            path: "/",
            pagination: {
              lengthPerPage: 5,
            },
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ['tag', 'tags'],
            path: '/tag/',
            frontmatter: { title: 'Tag' },
          }
        ]
      },
    ],
  ],
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      blogPluginOptions.dire;
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/harryhorton",
        },
        {
          type: "twitter",
          link: "https://twitter.com/harryhorton_dev",
        },
      ],
      copyright: [
        {
          text: "Copyright © 2020-present John H Horton, llc",
          link: "",
        },
      ],
    },
  },
};
