/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// By default, Docusaurus generates a sidebar from the docs folder structure
// tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
// @see https://docusaurus.io/docs/sidebar#sidebar-item-category
module.exports = {
    community: [
        { type: "autogenerated", dirName: "." },
        { type: "link", href: "/examples", label: "Examples" },
        // eslint-disable-next-line prettier/prettier
        { type: "link", href: "https://github.com/feature-sliced/awesome", label: "Awesome Resources" },
        {
            type: "link",
            label: "Telegram chat (Q&A)",
            href: "https://t.me/feature_sliced",
        },
    ],
};
