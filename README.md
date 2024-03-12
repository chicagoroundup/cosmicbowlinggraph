# Generate Donations Widget

This assumes you place the file within the root of this project.

## Generate new data file

Download the donations CSV from Squarespace. Ensure it is called "donations.csv".

```bash
# install dependencies
npm install

# generate file
npm run gen:data
```

## Developing

You can preview the data by running the dev server

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

A new deployment will occur when you commit and push this site
