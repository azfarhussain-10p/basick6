# basick6

# Load and Performance Testing on Common App using k6.io

## Install k6.io

### MAC

- Install with Homebrew by running : brew install k6

### Windows

- If you use the Chocolatey package manager you can install the unofficial k6 package with: choco install k6, Otherwise you can manually download and install the latest official .msi package from below mention link;
  https://dl.k6.io/msi/k6-latest-amd64.msi

### For More Installation Details Visit

https://github.com/k6io/k6/blob/master/README.md#install

## k6 Execution Commands (Note: execute all commands in project directory)

### Execute k6 in fulldebug Mode

k6 run /http_scenarios/loadTestPOC.js --logformat=raw --http-debug=full 2> logs.txt
