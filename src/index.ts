import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';

async function run(): Promise<void> {
  const version = core.getInput('version');
  
  const downloadUrl = `https://github.com/braincorp/ci-multitool/releases/download/v${version}/ci-multitool_${version}_linux_amd64.tar.gz`
  core.info(`Downloading ci-multitool from ${downloadUrl}`);
  const localPath = await tc.downloadTool(downloadUrl);
  const extractedPath = await tc.extractTar(localPath);
  core.addPath(extractedPath);
}

run()