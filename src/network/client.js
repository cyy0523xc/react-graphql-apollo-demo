import ApolloClient, { createNetworkInterface } from 'apollo-client';

export default (uri) => {
    const networkInterface = createNetworkInterface({uri: uri});
    networkInterface.use([{
        applyMiddleware(req, next) {
            // 中间件，可以实现全局权限校验
            console.log("apple middleware")
            console.log(req);
            if (!req.options.headers) {
                req.options.headers = {};  // Create the header object if needed.
            }

            // Send the login token in the Authorization header
            //req.options.headers.authorization = `Bearer ${TOKEN}`;
            next();
        }
    }]);

    const client = new ApolloClient({
        networkInterface,
        dataIdFromObject: r => r.id,
    });
    return client
}
