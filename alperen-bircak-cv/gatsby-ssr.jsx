const React = require("react");
const { default: MainLayout } = require("./src/layouts/MainLayout/MainLayout");

exports.wrapPageElement = ({ element, props }) => {
  return <MainLayout {...props}>{element}</MainLayout>
} 