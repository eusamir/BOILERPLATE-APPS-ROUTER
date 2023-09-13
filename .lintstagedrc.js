module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`,
  ],
}
