import { useStaticQuery, graphql } from "gatsby";

const useSitePluginOptions = () => {
  const { sitePlugin } = useStaticQuery(
    graphql`
      query TrustPilot {
        sitePlugin(
          name: { eq: "@dadoagency/gatsby-plugin-trustpilot-widget" }
        ) {
          pluginOptions
        }
      }
    `
  );

  return { ...sitePlugin.pluginOptions };
};
export default useSitePluginOptions;
