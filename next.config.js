/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.shopify.com',
      'cdnimg.webstaurantstore.com',
      'www.lootnerd.com',
      'pyxis.nymag.com',
      'cdn11.bigcommerce.com',
      'thethingswellmake.com',
      'cdn2.vectorstock.com',
      'resources.cleanitsupply.com',
      'static6.depositphotos.com',
      'cloudinary.images-iherb.com',
      'images.unsplash.com',
      'cdn2.vectorstock.com',
    ],
  },
}

module.exports = nextConfig
