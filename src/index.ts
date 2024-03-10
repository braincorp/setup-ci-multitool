import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';

async function run(): Promise<void> {
  const version = core.getInput('version');
  
  const downloadUrl = `https://github.com/alexgartner-bc/ci-multitool/releases/download/v${version}/ci-multitool_${version}_linux_amd64.tar.gz`
  const localPath = await tc.downloadTool(downloadUrl);
  const extractedPath = await tc.extractTar(localPath);
  core.addPath(extractedPath);
}

run()