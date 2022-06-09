import axios from 'axios';
const baseDomain =
    'http://6kobopie-env.eba-sgmvesww.us-east-1.elasticbeanstalk.com/'; // API for products
export const basePostUrl =
    'http://6kobopie-env.eba-sgmvesww.us-east-1.elasticbeanstalk.com/'; // API for post
export const baseStoreURL =
    'http://6kobopie-env.eba-sgmvesww.us-east-1.elasticbeanstalk.com/'; // API for vendor(store)

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
