import { TestRunsApi, Configuration } from 'testit-api-client';

const clientConfig = new Configuration();
clientConfig.apiKey = 'PrivateToken ' + 'Your private token';
const testRunsApi = new TestRunsApi(clientConfig, 'Your TMS address');

// eslint-disable-next-line no-unused-vars
const response = testRunsApi.createEmpty({
  projectId: "Project's guid in the TMS",
  name: 'Test run name',
});
