module.exports = {
  cosmic: {
    bucket: {
      slug: process.env.COSMIC_BUCKET || 'nuxtjs-website',
      read_key: process.env.COSMIC_READ_KEY,
      write_key: process.env.COSMIC_WRITE_KEY
    }
  }
}
