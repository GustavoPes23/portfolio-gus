/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.behance.net', 'cloudinary.com', "res.cloudinary.com", "mir-s3-cdn-cf.behance.net"],
    },
    env: {
        user: process.env.REACT_APP_USER,
        pass: process.env.REACT_APP_USER_PASS,
        uri_api_prod: process.env.REACT_APP_API_URI_PROD
    },
};

export default nextConfig;
