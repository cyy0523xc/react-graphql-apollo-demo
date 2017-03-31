import ApolloClient, { createNetworkInterface } from 'apollo-client';

import auth from "./middleware/auth";
import error from "./afterware/error";

export default (uri) => {
    const networkInterface = createNetworkInterface({uri: uri});

    // 设置中间件
    networkInterface.use([auth])
        .useAfter([error]);

    const client = new ApolloClient({
        networkInterface,
        dataIdFromObject: r => r.id,
    });
    return client
};
