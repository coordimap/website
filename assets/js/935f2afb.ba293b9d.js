"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Tutorial Intro","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction"},{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Kubernetes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Kubernetes Installation","href":"/docs/install/kubernetes/kubernetes-install","docId":"install/kubernetes/install-kubernetes"},{"type":"link","label":"Kubernetes YAML file","href":"/docs/install/kubernetes/kubernetes-yaml","docId":"install/kubernetes/install-kubernetes-yaml"}]},{"type":"link","label":"Binaries","href":"/docs/install/binaries","docId":"install/install-binaries"},{"type":"link","label":"Docker","href":"/docs/install/docker","docId":"install/install-docker"}]},{"type":"category","label":"Tutorial - Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create a Page","href":"/docs/tutorial-basics/create-a-page","docId":"tutorial-basics/create-a-page"},{"type":"link","label":"Create a Document","href":"/docs/tutorial-basics/create-a-document","docId":"tutorial-basics/create-a-document"},{"type":"link","label":"Create a Blog Post","href":"/docs/tutorial-basics/create-a-blog-post","docId":"tutorial-basics/create-a-blog-post"},{"type":"link","label":"Markdown Features","href":"/docs/tutorial-basics/markdown-features","docId":"tutorial-basics/markdown-features"},{"type":"link","label":"Deploy your site","href":"/docs/tutorial-basics/deploy-your-site","docId":"tutorial-basics/deploy-your-site"},{"type":"link","label":"Congratulations!","href":"/docs/tutorial-basics/congratulations","docId":"tutorial-basics/congratulations"}]},{"type":"category","label":"Configuration","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"AWS","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"AWS Configuration","href":"/docs/config/aws/aws-config","docId":"config/aws/aws-configuration"},{"type":"link","label":"AWS Configuration ReadOnly User","href":"/docs/config/aws/aws-readonly-user","docId":"config/aws/aws-readonly-user"}]},{"type":"category","label":"AWS FlowLogs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"AWS FlowLogs Configuration","href":"/docs/config/aws-flowlogs/aws-flowlogs-config","docId":"config/aws-flowlogs/aws-flowlogs-configuration"},{"type":"link","label":"Set-Up AWS FlowLogs to S3","href":"/docs/config/aws-flowlogs/aws-flowlogs-to-s3","docId":"config/aws-flowlogs/aws-flowlogs-to-s3"}]},{"type":"link","label":"Configuration Introduction","href":"/docs/config/config-intro","docId":"config/configuration-introduction"},{"type":"link","label":"Kubernetes","href":"/docs/config/kubernetes/kubernetes","docId":"config/kubernetes/kubernetes-configuration"},{"type":"category","label":"PostgreSQL","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"PostgreSQL Configuration","href":"/docs/config/postgre/postgresql","docId":"config/postgre/postgresql-configuration"},{"type":"link","label":"PostgreSQL Read Only User","href":"/docs/config/postgre/postgresql-readonly-user","docId":"config/postgre/postgresql-configuration-readonly-user"}]},{"type":"link","label":"Shared Configuration Options","href":"/docs/config/shared-config-options","docId":"config/shared-configuration-options"}]},{"type":"category","label":"Tutorial - Extras","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Manage Docs Versions","href":"/docs/tutorial-extras/manage-docs-versions","docId":"tutorial-extras/manage-docs-versions"},{"type":"link","label":"Translate your site","href":"/docs/tutorial-extras/translate-your-site","docId":"tutorial-extras/translate-your-site"}]}]},"docs":{"config/aws-flowlogs/aws-flowlogs-configuration":{"id":"config/aws-flowlogs/aws-flowlogs-configuration","title":"AWS FlowLogs Configuration","description":"This page explains the configuration steps needed for the successful crawling of an AWS account.","sidebar":"tutorialSidebar"},"config/aws-flowlogs/aws-flowlogs-to-s3":{"id":"config/aws-flowlogs/aws-flowlogs-to-s3","title":"Set-Up AWS FlowLogs to S3","description":"This section will describe how to configure VPC flow logs that are to be sent to a S3 bucket.","sidebar":"tutorialSidebar"},"config/aws/aws-configuration":{"id":"config/aws/aws-configuration","title":"AWS Configuration","description":"This page explains the configuration steps needed for the successful crawling of an AWS account.","sidebar":"tutorialSidebar"},"config/aws/aws-readonly-user":{"id":"config/aws/aws-readonly-user","title":"AWS Configuration ReadOnly User","description":"This page describes how to add a ReadOnly AWS user. By providing the credentials of this user to the coordimap agent you are sure that no unintended changes will happen to your clould environment.","sidebar":"tutorialSidebar"},"config/configuration-introduction":{"id":"config/configuration-introduction","title":"Configuration Introduction","description":"TODO: add a sample config yaml","sidebar":"tutorialSidebar"},"config/kubernetes/kubernetes-configuration":{"id":"config/kubernetes/kubernetes-configuration","title":"Kubernetes Configuration","description":"This page explains the needed steps to correctly configure a Kubernetes connection.","sidebar":"tutorialSidebar"},"config/postgre/postgresql-configuration":{"id":"config/postgre/postgresql-configuration","title":"PostgreSQL Configuration","description":"This page explains the needed steps to correctly configure a PostgreSQL connection.","sidebar":"tutorialSidebar"},"config/postgre/postgresql-configuration-readonly-user":{"id":"config/postgre/postgresql-configuration-readonly-user","title":"PostgreSQL Read Only User","description":"This page describes how to create a read-only PostgreSQL user. Through this user you will be sure that the agent will not be able to even unintentionally modify any data in your PostgreSQL database.","sidebar":"tutorialSidebar"},"config/shared-configuration-options":{"id":"config/shared-configuration-options","title":"Shared Configuration Options","description":"This pages lists all the configuration options that are shared among all data sources.","sidebar":"tutorialSidebar"},"install/install-binaries":{"id":"install/install-binaries","title":"Binaries","description":"This section explains how to download the coordimap binaries.","sidebar":"tutorialSidebar"},"install/install-docker":{"id":"install/install-docker","title":"Docker","description":"Coordimap docker images can be found in our DockerHub account.","sidebar":"tutorialSidebar"},"install/kubernetes/install-kubernetes":{"id":"install/kubernetes/install-kubernetes","title":"Kubernetes Installation","description":"This section describes the steps to deploy the coordimap agent in a kubernetes cluster.","sidebar":"tutorialSidebar"},"install/kubernetes/install-kubernetes-yaml":{"id":"install/kubernetes/install-kubernetes-yaml","title":"Kubernetes YAML file","description":"The following YAML file is the recommended one to use to deploy the coordimap agent in a kubernetes cluster.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Tutorial Intro","description":"Let\'s discover Docusaurus in less than 5 minutes.","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"coordimap helps startup teams to keep track of the different states of their underlying architecture so that everyone can have an overview and be up to date with the current state. To achieve this goal coordimap uses mainly an agent based architecture where the users will need to download the coordimap agent and deploy it in their cloud. The agent will be instructed to crawl what is configured in the configuration file.","sidebar":"tutorialSidebar"},"tutorial-basics/congratulations":{"id":"tutorial-basics/congratulations","title":"Congratulations!","description":"You have just learned the basics of Docusaurus and made some changes to the initial template.","sidebar":"tutorialSidebar"},"tutorial-basics/create-a-blog-post":{"id":"tutorial-basics/create-a-blog-post","title":"Create a Blog Post","description":"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...","sidebar":"tutorialSidebar"},"tutorial-basics/create-a-document":{"id":"tutorial-basics/create-a-document","title":"Create a Document","description":"Documents are groups of pages connected through:","sidebar":"tutorialSidebar"},"tutorial-basics/create-a-page":{"id":"tutorial-basics/create-a-page","title":"Create a Page","description":"Add Markdown or React files to src/pages to create a standalone page:","sidebar":"tutorialSidebar"},"tutorial-basics/deploy-your-site":{"id":"tutorial-basics/deploy-your-site","title":"Deploy your site","description":"Docusaurus is a static-site-generator (also called Jamstack).","sidebar":"tutorialSidebar"},"tutorial-basics/markdown-features":{"id":"tutorial-basics/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","sidebar":"tutorialSidebar"},"tutorial-extras/manage-docs-versions":{"id":"tutorial-extras/manage-docs-versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","sidebar":"tutorialSidebar"},"tutorial-extras/translate-your-site":{"id":"tutorial-extras/translate-your-site","title":"Translate your site","description":"Let\'s translate docs/intro.md to French.","sidebar":"tutorialSidebar"}}}')}}]);